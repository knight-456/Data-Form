"use client";

import { useState } from "react";
import {
  Check,
  ChevronRight,
  Award,
  RotateCcw,
  Lock,
  BookOpen,
  Clock,
  Trophy,
  Download,
  X,
  Menu,
  CheckCircle,
} from "lucide-react";

import { useParams, useRouter } from "next/navigation";

import { courseList } from "@/lib/data";
import { lessonList } from "@/lib/lessons.data";
import { quizList } from "@/lib/quiz.data";
import {
  getCompletedLessonsFromStorage,
  saveCompletedLessonsToStorage,
} from "@/lib/utils";
import jsPDF from "jspdf";

export default function LessonPage() {
  const { id, lessonId } = useParams();
  const router = useRouter();

  const [lessonFinished, setLessonFinished] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const course = courseList?.find((courseItem) => courseItem?.id == id);
  const lessons = lessonList?.filter(
    (lessonItem) => lessonItem?.courseId === id
  );
  const lesson = lessonList?.find(
    (lessonItem) => lessonItem?.courseId === id && lessonItem?.id === lessonId
  );

  const quiz = quizList?.find((quizItem) => quizItem?.lessonId === lessonId);

  const currentQuestion = quiz?.questions[currentQuestionIndex];
  const currentLessonIndex = lessons.findIndex((l) => l.id === lesson?.id);
  const isLastLesson = currentLessonIndex === lessons.length - 1;

  const completedLessons = getCompletedLessonsFromStorage() || [];
  const hasPassed = typeof quizScore === "number" && quizScore >= 71;

  const handleFinishLesson = () => {
    setLessonFinished(true);
  };

  const handleAnswerSelect = (answer: any) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz?.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const correctAnswers = selectedAnswers.reduce((total, answer, index) => {
        const question = quiz?.questions[index];
        // If question type is not MCQ, always mark as correct if answered
        if (question?.type !== "mcq") {
          return answer && answer?.trim() !== "" ? total + 1 : total;
        }
        // For MCQ, check if answer matches correct answer
        return answer === question.correctAnswer ? total + 1 : total;
      }, 0);
      const percentageScore = Math.round(
        (correctAnswers / quiz?.questions.length) * 100
      );
      setQuizScore(percentageScore);
    }
  };

  const handleRetakeQuiz = () => {
    setQuizScore(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
  };

  const markLessonCompleted = (lessonId: string) => {
    const uniqueLessons = Array.from(
      new Map(
        [...completedLessons, { id: lessonId }].map((l) => [l.id, l])
      ).values()
    );
    console.log("uniqueLessons", uniqueLessons, lessonId);
    saveCompletedLessonsToStorage(uniqueLessons);
  };

  const handleNextLesson = () => {
    if (!quiz || !hasPassed) return;

    markLessonCompleted(lesson!.id as string);

    const nextLesson = lessons[currentLessonIndex + 1];

    if (!nextLesson) return;

    router.push(`/courses/${course?.id}/lessons/${nextLesson.id}`);

    setLessonFinished(false);
    setQuizScore(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
  };

  const isLessonCompleted = (lessonId: string) =>
    completedLessons?.some((l: any) => l.id === lessonId);

  const isLessonUnlocked = (lessonIndex: number) => {
    if (lessonIndex === 0) return true; // first lesson always open

    const prevLesson = lessons[lessonIndex - 1];
    return isLessonCompleted(prevLesson.id);
  };

  const handleDownloadCertificate = () => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "pt",
      format: "a4",
    });

    const userName = "John Doe"; // from auth / profile
    const courseTitle = course?.title ?? "Course";
    const date = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    doc.setFontSize(24);
    doc.text("Certificate of Completion", 210, 100, { align: "center" });
    doc.setFontSize(18);
    doc.text(`This is to certify that`, 210, 150, { align: "center" });
    doc.setFontSize(26);
    doc.text(userName, 210, 190, { align: "center" });
    doc.setFontSize(18);
    doc.text(`has successfully completed`, 210, 230, { align: "center" });
    doc.text(courseTitle, 210, 260, { align: "center" });
    doc.setFontSize(14);
    doc.text(`Issued on: ${date}`, 210, 300, { align: "center" });

    // You can add logos or borders; jsPDF supports images via addImage.[web:12]
    doc.save(`certificate-${courseTitle}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {course?.title}
                </h1>
                <p className="text-sm text-gray-500 hidden sm:block">
                  Lesson {lessons.findIndex((l) => l.id === lesson?.id) + 1} of{" "}
                  {lessons.length}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  {lesson?.duration}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
            style={{
              width: `${
                ((lessons.findIndex((l) => l.id === lesson?.id) + 1) /
                  lessons.length) *
                100
              }%`,
            }}
          ></div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-2 py-2">
        <div className="grid lg:grid-cols-4 gap-5">
          {/* Sidebar - Lesson List */}
          <aside
            className={`lg:block ${
              showSidebar ? "block" : "hidden"
            } lg:col-span-1`}
          >
            <div className="bg-white rounded-2xl shadow-sm border sticky top-24 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                <h3 className="font-bold flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Course Content
                </h3>
                <p className="text-sm text-blue-100 mt-1">
                  {completedLessons?.length - 1 || 0} of {lessons?.length}{" "}
                  completed
                </p>
              </div>

              <div className="p-2 max-h-[calc(100vh-100px)] overflow-y-auto">
                {!!lessons?.length &&
                  lessons.map((l, index) => {
                    const completed = isLessonCompleted(l.id);
                    const unlocked = isLessonUnlocked(index);
                    const isActive = l.id === lesson?.id;

                    const handleClickLesson = () => {
                      if (!unlocked) return;
                      router.push(`/courses/${course?.id}/lessons/${l.id}`);
                      setLessonFinished(false);
                      setQuizScore(null);
                      setCurrentQuestionIndex(0);
                      setSelectedAnswers([]);
                    };

                    return (
                      <button
                        key={l.id}
                        disabled={!unlocked}
                        className={`w-full text-left p-4 rounded-xl mb-2 transition-all group ${
                          isActive
                            ? "bg-blue-50 border-2 border-blue-500"
                            : !unlocked
                            ? "bg-gray-50 cursor-not-allowed opacity-60"
                            : "hover:bg-gray-50"
                        }`}
                        onClick={handleClickLesson}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                              completed
                                ? "bg-green-500 text-white"
                                : l.id === lesson?.id
                                ? "bg-blue-500 text-white"
                                : unlocked
                                ? "bg-gray-200 text-gray-400"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {completed ? (
                              <Check className="h-4 w-4" />
                            ) : unlocked ? (
                              <Lock className="h-4 w-4" />
                            ) : (
                              index + 1
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4
                              className={`font-semibold text-sm mb-1 ${
                                l.id === lesson?.id
                                  ? "text-blue-700"
                                  : unlocked
                                  ? "text-gray-400"
                                  : "text-gray-700"
                              }`}
                            >
                              {l.title}
                            </h4>
                            {l.id === lesson?.id && (
                              <span className="text-xs text-blue-600 font-medium">
                                Currently watching
                              </span>
                            )}
                          </div>
                          {l.id === lesson?.id && (
                            <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                    );
                  })}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-6">
            {/* Video Section */}
            {!lessonFinished && (
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
                  {/* Video Player */}
                  <div className="relative aspect-video bg-gray-900">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${lesson?.videoId}`}
                      title="Lesson Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Lesson Info */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                          {lesson?.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          {lesson?.subtitle}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handleFinishLesson}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <Check className="h-5 w-5" />
                      Mark as Complete & Start Quiz
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Quiz Section */}
            {lessonFinished && quizScore === null && (
              <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Lesson Quiz</h3>
                      <p className="text-purple-100">Test your knowledge</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                      <p className="text-sm font-medium">
                        Question {currentQuestionIndex + 1}/
                        {quiz?.questions?.length}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <div className="mb-6">
                    <div className="flex gap-2 mb-6">
                      {quiz?.questions.map((_, index) => (
                        <div
                          key={index}
                          className={`h-2 flex-1 rounded-full transition-all ${
                            index < currentQuestionIndex
                              ? "bg-green-500"
                              : index === currentQuestionIndex
                              ? "bg-blue-500"
                              : "bg-gray-200"
                          }`}
                        ></div>
                      ))}
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-6">
                      <p className="text-lg font-semibold text-gray-900 mb-1">
                        {currentQuestion?.question}
                      </p>
                      {currentQuestion?.type !== "mcq" && (
                        <p className="text-sm text-gray-600 mt-2">
                          Type your answer below
                        </p>
                      )}
                    </div>

                    {currentQuestion?.type === "mcq" ? (
                      <div className="grid gap-3">
                        {!!currentQuestion?.options?.length &&
                          currentQuestion?.options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleAnswerSelect(option)}
                              className={`text-left p-5 rounded-xl border-2 transition-all font-medium ${
                                selectedAnswers[currentQuestionIndex] === option
                                  ? "border-blue-500 bg-blue-50 text-blue-700 shadow-md"
                                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                    selectedAnswers[currentQuestionIndex] ===
                                    option
                                      ? "border-blue-500 bg-blue-500"
                                      : "border-gray-300"
                                  }`}
                                >
                                  {selectedAnswers[currentQuestionIndex] ===
                                    option && (
                                    <Check className="h-4 w-4 text-white" />
                                  )}
                                </div>
                                <span>{option}</span>
                              </div>
                            </button>
                          ))}
                      </div>
                    ) : (
                      <textarea
                        value={selectedAnswers[currentQuestionIndex] || ""}
                        onChange={(e) => handleAnswerSelect(e.target.value)}
                        placeholder="Type your answer here..."
                        rows={5}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none outline-none text-gray-900"
                        autoFocus
                      />
                    )}
                  </div>

                  <button
                    onClick={handleNextQuestion}
                    disabled={!selectedAnswers[currentQuestionIndex]}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    {currentQuestionIndex < quiz?.questions?.length - 1 ? (
                      <>
                        Next Question <ChevronRight className="h-5 w-5" />
                      </>
                    ) : (
                      <>
                        Submit Quiz <Check className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Quiz Results / Certificate */}
            {quizScore !== null && (
              <div className="space-y-6">
                {isLastLesson && hasPassed ? (
                  // Certificate
                  <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
                    <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 p-8 lg:p-12 text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                      <div className="relative">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-xl mb-6">
                          <Trophy className="h-12 w-12 text-orange-500" />
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-3">
                          Congratulations! 🎉
                        </h2>
                        <p className="text-xl text-white/90 mb-6">
                          You've completed the entire course!
                        </p>
                      </div>
                    </div>

                    <div className="p-8 lg:p-12">
                      <div className="max-w-2xl mx-auto">
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 p-8 mb-8">
                          <div className="text-center mb-6">
                            <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              Certificate of Completion
                            </h3>
                            <p className="text-gray-600">
                              This certifies that you have successfully
                              completed
                            </p>
                            <p className="text-xl font-bold text-blue-600 mt-2">
                              {course?.title}
                            </p>
                          </div>

                          <div className="border-t-2 border-dashed border-blue-200 pt-6 grid grid-cols-3 gap-4 text-center">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">
                                Final Score
                              </p>
                              <p className="text-2xl font-bold text-gray-900">
                                {quizScore}%
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">
                                Lessons
                              </p>
                              <p className="text-2xl font-bold text-gray-900">
                                {lessons.length}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Date</p>
                              <p className="text-2xl font-bold text-gray-900">
                                {new Date().toLocaleDateString("en-US", {
                                  month: "short",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={handleDownloadCertificate}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                          <Download className="h-5 w-5" />
                          Download Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Quiz Result
                  <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
                    <div
                      className={`p-8 lg:p-12 text-center ${
                        quizScore > 70
                          ? "bg-gradient-to-br from-green-50 to-emerald-50"
                          : "bg-gradient-to-br from-red-50 to-orange-50"
                      }`}
                    >
                      <div
                        className={`inline-flex items-center justify-center w-24 h-24 rounded-full shadow-xl mb-6 ${
                          quizScore > 70 ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {quizScore > 70 ? (
                          <CheckCircle className="h-12 w-12 text-white" />
                        ) : (
                          <X className="h-12 w-12 text-white" />
                        )}
                      </div>

                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                        {quizScore > 70 ? "Great Job! 🎉" : "Keep Trying! 💪"}
                      </h2>
                      <p className="text-xl text-gray-600 mb-6">
                        Your quiz score
                      </p>
                      <div className="text-6xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                        {quizScore}%
                      </div>

                      {quizScore > 70 ? (
                        <div className="bg-green-100 border border-green-300 rounded-xl p-4 max-w-md mx-auto">
                          <p className="text-green-800 font-semibold">
                            ✓ You passed! Next lesson unlocked.
                          </p>
                        </div>
                      ) : (
                        <div className="bg-red-100 border border-red-300 rounded-xl p-4 max-w-md mx-auto">
                          <p className="text-red-800 font-semibold">
                            You need 71% or higher to pass
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="p-8 lg:p-12">
                      <div className="max-w-md mx-auto space-y-4">
                        {quizScore <= 70 ? (
                          <button
                            onClick={handleRetakeQuiz}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                          >
                            <RotateCcw className="h-5 w-5" />
                            Retake Quiz
                          </button>
                        ) : !isLastLesson ? (
                          <button
                            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            onClick={handleNextLesson}
                          >
                            Next Lesson
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
