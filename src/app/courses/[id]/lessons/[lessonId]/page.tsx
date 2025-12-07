'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { courses } from '@/lib/data';
import { Quiz } from '@/components/Quiz';
import { Certificate } from '@/components/Certificate';
import { useParams, useRouter } from 'next/navigation';
import { VideoPlayer } from '@/components/VideoPlayer';
import { Button } from '@/components/ui/button';

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();

  const course = courses.find((c) => c.id === params.id);
  const lesson = course?.lessons.find((l) => l.id === params.lessonId);
  const [lessonFinished, setLessonFinished] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  if (!course || !lesson) {
    return <div>Lesson not found</div>;
  }

  const currentLessonIndex = course.lessons.findIndex(
    (l) => l.id === lesson.id
  );
  const isLastLesson = currentLessonIndex === course.lessons.length - 1;

  const handleFinishLesson = () => {
    setLessonFinished(true);
  };

  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
  };

  const handleNextLesson = () => {
    if (quizScore && quizScore > 70 && !isLastLesson) {
      const nextLesson = course.lessons[currentLessonIndex + 1];
      if (nextLesson) {
        router.push(`/courses/${course.id}/lessons/${nextLesson.id}`);
      }
    }
  };

  const handleDownloadCertificate = () => {
    // In a real app, this would trigger a PDF download
    alert('Downloading certificate...');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-extrabold mb-4">{lesson.title}</h1>
            <p className="text-gray-400 mb-8">{lesson.content}</p>
          </div>
          <div>
            {!lessonFinished ? (
              <div className="sticky top-24">
                <VideoPlayer videoId={lesson.videoId || 'O_9h3PqF_6M'} />
                <Button onClick={handleFinishLesson} className="w-full mt-4">
                  Finish Lesson
                </Button>
              </div>
            ) : quizScore === null ? (
              <Quiz
                questions={lesson.quiz}
                onQuizComplete={handleQuizComplete}
              />
            ) : (
              <div>
                {isLastLesson && quizScore > 70 ? (
                  <Certificate
                    courseName={course.title}
                    onDownload={handleDownloadCertificate}
                  />
                ) : (
                  <div className="bg-gray-800 p-8 rounded-lg text-center">
                    <h2 className="text-2xl font-bold mb-4">Quiz Result</h2>
                    <p className="text-lg mb-4">Your score: {quizScore}%</p>
                    {quizScore <= 70 && (
                      <div>
                        <p className="text-red-500 mb-4">
                          You need a score of 71% or higher to pass and unlock
                          the next lesson.
                        </p>
                        <Button
                          onClick={() => setQuizScore(null)}
                          className="w-full"
                        >
                          Retake Quiz
                        </Button>
                      </div>
                    )}
                    {quizScore > 70 && !isLastLesson && (
                      <div>
                        <p className="text-green-500 mb-4">
                          Great job! You passed.
                        </p>
                        <Button
                          onClick={handleNextLesson}
                          className="w-full"
                        >
                          Next Lesson
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
