export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  level: string;
  duration: string;
  lessonsCount: number;
  rating: number;
  lessons: Lesson[];
  image: string;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  overview: string;
  quiz: QuizQuestion[];
  videoId: string;
}

export interface QuizQuestion {
  id: string;
  type: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export const courseList = [
  {
    id: "c1",
    title: "Complete React & Next.js Masterclass",
    description: "Master React 18, Next.js App Router, and modern UI patterns",
    longDescription:
      "This comprehensive masterclass is designed to transform you from a beginner into a production-ready React and Next.js developer. You will explore modern frontend architecture patterns, understand how server and client components work, master data fetching strategies, and build scalable applications. The course also focuses on performance optimization, authentication flows, SEO best practices, and deployment techniques that mirror real-world enterprise development workflows. By the end of this course, you will have built multiple production-grade projects and gained confidence to work in modern web teams.",
    price: 250,
    originalPrice: 600,
    lessons: 70,
    rating: 4.8,
    students: 12435,
    reviews: 2156,
    level: "All Levels",
    duration: "21h 45m",
    lessonsCount: 70,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    instructor: "Emma Thompson",
    features: [
      "30+ hours on-demand video",
      "25 coding challenges",
      "Real-world projects",
      "Certificate of completion",
      "Lifetime access",
      "Mobile & TV access",
    ],
    lastUpdated: "Dec 2024",
  },

  {
    id: "c2",
    title: "Full-Stack Web Development Bootcamp",
    description: "Become a full-stack developer using modern tools",
    longDescription:
      "This bootcamp walks you through the complete web development lifecycle from building dynamic user interfaces to creating scalable backend systems. You will learn how to design RESTful APIs, manage authentication and session flows, work with databases, and deploy full-stack applications to cloud platforms. The course emphasizes real-life development scenarios such as error handling, logging, caching, background jobs, and production monitoring practices used by professional engineering teams.",
    price: 249,
    originalPrice: 350,
    lessons: 45,
    rating: 4.7,
    students: 9876,
    reviews: 1876,
    level: "Beginner to Advanced",
    duration: "32h 10m",
    lessonsCount: 45,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    instructor: "Emma Thompson",
    features: [
      "40+ hours video",
      "Backend + Frontend projects",
      "Cloud deployment guides",
      "Lifetime access",
      "Certificate",
    ],
    lastUpdated: "Nov 2024",
  },

  {
    id: "c3",
    title: "Node.js & Express API Development",
    description: "Build scalable REST APIs from scratch",
    longDescription:
      "This course teaches you how to design and build highly scalable RESTful APIs using Node.js and Express. You will learn about middleware architecture, routing, authentication, authorization, logging, background processing, testing strategies, and API documentation. The course focuses heavily on production readiness, including environment-based configuration, rate limiting, caching, and security best practices.",
    price: 179,
    originalPrice: 350,
    lessons: 20,
    rating: 4.6,
    students: 8455,
    reviews: 1432,
    level: "Intermediate",
    duration: "18h 50m",
    lessonsCount: 20,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    instructor: "Emma Thompson",
    features: [
      "Hands-on API projects",
      "JWT authentication",
      "Testing & mocking",
      "Production-ready patterns",
    ],
    lastUpdated: "Oct 2024",
  },
  {
    id: "c4",
    title: "UI/UX Design for Developers",
    description:
      "Learn modern UI/UX principles to design beautiful, user-friendly interfaces.",
    longDescription:
      "This course is crafted for developers who want to strongly understand design principles and user experience. You will learn how to create visually appealing, highly usable, and accessible interfaces that users love. The course covers topics such as color psychology, typography systems, spacing and layout consistency, design systems, and usability principles. You will also learn practical workflows using tools like Figma and how to translate design concepts into real-world code. By the end of the course, you will be able to create professional-grade website and application designs confidently.",
    price: 59,
    originalPrice: 200,
    lessons: 25,
    level: "Beginner",
    duration: "9h 40m",
    lessonsCount: 10,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    instructor: "Emma Thompson",
    students: 9823,
    reviews: 214,
    lastUpdated: "September 2024",
    features: [
      "Design fundamentals",
      "Hands-on practice",
      "Figma workflows",
      "UI kits & assets",
      "Design systems",
    ],
  },
  {
    id: "c5",
    title: "Node.js & Express Backend Development",
    description:
      "Build scalable and secure backend APIs using Node.js and Express.",
    longDescription:
      "This in-depth backend development course teaches you how to create highly scalable, secure, and performant APIs using Node.js and Express. You will learn server architecture, request and response cycles, middleware design patterns, authentication and authorization, database integration, and error handling strategies. The course also covers best practices for structuring enterprise-level backend codebases, improving API security, logging, monitoring, and production deployment. By completing this course, you will be able to confidently build backend systems for real-world applications.",
    price: 79,
    originalPrice: 150,
    lessons: 80,
    level: "Intermediate",
    duration: "11h 15m",
    lessonsCount: 10,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80",
    instructor: "James Anderson",
    students: 13456,
    reviews: 301,
    lastUpdated: "November 2024",
    features: [
      "REST API design",
      "JWT authentication",
      "MongoDB integration",
      "Security best practices",
      "Production-ready structure",
    ],
  },
  {
    id: "c6",
    title: "TypeScript Complete Guide",
    description:
      "Master TypeScript for scalable and type-safe JavaScript applications.",
    longDescription:
      "This complete TypeScript course is designed to transform your JavaScript development experience by introducing powerful type safety and scalable development practices. You will learn the core principles of static typing, interfaces, type aliases, generics, decorators, and module systems. The course also demonstrates how to integrate TypeScript seamlessly with popular frameworks such as React and Node.js. Through real-world examples, you will gain the confidence to build large, maintainable, and error-resistant codebases.",
    price: 65,
    originalPrice: 100,
    lessons: 12,
    level: "Beginner to Advanced",
    duration: "10h 00m",
    lessonsCount: 10,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
    instructor: "Olivia Martinez",
    students: 11234,
    reviews: 278,
    lastUpdated: "August 2024",
    features: [
      "Static typing mastery",
      "Interfaces & generics",
      "Project-based learning",
      "Best practices",
    ],
  },
];
