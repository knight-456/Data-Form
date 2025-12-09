"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, StarOff, Clock, PlayCircle, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
  duration?: string;
  lessonsCount?: number;
  price?: number; // Changed to number to match your data
  rating?: number; // 0-5 scale
}

export function CourseCard({
  id,
  title,
  description,
  image,
  level = "Beginner",
  duration = "4h 15m",
  lessonsCount = 24,
  price = 49.99,
  rating = 4.5,
}: CourseCardProps) {
  // Generate star array based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="h-4 w-4 text-yellow-400 fill-yellow-400"
        />
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="h-4 w-4 text-yellow-400 fill-yellow-400" />
      );
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <StarOff key={`empty-${i}`} className="h-4 w-4 text-gray-600" />
      );
    }

    return stars;
  };

  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 shadow-md transition-shadow hover:shadow-xl focus-within:ring-2 focus-within:ring-blue-500"
    >
      <Link
        href={`/courses/${id}`}
        className="flex flex-1 flex-col focus:outline-none"
      >
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2 py-0.5 text-xs font-medium text-gray-100 backdrop-blur">
            {level}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h3 className="line-clamp-2 text-base font-semibold leading-snug">
            {title}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs text-gray-400">
            {description}
          </p>

          <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <PlayCircle className="h-3.5 w-3.5" />
              <span>{lessonsCount} lessons</span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <div className="flex">{renderStars(rating)}</div>
              <span className="ml-1 text-xs text-gray-400">({rating})</span>
            </div>
            <span className="text-sm font-semibold text-blue-400">
              ${price}
            </span>
          </div>

          <button
            type="button"
            className="mt-3 inline-flex items-center justify-between rounded-lg border border-gray-800 bg-gray-900/60 px-3 py-2 text-xs font-medium text-gray-100 transition-colors group-hover:border-blue-500 group-hover:bg-blue-500/10"
          >
            <span>View details</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </Link>
    </motion.article>
  );
}
