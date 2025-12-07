export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
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
  question: string;
  options: string[];
  correctAnswer: string;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description: "A comprehensive course for beginners looking to start their journey in web development.",
    longDescription:
      "This comprehensive course is designed for absolute beginners and covers the fundamentals of web development from the ground up. You'll learn the essential languages of the web—HTML, CSS, and JavaScript—and how they work together to create modern, responsive websites. We'll also cover important topics like version control with Git, debugging, and how to deploy your first website to the internet. By the end of this course, you'll have a solid foundation and the confidence to build your own web projects and pursue a career in this exciting field.",
    price: 49.99,
    image: "/web-dev.jpg",
    lessons: [
      {
        id: "1",
        title: "HTML Basics",
        content:
          "HTML (HyperText Markup Language) is the backbone of every website. This lesson will guide you through the essential HTML tags, explaining how to structure a webpage with headings, paragraphs, lists, links, and images. We'll cover semantic HTML5 elements like `<header>`, `<footer>`, `<nav>`, `<article>`, and `<section>`, and why they are important for accessibility and SEO. You'll get hands-on experience building a simple but well-structured webpage from scratch.",
        overview:
          "In this introductory lesson, you'll learn the fundamental building blocks of the web. We'll explore the basic structure of an HTML document, understand the purpose of common tags, and by the end, you will have created your very first webpage. This lesson lays the foundation for everything else you'll learn in web development.",
        videoId: "O_9h3PqF_6M",
        quiz: [
          {
            question: "What does HTML stand for?",
            options: [
              "Hyper Text Markup Language",
              "High-level Text Manipulation Language",
              "Home Tool Markup Language",
            ],
            correctAnswer: "Hyper Text Markup Language",
          },
        ],
      },
      {
        id: "2",
        title: "CSS Styling",
        content:
          "CSS (Cascading Style Sheets) is what brings a website to life. This lesson will teach you how to apply styles to your HTML documents, covering everything from colors and fonts to layout and positioning. You'll learn about the box model, a fundamental concept in CSS, and how to use selectors to target specific elements. We'll also explore different ways to include CSS in your project, including inline styles, internal stylesheets, and external stylesheets.",
        overview:
          "Learn how to use CSS to control the look and feel of your website. We'll cover selectors, properties, and the box model, and you'll learn how to apply colors, fonts, and layouts to your HTML. By the end of this lesson, you'll be able to transform a plain HTML page into a visually engaging experience.",
        videoId: "O_9h3PqF_6M",
        quiz: [
          {
            question: "What does CSS stand for?",
            options: [
              "Cascading Style Sheets",
              "Creative Style Sheets",
              "Computer Style Sheets",
            ],
            correctAnswer: "Cascading Style Sheets",
          },
        ],
      },
      {
        id: "3",
        title: "JavaScript Fundamentals",
        content:
          "JavaScript is the programming language of the web, and it's what makes websites interactive. In this lesson, you'll be introduced to the core concepts of JavaScript, including variables, data types (strings, numbers, booleans), and operators. We'll also cover the basics of functions, which are essential for writing reusable and organized code. You'll get to write your first JavaScript code and see it run in the browser.",
        overview:
          "This lesson introduces the core concepts of JavaScript. You’ll learn how to make your web pages interactive by manipulating the DOM, handling events, and working with data. This is your first step into the world of programming and dynamic websites.",
        videoId: "O_9h3PqF_6M",
        quiz: [
          {
            question: "Which of the following is a primitive data type in JavaScript?",
            options: ["String", "Object", "Array"],
            correctAnswer: "String",
          },
        ],
      },
      {
        id: "4",
        title: "Advanced JavaScript",
        content:
          "Ready to take your JavaScript skills to the next level? This lesson dives into more advanced topics that are crucial for modern web development. We'll explore closures and how they work, understand the event loop and asynchronous programming with callbacks, Promises, and the `async/await` syntax. These concepts are fundamental for building complex, non-blocking web applications.",
        overview:
          "Take your JavaScript skills to the next level. We'll explore advanced topics like asynchronous programming with Promises and async/await, functional programming concepts, and modern ES6+ features that will make your code more powerful and concise.",
        videoId: "O_9h3PqF_6M",
        quiz: [
          {
            question: "What is a closure in JavaScript?",
            options: [
              "A function that has access to its outer function's scope, even after the outer function has returned",
              "A way to close a web browser window",
              "A type of loop",
            ],
            correctAnswer:
              "A function that has access to its outer function's scope, even after the outer function has returned",
          },
        ],
      },
      {
        id: "5",
        title: "Building a Responsive Layout",
        content:
          "In today's multi-device world, responsive design is a must. This lesson will teach you the principles of creating websites that look great on all screen sizes, from small mobile phones to large desktop monitors. We'll dive deep into CSS media queries, flexible grids, and fluid images to create a truly responsive user experience. You'll learn how to think 'mobile-first' and progressively enhance your layout for larger screens.",
        overview:
          "In this lesson, you'll learn the principles of responsive design and how to use CSS media queries to create layouts that adapt to different screen sizes. You'll be able to build websites that provide a seamless experience on any device.",
        videoId: "O_9h3PqF_6M",
        quiz: [
          {
            question: "What is the purpose of a media query in CSS?",
            options: [
              "To apply different styles based on the device's characteristics, such as screen size",
              "To query a database",
              "To play media files",
            ],
            correctAnswer:
              "To apply different styles based on the device's characteristics, such as screen size",
          },
        ],
      },
      {
        id: "6",
        title: "Introduction to React",
        content:
          "React is the most popular JavaScript library for building user interfaces, and for good reason. This lesson will introduce you to the core concepts of React, including its component-based architecture. You'll learn how to create reusable UI components, manage their state with the `useState` hook, and pass data between them using props. We'll also cover JSX, the syntax extension that makes writing React components feel like writing HTML.",
        overview:
          "This lesson provides a gentle introduction to the world of React. You'll learn about the component-based architecture, how to manage state with hooks like `useState`, and how to pass data with props. This is the first step to building modern, single-page applications.",
        videoId: "O_9h3PqF_6M",
        quiz: [
          {
            question: "What is JSX?",
            options: ["A syntax extension for JavaScript", "A type of database", "A styling language"],
            correctAnswer: "A syntax extension for JavaScript",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Advanced CSS Techniques",
    description: "Take your CSS skills to the next level with advanced techniques and best practices.",
    longDescription:
      "This course is for developers who want to master CSS. We'll dive deep into modern layout techniques like Flexbox and Grid, explore the power of CSS variables, and learn how to create beautiful animations and transitions. You'll also learn about preprocessors like Sass and how to structure your CSS for large-scale projects. By the end of this course, you'll be able to create complex and visually stunning user interfaces with confidence.",
    price: 59.99,
    image: "/css-advanced.jpg",
    lessons: [
      {
        id: "1",
        title: "Introduction to Flexbox",
        content:
          "Flexbox is a one-dimensional layout model that offers a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic. This lesson will introduce you to the core concepts of Flexbox, including the flex container and flex items, the main axis and cross axis. You'll learn how to use properties like `display: flex`, `flex-direction`, `justify-content`, and `align-items` to create flexible and responsive layouts with less code.",
        overview:
          "This lesson will introduce you to the core concepts of Flexbox and how to use it to create one-dimensional layouts with ease. You'll learn how to align and distribute items in a container, a common task in web design.",
        videoId: "O_9h3PqF_6M",
        quiz: [
          {
            question: "What is the main purpose of Flexbox?",
            options: ["To create flexible and responsive layouts", "To style text", "To handle user events"],
            correctAnswer: "To create flexible and responsive layouts",
          },
        ],
      },
      {
        id: "2",
        title: "Advanced Flexbox",
        content:
          "Go beyond the basics of Flexbox and master its more advanced features. In this lesson, you'll learn about properties like `flex-grow`, `flex-shrink`, and `flex-basis` to control the sizing of flex items. We'll also cover how to reorder items with the `order` property and how to handle wrapping of items with `flex-wrap`. By the end of this lesson, you'll be able to build complex and adaptive layouts with Flexbox.",
        overview:
          "Build on your Flexbox knowledge by exploring more advanced properties and techniques for creating sophisticated and responsive layouts. You'll gain a deeper understanding of how to control the behavior of flex items.",
        videoId: "O_9h3PqF_6M",
        quiz: [
          {
            question: "What is the difference between `justify-content` and `align-items`?",
            options: [
              "`justify-content` aligns items along the main axis, while `align-items` aligns them along the cross axis",
              "`justify-content` aligns items along the cross axis, while `align-items` aligns them along the main axis",
              "There is no difference",
            ],
            correctAnswer:
              "`justify-content` aligns items along the main axis, while `align-items` aligns them along the cross axis",
          },
        ],
      },
      {
        id: "3",
        title: "Introduction to Grid",
        content:
          "CSS Grid is a two-dimensional layout system that is perfect for creating complex grid-based layouts. This lesson will introduce you to the fundamentals of CSS Grid, including the grid container, grid items, grid lines, and grid tracks. You'll learn how to define your grid structure with `grid-template-columns` and `grid-template-rows` and how to place items on the grid using line numbers and named grid areas.",
        overview:
          "Discover the power of CSS Grid and how to use it to create complex two-dimensional layouts for your web pages. This lesson will open up new possibilities for your web designs.",
        videoId: "O_9h3PqF_6M",
        quiz: [
          {
            question: "What is the main advantage of CSS Grid over Flexbox?",
            options: ["It allows for two-dimensional layouts", "It is easier to use", "It has better browser support"],
            correctAnswer: "It allows for two-dimensional layouts",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "JavaScript for Beginners",
    description: "A beginner-friendly introduction to the most popular programming language on the web.",
    longDescription:
      "This course is the perfect starting point for anyone new to programming. You'll learn the fundamentals of JavaScript, including variables, data types, functions, and control flow. We'll also explore how to use JavaScript to create interactive web pages by working with the Document Object Model (DOM). With hands-on exercises and projects, you'll gain the practical skills you need to start building your own web applications.",
    price: 39.99,
    image: "/js-beginners.jpg",
    lessons: [
      {
        id: "1",
        title: "Variables and Data Types",
        content:
          "Variables are the fundamental building blocks of any programming language, and JavaScript is no exception. In this lesson, you'll learn how to declare variables using `var`, `let`, and `const`, and understand the differences between them. We'll also explore JavaScript's primitive data types: String, Number, Boolean, Null, and Undefined. You'll get hands-on practice creating variables and working with different types of data.",
        overview:
          "This lesson covers the basics of storing and manipulating data in JavaScript, including an introduction to numbers, strings, and booleans. You'll learn the essential skill of creating and using variables.",
        videoId: "O_9h3PqF_6M",
        quiz: [
          {
            question: "What is the keyword used to declare a constant variable in JavaScript?",
            options: ["const", "let", "var"],
            correctAnswer: "const",
          },
        ],
      },
      {
        id: "2",
        title: "Functions",
        content:
          "Functions are a core concept in JavaScript that allow you to group a set of statements to perform a specific task. In this lesson, you'll learn how to define and call your own functions. We'll cover function declarations, function expressions, and arrow functions. You'll also learn about parameters and arguments, and how to use the `return` statement to get a value back from a function. Understanding functions is key to writing organized, reusable, and maintainable code.",
        overview:
          "Discover how to write reusable blocks of code with functions and learn about parameters, arguments, and return values. This is a crucial step in learning to program effectively.",
        videoId: "O_9h3PqF_6M",
        quiz: [
          {
            question: "What is the correct syntax for a function declaration in JavaScript?",
            options: ["function myFunction() {}", "myFunction function() {}", "function = myFunction() {}"],
            correctAnswer: "function myFunction() {}",
          },
        ],
      },
      {
        id: "3",
        title: "Conditional Statements",
        content:
          "Conditional statements allow your programs to make decisions and execute different blocks of code based on whether a condition is true or false. This lesson will teach you how to use `if`, `else if`, and `else` statements to control the flow of your program. We'll also cover comparison operators and logical operators, which are essential for creating complex conditions. You'll learn how to write code that can respond to different inputs and situations.",
        overview:
          "Learn how to make decisions in your code using conditional logic, allowing your programs to respond to different situations. This is how you make your programs 'smart'.",
        videoId: "O_9h3PqF_6M",
        quiz: [
          {
            question: "What is the purpose of the `else` statement?",
            options: [
              "To execute a block of code if the condition in the `if` statement is false",
              "To execute a block of code if the condition in the `if` statement is true",
              "To create a loop",
            ],
            correctAnswer: "To execute a block of code if the condition in the `if` statement is false",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "React deep dive",
    description: "Master the art of React and become a senior-level React developer.",
    longDescription:
      "This course is for experienced React developers who want to take their skills to the next level. We'll explore advanced concepts like the Context API, hooks, higher-order components, and render props. You'll also learn how to optimize the performance of your React applications and how to write clean, maintainable code. By the end of this course, you'll have the knowledge and skills to build large-scale, production-ready React applications.",
    price: 79.99,
    image: "/react-deep-dive.jpg",
    lessons: [
      {
        id: "1",
        title: "React Hooks",
        content:
          "React Hooks have revolutionized how we write React components. This lesson provides a deep dive into the most important Hooks. You'll master `useState` for managing state in functional components, `useEffect` for handling side effects like data fetching and subscriptions, and `useContext` for accessing context. We'll also explore how to create your own custom hooks to encapsulate and reuse component logic, leading to cleaner and more maintainable code.",
        overview:
          "This lesson provides a deep dive into React Hooks, including useState, useEffect, and custom hooks, and how they can simplify your component logic and make your code more reusable.",
        videoId: "O_9h3PqF_6M",
        quiz: [
          {
            question: "Which hook is used to manage state in a functional component?",
            options: ["useState", "useEffect", "useContext"],
            correctAnswer: "useState",
          },
        ],
      },
      {
        id: "2",
        title: "React Context",
        content:
          "Prop drilling, the process of passing props down through multiple layers of components, can make your code verbose and difficult to maintain. The React Context API provides a solution. In this lesson, you'll learn how to create a context, provide it at the top of your component tree, and consume it in any child component using the `useContext` hook. This is the modern way to manage global state in your React applications.",
        overview:
          "Learn how to avoid prop drilling and manage global state in your application with the React Context API. This will help you write cleaner and more scalable React code.",
        videoId: "O_9h3PqF_6M",
        quiz: [
          {
            question: "What is the purpose of the `useContext` hook?",
            options: ["To consume a context", "To create a context", "To provide a context"],
            correctAnswer: "To consume a context",
          },
        ],
      },
      {
        id: "3",
        title: "React Performance Optimization",
        content:
          "As your React applications grow, performance can become a concern. This lesson will equip you with the tools and techniques to optimize your React apps. You'll learn about memoization and how to use `React.memo` and the `useMemo` and `useCallback` hooks to prevent unnecessary re-renders. We'll also cover code splitting with `React.lazy` and Suspense to reduce your initial bundle size, and how to use the React DevTools to profile your application and identify performance bottlenecks.",
        overview:
          "Discover how to identify and fix performance bottlenecks in your React applications and learn techniques to make your apps faster and more responsive. This is essential for delivering a great user experience.",
        videoId: "O_9h3PqF_6M",
        quiz: [
          {
            question: "What is memoization?",
            options: [
              "A technique for caching the results of expensive function calls",
              "A way to split your code into smaller chunks",
              "A way to load components on demand",
            ],
            correctAnswer: "A technique for caching the results of expensive function calls",
          },
        ],
      },
    ],
  },
];
