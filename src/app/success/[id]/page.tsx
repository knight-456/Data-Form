'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { courses } from '@/lib/data';
import { Header } from '@/components/Header';
import { Progress } from '@/components/ui/progress';

export default function SuccessPage() {
  const { id } = useParams();
  const router = useRouter();
  const course = courses.find((c) => c.id === id);
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 20));
    }, 1000);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      // In a real app, you'd set the purchase status in the database.
      // For this demo, we'll use local storage.
      localStorage.setItem(`course_${course?.id}_purchased`, 'true');
      router.push(`/courses/${course?.id}`);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(countdownInterval);
      clearTimeout(redirectTimeout);
    };
  }, [course, router]);

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
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Purchase Successful!</h1>
          <p className="text-gray-400 mb-6">
            You have successfully purchased the course: {course.title}
          </p>
          <Progress value={progress} className="mb-4" />
          <p className="text-sm text-gray-500">
            Redirecting you to the course in {countdown} seconds...
          </p>
        </div>
      </main>
    </div>
  );
}
