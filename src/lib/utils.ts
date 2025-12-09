import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Course, Lesson } from "./data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const savePurchasedCoursesToStorage = (courses: Course[]) => {
  if (typeof window === "undefined") return;

  localStorage.setItem("purchased_courses", JSON.stringify(courses));
};

export const getPurchasedCoursesFromStorage = () => {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem("purchased_courses");
  return data ? JSON.parse(data) : [];
};

export const saveCompletedLessonsToStorage = (lessons: Lesson[]) => {
  if (typeof window === "undefined") return;

  localStorage.setItem("completed_lesson", JSON.stringify(lessons));
};

export const getCompletedLessonsFromStorage = () => {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem("completed_lesson");
  return data ? JSON.parse(data) : [];
};
