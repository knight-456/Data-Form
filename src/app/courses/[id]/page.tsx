'use client';

import { useMemo } from 'react';
import { Header } from '@/components/Header';
import { courses } from '@/lib/data';
import { CourseDetails } from '@/components/CourseDetails';
import { useParams } from 'next/navigation';

export default function CoursePage() {
  const { id } = useParams();

  const course = courses.find((c) => c.id === id);

  const isPurchased = useMemo(() => {
    if (typeof window === 'undefined' || !course) {
      return false;
    }
    const purchased = localStorage.getItem(`course_${course.id}_purchased`);
    return purchased === 'true';
  }, [course]);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="container mx-auto py-12 px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Course not found</h1>
            <p className="text-gray-400">The course you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto py-12 px-6">
        <CourseDetails course={course} isPurchased={isPurchased} />
      </main>
    </div>
  );
}
