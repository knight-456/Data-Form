"use client";

import { useMemo, useState } from "react";
import {
  Play,
  Clock,
  Star,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Users,
  Award,
  Lock,
  ArrowLeft,
} from "lucide-react";

import { useParams, useRouter } from "next/navigation";

import { courseList } from "@/lib/data";
import { lessonList } from "@/lib/lessons.data";
import {
  getCompletedLessonsFromStorage,
  getPurchasedCoursesFromStorage,
} from "@/lib/utils";

export default function CourseDetail() {
  const { id } = useParams();
  const router = useRouter();

  const [expandedLesson, setExpandedLesson] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("curriculum");

  const course = courseList?.find((item) => item?.id === id);

  const lessons = lessonList?.filter(
    (lessonItem) => lessonItem?.courseId === id
  );

  const totalDuration = lessons.reduce((sum, lesson) => {
    const minutes = parseInt(lesson.duration);
    return sum + minutes;
  }, 0);

  const isCoursePurchased = useMemo(() => {
    let isPurchased = false;

    const storedCourses = getPurchasedCoursesFromStorage();

    if (!!storedCourses?.length) {
      const selectedCourse = storedCourses?.find(
        (item: any) => item?.id === id
      );

      if (selectedCourse) {
        isPurchased = true;
      }
    }

    return isPurchased;
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => router.back()}
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Courses</span>
            </button>
            <div className="flex items-center gap-4">
              <button className="text-gray-600 hover:text-gray-900">
                <Star className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                <Award className="h-4 w-4 text-yellow-400" />
                <span>Bestseller</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {course?.title}
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed">
                {course?.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="font-semibold">{course?.rating}</span>
                  <span className="text-gray-300">
                    ({course?.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{course?.students?.toLocaleString()} students</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-300">
                <span>
                  Created by{" "}
                  <span className="text-white font-medium">
                    {course?.instructor}
                  </span>
                </span>
                <span>•</span>
                <span>Last updated {course?.lastUpdated}</span>
              </div>
            </div>

            {/* Right Card - Purchase */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Preview Image */}
                <div className="relative aspect-video bg-gray-200">
                  <img
                    src={course?.image}
                    alt={course?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button className="bg-white/90 hover:bg-white p-5 rounded-full shadow-xl transition-all hover:scale-110">
                      <Play className="h-8 w-8 text-gray-900" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                    Preview
                  </div>
                </div>

                {/* Pricing */}
                <div className="p-6 space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">
                      ${course?.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      $199
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                      55% OFF
                    </span>
                  </div>

                  {!isCoursePurchased ? (
                    <>
                      <button
                        onClick={() => router.push(`/checkout/${course?.id}`)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                      >
                        Buy Now
                      </button>
                      <button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 rounded-lg border-2 border-gray-300 transition-colors">
                        Add to Cart
                      </button>
                    </>
                  ) : (
                    <button
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition-colors shadow-lg"
                      onClick={() =>
                        router.push(
                          `/courses/${course?.id}/lessons/${lessons[0]?.id}`
                        )
                      }
                    >
                      <CheckCircle className="inline h-5 w-5 mr-2" />
                      Start Learning
                    </button>
                  )}

                  <p className="text-center text-sm text-gray-600">
                    30-Day Money-Back Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="border-b">
                <nav className="flex gap-8 px-6">
                  {["Curriculum", "Overview", "Instructor", "Reviews"].map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`py-4 font-medium border-b-2 transition-colors ${
                          activeTab === tab.toLowerCase()
                            ? "border-blue-600 text-blue-600"
                            : "border-transparent text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {tab}
                      </button>
                    )
                  )}
                </nav>
              </div>

              {/* Curriculum Content */}
              {activeTab === "curriculum" && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Course Content
                    </h2>
                    <div className="text-sm text-gray-600">
                      {lessons.length} lessons •{" "}
                      {Math.floor(totalDuration / 60)}h {totalDuration % 60}m
                    </div>
                  </div>

                  <div className="space-y-2">
                    {lessons.map((lesson, index) => {
                      let isLessonCompleted = false;

                      const completedLessons = getCompletedLessonsFromStorage();
                      if (!!completedLessons?.length) {
                        const selectedLesson = completedLessons?.find(
                          (item: any) => item?.id === lesson?.id
                        );

                        if (selectedLesson) {
                          isLessonCompleted = true;
                        }
                      }

                      return (
                        <div
                          key={lesson.id}
                          className="border rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
                        >
                          <button
                            onClick={() =>
                              setExpandedLesson(
                                expandedLesson === lesson.id ? null : lesson.id
                              )
                            }
                            disabled={!isCoursePurchased && !lesson?.isPreview}
                            className="w-full p-4 flex items-center gap-4 text-left hover:bg-gray-50 transition-colors disabled:cursor-not-allowed"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-700">
                              {index + 1}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-medium text-gray-900">
                                  {lesson.title}
                                </h3>
                                {lesson?.isPreview && (
                                  <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded">
                                    Preview
                                  </span>
                                )}
                                {!isCoursePurchased && !lesson?.isPreview && (
                                  <Lock className="h-4 w-4 text-gray-400" />
                                )}
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {lesson.duration}
                                </span>
                                {lesson?.isPreview && (
                                  <span className="flex items-center gap-1 text-blue-600">
                                    <Play className="h-4 w-4" />
                                    Free preview
                                  </span>
                                )}
                              </div>
                            </div>

                            {isLessonCompleted && (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            )}

                            {expandedLesson === lesson.id ? (
                              <ChevronUp className="h-5 w-5 text-gray-400" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                            )}
                          </button>

                          {expandedLesson === lesson.id && (
                            <div className="px-4 pb-4 pl-16 bg-gray-50 border-t">
                              <p className="text-sm text-gray-700 py-4">
                                Lesson description and overview would go here.
                                This lesson covers the fundamentals and
                                practical applications.
                              </p>
                              {(isCoursePurchased || lesson?.isPreview) && (
                                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2">
                                  <Play className="h-4 w-4" />
                                  Start Lesson
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Other Tab Contents */}
              {activeTab === "overview" && (
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {"What you'll learn"}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "Build production-ready React applications",
                        "Master Next.js 14 and App Router",
                        "Implement server and client components",
                        "Create scalable architecture patterns",
                        "Deploy applications to production",
                        "Optimize performance and SEO",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Requirements
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Basic JavaScript knowledge</li>
                      <li>Familiarity with HTML & CSS</li>
                      <li>A computer with internet connection</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Desktop Only */}
          <div className="hidden lg:block">
            <div className="sticky top-24 bg-white rounded-xl shadow-sm border p-6 space-y-4">
              {/* Features List */}
              <div className="pt-4 border-t space-y-3">
                <h4 className="font-semibold text-gray-900">
                  This course includes:
                </h4>
                {course?.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <CheckCircle className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Course Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Level</span>
                    <span className="font-medium text-gray-900">
                      {course?.level || "Beginner"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Students</span>
                    <span className="font-medium text-gray-900">
                      {course?.students?.toLocaleString() || 0}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Languages</span>
                    <span className="font-medium text-gray-900">English</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Captions</span>
                    <span className="font-medium text-gray-900">Yes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
