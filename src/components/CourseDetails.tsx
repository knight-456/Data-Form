"use client";

import { Course } from "@/lib/data";
import { LessonAccordion } from "./LessonAccordion";
import { VideoPlayer } from "./VideoPlayer";
import { Button } from "./ui/button";
import Link from 'next/link';
import { useParams } from "next/navigation";

interface CourseDetailsProps {
  course: Course;
  isPurchased: boolean;
}

export function CourseDetails({ course, isPurchased }: CourseDetailsProps) {
    const { id: courseId } = useParams();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2">
        <h1 className="text-4xl font-extrabold mb-4">{course.title}</h1>
        <p className="text-gray-400 mb-8">{course.longDescription}</p>
        <h2 className="text-2xl font-bold mb-4">Course Content</h2>
        <LessonAccordion lessons={course.lessons} isPurchased={isPurchased} />
      </div>
      <div className="relative">
        <div className="sticky top-24">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <VideoPlayer videoId="O_9h3PqF_6M" />
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">${course.price}</h3>
              {isPurchased ? (
                <Button className="w-full" asChild>
                  <Link href={`/courses/${courseId}/lessons/${course.lessons[0].id}`}>Go to Course</Link>
                </Button>
              ) : (
                <Button className="w-full" asChild>
                  <a href={`/checkout/${course.id}`}>Buy Now</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}