"use client";

import { useState, useMemo } from "react";

import { Header } from "@/components/Header";
import { CourseCard } from "@/components/CourseCard";

import { courseList } from "@/lib/data";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const filteredCourses = useMemo(() => {
    const filtered = courseList.filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort courses
    switch (sortBy) {
      case "newest":
        return filtered.sort((a, b) => (b.id > a.id ? 1 : -1));
      case "price-low":
        return filtered.sort((a, b) => a.price - b.price);
      case "price-high":
        return filtered.sort((a, b) => b.price - a.price);
      default:
        return filtered; // Most popular (default order)
    }
  }, [searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main className="mx-auto max-w-6xl py-10 px-4 lg:px-0">
        <section className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Browse courses
            </h1>
            <p className="mt-1 text-sm text-gray-400 max-w-2xl">
              Find the right course by topic, level, or duration.
            </p>
          </div>

          <div className="flex w-full max-w-md gap-3">
            <input
              type="search"
              placeholder="Search courses..."
              className="flex-1 rounded-md bg-gray-900 border border-gray-700 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="rounded-md bg-gray-800 border border-gray-700 px-3 py-2 text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
              Filters
            </button>
          </div>
        </section>

        <section className="mb-6 flex items-center justify-between text-sm text-gray-400">
          <span>{filteredCourses.length} courses</span>
          <select
            className="bg-gray-900/50 border border-gray-700 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="popular">Most popular</option>
            <option value="newest">Newest first</option>
            <option value="price-low">Price: Low to high</option>
            <option value="price-high">Price: High to low</option>
          </select>
        </section>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">
              No courses found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
