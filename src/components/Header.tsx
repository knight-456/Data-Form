"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";

export function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold">LMS</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Courses
          </Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
