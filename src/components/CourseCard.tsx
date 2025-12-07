"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

export function CourseCard({ id, title, description, image }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <Link href={`/courses/${id}`}>
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-gray-500" />
            </div>
            <span className="text-lg font-bold text-blue-400">$49.99</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
