'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Lesson } from '@/lib/data';
import { Button } from './ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface LessonAccordionProps {
  lessons: Lesson[];
  isPurchased: boolean;
}

export function LessonAccordion({ lessons, isPurchased }: LessonAccordionProps) {
  const [openLessonId, setOpenLessonId] = useState<string | null>(null);
  const { id: courseId } = useParams();

  const handleToggleLesson = (lessonId: string) => {
    setOpenLessonId(openLessonId === lessonId ? null : lessonId);
  };

  return (
    <div className="space-y-4">
      {lessons.map((lesson) => (
        <div key={lesson.id} className="rounded-lg border border-gray-700">
          <button
            className="flex w-full items-center justify-between p-4 text-left font-semibold"
            onClick={() => handleToggleLesson(lesson.id)}
          >
            <span>{lesson.title}</span>
            <ChevronDown
              className={`transform transition-transform ${
                openLessonId === lesson.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openLessonId === lesson.id && (
            <div className="p-4 border-t border-gray-700">
              <p className="mb-4 text-gray-400">{lesson.overview}</p>
              <Button disabled={!isPurchased} asChild>
                <Link href={`/courses/${courseId}/lessons/${lesson.id}`}>
                  Start Lesson
                </Link>
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}