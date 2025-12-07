"use client";

import { Header } from "@/components/Header";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto py-12 px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Our LMS</h1>
          <p className="text-lg text-gray-400">
            Explore our courses and start your learning journey today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              image={course.image}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
