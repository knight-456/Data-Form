export const quizList = [
  // ========== c1 ==========

  // l1
  {
    lessonId: "l1",
    questions: [
      {
        id: "q1_l1",
        type: "mcq",
        question:
          "What is the main purpose of React in modern web development?",
        options: [
          "Database management",
          "Building user interfaces with components",
          "Server-side scripting only",
          "Network security",
        ],
        correctAnswer: "Building user interfaces with components",
      },
      {
        id: "q2_l1",
        type: "short",
        question: "What is a component in React?",
        correctAnswer:
          "A reusable piece of UI that manages its own structure and logic.",
      },
      {
        id: "q3_l1",
        type: "long",
        question: "Explain the difference between React and Next.js.",
        correctAnswer:
          "React is a frontend library for building user interfaces, while Next.js is a framework built on top of React that provides routing, server rendering and performance optimizations.",
      },
      {
        id: "q4_l1",
        type: "mcq",
        question: "What type of architecture does React follow?",
        options: [
          "Component-based architecture",
          "Monolithic architecture",
          "Microservices architecture",
          "Event-driven backend architecture",
        ],
        correctAnswer: "Component-based architecture",
      },
      {
        id: "q5_l1",
        type: "short",
        question: "Name one advantage of using Next.js.",
        correctAnswer:
          "Improved performance through server-side rendering and routing.",
      },
    ],
  },

  // l2
  {
    lessonId: "l2",
    questions: [
      {
        id: "q1_l2",
        type: "mcq",
        question:
          "Which JavaScript feature is mainly used to handle asynchronous code?",
        options: ["Promises", "For loops", "Variables", "CSS"],
        correctAnswer: "Promises",
      },
      {
        id: "q2_l2",
        type: "short",
        question: "What does ES6 stand for?",
        correctAnswer: "ECMAScript 6 (ECMAScript 2015).",
      },
      {
        id: "q3_l2",
        type: "long",
        question: "Explain the use of async and await in JavaScript.",
        correctAnswer:
          "Async and await allow developers to write asynchronous code that looks like synchronous code, making it easier to read, write and debug.",
      },
      {
        id: "q4_l2",
        type: "mcq",
        question: "Which of these is an arrow function syntax?",
        options: ["function() {}", "() => {}", "func[]", "=>(){}"],
        correctAnswer: "() => {}",
      },
      {
        id: "q5_l2",
        type: "short",
        question: "What is the purpose of JavaScript modules?",
        correctAnswer:
          "To split code into reusable, maintainable and organized files.",
      },
    ],
  },

  // ========== l3 ==========
  {
    lessonId: "l3",
    questions: [
      {
        id: "q1_l3",
        type: "mcq",
        question: "What are props in React?",
        options: [
          "Built-in browser APIs",
          "Way to pass data between components",
          "Database records",
          "CSS styling rules",
        ],
        correctAnswer: "Way to pass data between components",
      },
      {
        id: "q2_l3",
        type: "short",
        question: "What does reusability mean in component based architecture?",
        correctAnswer:
          "The ability to reuse the same component in multiple parts of an application with different data.",
      },
      {
        id: "q3_l3",
        type: "long",
        question:
          "Explain the importance of breaking UI into reusable components.",
        correctAnswer:
          "Reusable components make applications easier to maintain, improve code readability, reduce duplication and allow teams to scale development efficiently.",
      },
      {
        id: "q4_l3",
        type: "mcq",
        question:
          "Which of the following is used to pass data to a child component?",
        options: ["State", "Props", "Hooks", "Context only"],
        correctAnswer: "Props",
      },
      {
        id: "q5_l3",
        type: "short",
        question: "Can props be modified inside a child component?",
        correctAnswer:
          "No, props are read-only and should not be modified inside child components.",
      },
    ],
  },

  // ========== l4 ==========
  {
    lessonId: "l4",
    questions: [
      {
        id: "q1_l4",
        type: "mcq",
        question:
          "Which hook is used to manage state in functional components?",
        options: ["useEffect", "useState", "useContext", "useRef"],
        correctAnswer: "useState",
      },
      {
        id: "q2_l4",
        type: "short",
        question: "What is the purpose of useEffect?",
        correctAnswer:
          "To handle side effects such as data fetching, subscriptions and DOM updates.",
      },
      {
        id: "q3_l4",
        type: "long",
        question: "Explain the difference between state and props in React.",
        correctAnswer:
          "State is managed inside a component and can change over time, whereas props are passed from parent components and are read-only.",
      },
      {
        id: "q4_l4",
        type: "mcq",
        question: "When does useEffect run by default?",
        options: [
          "Only on page refresh",
          "After every render",
          "Before first render only",
          "Only when clicked",
        ],
        correctAnswer: "After every render",
      },
      {
        id: "q5_l4",
        type: "short",
        question: "Can multiple useState hooks be used in one component?",
        correctAnswer:
          "Yes, you can use multiple useState hooks in a single component.",
      },
    ],
  },

  // ========== l5 ==========
  {
    lessonId: "l5",
    questions: [
      {
        id: "q1_l5",
        type: "mcq",
        question: "What is special about routing in Next.js?",
        options: [
          "It uses file based routing",
          "It requires manual router configuration",
          "It works only with APIs",
          "It does not support dynamic routes",
        ],
        correctAnswer: "It uses file based routing",
      },
      {
        id: "q2_l5",
        type: "short",
        question: "What is the App Router in Next.js?",
        correctAnswer:
          "A modern routing system that supports layouts, nested routes and server components.",
      },
      {
        id: "q3_l5",
        type: "long",
        question: "Explain how nested routes work in Next.js App Router.",
        correctAnswer:
          "Nested routes allow you to structure pages in folders, enabling shared layouts and UI structures while rendering different child content.",
      },
      {
        id: "q4_l5",
        type: "mcq",
        question: "Where are routes stored in the App Router?",
        options: [
          "pages folder",
          "app folder",
          "public folder",
          "styles folder",
        ],
        correctAnswer: "app folder",
      },
      {
        id: "q5_l5",
        type: "short",
        question: "What is the benefit of file based routing?",
        correctAnswer:
          "It simplifies route management by automatically creating routes based on the file structure.",
      },
    ],
  },

  // ========== l6 ==========
  {
    lessonId: "l6",
    questions: [
      {
        id: "q1_l6",
        type: "mcq",
        question: "What are Server Components in Next.js mainly used for?",
        options: [
          "Handling CSS styles",
          "Running code only in the browser",
          "Fetching data and rendering on the server",
          "Managing local storage",
        ],
        correctAnswer: "Fetching data and rendering on the server",
      },
      {
        id: "q2_l6",
        type: "short",
        question: "What is the purpose of caching in data fetching?",
        correctAnswer:
          "To improve performance by storing responses and reducing repeated network requests.",
      },
      {
        id: "q3_l6",
        type: "long",
        question: "Explain incremental static regeneration in Next.js.",
        correctAnswer:
          "It allows pages to be updated after build time by revalidating cached content on a defined schedule without rebuilding the entire site.",
      },
      {
        id: "q4_l6",
        type: "mcq",
        question: "Which option controls cache behavior in fetch?",
        options: ["method", "headers", "cache", "body"],
        correctAnswer: "cache",
      },
      {
        id: "q5_l6",
        type: "short",
        question: "Where does server-side code run in Next.js?",
        correctAnswer: "On the server or edge runtime environment.",
      },
    ],
  },

  // ========== l7 ==========
  {
    lessonId: "l7",
    questions: [
      {
        id: "q1_l7",
        type: "mcq",
        question: "What does JWT stand for?",
        options: [
          "JavaScript Web Token",
          "JSON Web Token",
          "Java Secure Token",
          "Joint Web Technology",
        ],
        correctAnswer: "JSON Web Token",
      },
      {
        id: "q2_l7",
        type: "short",
        question: "What is the main purpose of authentication?",
        correctAnswer: "To verify the identity of a user.",
      },
      {
        id: "q3_l7",
        type: "long",
        question:
          "Explain the difference between authentication and authorization.",
        correctAnswer:
          "Authentication verifies who the user is, while authorization determines what the user is allowed to access or perform.",
      },
      {
        id: "q4_l7",
        type: "mcq",
        question: "Which of the following is used to protect routes in an app?",
        options: ["Public API", "Middleware", "CSS Modules", "Local Images"],
        correctAnswer: "Middleware",
      },
      {
        id: "q5_l7",
        type: "short",
        question: "Why is password hashing important?",
        correctAnswer:
          "It secures user passwords by storing them in an unreadable encrypted format.",
      },
    ],
  },

  // ========== l8 ==========
  {
    lessonId: "l8",
    questions: [
      {
        id: "q1_l8",
        type: "mcq",
        question:
          "What is the main goal of optimizing application performance?",
        options: [
          "Increase file size",
          "Reduce load time and improve responsiveness",
          "Add more dependencies",
          "Disable caching",
        ],
        correctAnswer: "Reduce load time and improve responsiveness",
      },
      {
        id: "q2_l8",
        type: "short",
        question: "What is an environment variable?",
        correctAnswer:
          "A configuration value stored outside the source code used to manage sensitive or environment specific data.",
      },
      {
        id: "q3_l8",
        type: "long",
        question: "Explain why code splitting is important in modern web apps.",
        correctAnswer:
          "Code splitting reduces initial bundle size and improves performance by loading only the necessary code when required.",
      },
      {
        id: "q4_l8",
        type: "mcq",
        question: "Which platform is commonly used to deploy Next.js apps?",
        options: ["Vercel", "Photoshop", "Figma", "Excel"],
        correctAnswer: "Vercel",
      },
      {
        id: "q5_l8",
        type: "short",
        question: "What does CI/CD stand for?",
        correctAnswer: "Continuous Integration and Continuous Deployment.",
      },
    ],
  },
  // ========== l9 ==========
  {
    lessonId: "l9",
    questions: [
      {
        id: "q1_l9",
        type: "mcq",
        question: "What is the purpose of Context API in React?",
        options: [
          "To style components",
          "To manage global state without prop drilling",
          "To create animations",
          "To connect databases",
        ],
        correctAnswer: "To manage global state without prop drilling",
      },
      {
        id: "q2_l9",
        type: "short",
        question: "What problem does prop drilling create?",
        correctAnswer:
          "It requires passing data through many intermediate components that do not directly need it.",
      },
      {
        id: "q3_l9",
        type: "long",
        question:
          "Explain how the Context API helps in managing application state.",
        correctAnswer:
          "The Context API allows you to share data across the component tree without manually passing props at every level, simplifying global state management.",
      },
      {
        id: "q4_l9",
        type: "mcq",
        question: "Which function is used to consume context values?",
        options: ["useContext", "useState", "useEffect", "useMemo"],
        correctAnswer: "useContext",
      },
      {
        id: "q5_l9",
        type: "short",
        question: "Which component provides the context value?",
        correctAnswer: "Context Provider",
      },
    ],
  },

  // ========== l10 ==========
  {
    lessonId: "l10",
    questions: [
      {
        id: "q1_l10",
        type: "mcq",
        question: "Which library is commonly used for global state management?",
        options: ["Redux", "Lodash", "Axios", "Bootstrap"],
        correctAnswer: "Redux",
      },
      {
        id: "q2_l10",
        type: "short",
        question: "What is an action in Redux?",
        correctAnswer:
          "A plain JavaScript object that describes what should change in the state.",
      },
      {
        id: "q3_l10",
        type: "long",
        question: "Explain the role of reducers in Redux.",
        correctAnswer:
          "Reducers are pure functions that take the current state and an action, and return a new updated state without mutating the original state.",
      },
      {
        id: "q4_l10",
        type: "mcq",
        question: "What does the store do in Redux?",
        options: [
          "Stores files",
          "Holds the application state",
          "Hosts servers",
          "Manages CSS",
        ],
        correctAnswer: "Holds the application state",
      },
      {
        id: "q5_l10",
        type: "short",
        question: "Can Redux be used with Next.js?",
        correctAnswer: "Yes, Redux works well with Next.js applications.",
      },
    ],
  },

  // ========== l11 ==========
  {
    lessonId: "l11",
    questions: [
      {
        id: "q1_l11",
        type: "mcq",
        question: "What does API stand for?",
        options: [
          "Application Programming Interface",
          "Advanced Program Interaction",
          "Applied Performance Index",
          "Automated Program Installer",
        ],
        correctAnswer: "Application Programming Interface",
      },
      {
        id: "q2_l11",
        type: "short",
        question: "What does HTTP stand for?",
        correctAnswer: "HyperText Transfer Protocol",
      },
      {
        id: "q3_l11",
        type: "long",
        question: "Explain RESTful API principles.",
        correctAnswer:
          "RESTful APIs follow stateless communication, use standard HTTP methods and structure resources with clear, predictable endpoints.",
      },
      {
        id: "q4_l11",
        type: "mcq",
        question: "Which HTTP method is used to fetch data?",
        options: ["GET", "POST", "DELETE", "PATCH"],
        correctAnswer: "GET",
      },
      {
        id: "q5_l11",
        type: "short",
        question: "Name one tool to test APIs.",
        correctAnswer: "Postman",
      },
    ],
  },

  // ========== l12 ==========
  {
    lessonId: "l12",
    questions: [
      {
        id: "q1_l12",
        type: "mcq",
        question: "Which hook is commonly used for data fetching in React?",
        options: ["useEffect", "useReducer", "useMemo", "useRef"],
        correctAnswer: "useEffect",
      },
      {
        id: "q2_l12",
        type: "short",
        question: "Why is error handling important in API calls?",
        correctAnswer:
          "It prevents application crashes and provides better user experience during failures.",
      },
      {
        id: "q3_l12",
        type: "long",
        question: "Explain how loading states improve user experience.",
        correctAnswer:
          "Loading states provide visual feedback to users while data is being fetched, making the application feel responsive.",
      },
      {
        id: "q4_l12",
        type: "mcq",
        question: "Which library is commonly used for HTTP requests?",
        options: ["Axios", "Moment", "Tailwind", "Formik"],
        correctAnswer: "Axios",
      },
      {
        id: "q5_l12",
        type: "short",
        question: "What is a fallback UI?",
        correctAnswer:
          "A temporary UI shown when data fails to load or an error occurs.",
      },
    ],
  },

  // ========== l13 ==========
  {
    lessonId: "l13",
    questions: [
      {
        id: "q1_l13",
        type: "mcq",
        question: "Which database is a NoSQL database?",
        options: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
        correctAnswer: "MongoDB",
      },
      {
        id: "q2_l13",
        type: "short",
        question: "What does ORM stand for?",
        correctAnswer: "Object Relational Mapping",
      },
      {
        id: "q3_l13",
        type: "long",
        question: "Explain the difference between SQL and NoSQL databases.",
        correctAnswer:
          "SQL databases use structured schemas and tables, whereas NoSQL databases store data in flexible, schema-less formats such as documents or key-value pairs.",
      },
      {
        id: "q4_l13",
        type: "mcq",
        question: "Which of these is a relational database?",
        options: ["PostgreSQL", "Firebase", "Redis", "DynamoDB"],
        correctAnswer: "PostgreSQL",
      },
      {
        id: "q5_l13",
        type: "short",
        question: "What is indexing in databases?",
        correctAnswer:
          "A technique used to speed up data retrieval operations.",
      },
    ],
  },

  // ========== l14 ==========
  {
    lessonId: "l14",
    questions: [
      {
        id: "q1_l14",
        type: "mcq",
        question: "What does CRUD stand for?",
        options: [
          "Create, Read, Update, Delete",
          "Connect, Render, Upload, Deploy",
          "Cache, Replace, Use, Debug",
          "Code, Run, Update, Design",
        ],
        correctAnswer: "Create, Read, Update, Delete",
      },
      {
        id: "q2_l14",
        type: "short",
        question: "Which HTTP method is used to update data?",
        correctAnswer: "PUT or PATCH",
      },
      {
        id: "q3_l14",
        type: "long",
        question: "Explain how a typical CRUD operation flow works.",
        correctAnswer:
          "CRUD operations allow creating new records, retrieving existing data, updating existing records and deleting records through specific API endpoints.",
      },
      {
        id: "q4_l14",
        type: "mcq",
        question: "Which method is used to delete data?",
        options: ["GET", "POST", "DELETE", "OPTIONS"],
        correctAnswer: "DELETE",
      },
      {
        id: "q5_l14",
        type: "short",
        question: "What does an endpoint represent?",
        correctAnswer:
          "A specific URL that handles a particular API operation.",
      },
    ],
  },

  // ========== l15 ==========
  {
    lessonId: "l15",
    questions: [
      {
        id: "q1_l15",
        type: "mcq",
        question: "What is pagination used for?",
        options: [
          "Styling pages",
          "Handling large amounts of data efficiently",
          "Creating animations",
          "Encrypting data",
        ],
        correctAnswer: "Handling large amounts of data efficiently",
      },
      {
        id: "q2_l15",
        type: "short",
        question: "Which UI pattern is commonly used for pagination?",
        correctAnswer: "Page numbers or infinite scrolling.",
      },
      {
        id: "q3_l15",
        type: "long",
        question:
          "Explain why search and filters are important in applications.",
        correctAnswer:
          "They help users quickly find relevant information and improve usability, especially when working with large datasets.",
      },
      {
        id: "q4_l15",
        type: "mcq",
        question: "Which technique loads more data as the user scrolls?",
        options: [
          "Lazy loading",
          "Infinite scroll",
          "Hard reload",
          "Static load",
        ],
        correctAnswer: "Infinite scroll",
      },
      {
        id: "q5_l15",
        type: "short",
        question: "What does debounce help with?",
        correctAnswer:
          "It reduces the number of API calls by delaying function execution.",
      },
    ],
  },

  // ========== l16 ==========
  {
    lessonId: "l16",
    questions: [
      {
        id: "q1_l16",
        type: "mcq",
        question: "What is unit testing?",
        options: [
          "Testing a single function or component",
          "Testing only the UI",
          "Testing the production server",
          "Testing databases only",
        ],
        correctAnswer: "Testing a single function or component",
      },
      {
        id: "q2_l16",
        type: "short",
        question: "Which library is commonly used for testing React apps?",
        correctAnswer: "Jest",
      },
      {
        id: "q3_l16",
        type: "long",
        question: "Explain the importance of testing in large applications.",
        correctAnswer:
          "Testing helps catch bugs early, improves code reliability and makes future changes safer.",
      },
      {
        id: "q4_l16",
        type: "mcq",
        question: "What does TDD stand for?",
        options: [
          "Test Driven Development",
          "Technical Data Design",
          "Total Debug Deployment",
          "Test Deploy Delete",
        ],
        correctAnswer: "Test Driven Development",
      },
      {
        id: "q5_l16",
        type: "short",
        question: "What is the purpose of end-to-end testing?",
        correctAnswer:
          "To verify that the entire application flow works correctly from start to finish.",
      },
    ],
  },

  // l17
  {
    lessonId: "l17",
    questions: [
      {
        id: "q1_l17",
        type: "mcq",
        question: "What is Node.js primarily used for?",
        options: [
          "Frontend development",
          "Backend development",
          "Database design",
          "UI styling",
        ],
        correctAnswer: "Backend development",
      },
      {
        id: "q2_l17",
        type: "short",
        question: "Which language does Node.js use?",
        correctAnswer: "JavaScript",
      },
      {
        id: "q3_l17",
        type: "long",
        question: "Explain why Node.js uses an event-driven architecture.",
        correctAnswer:
          "Node.js uses event-driven architecture to handle multiple concurrent connections efficiently without blocking the main thread, making it suitable for scalable applications.",
      },
      {
        id: "q4_l17",
        type: "mcq",
        question: "What type of I/O model does Node.js use?",
        options: ["Blocking", "Non-blocking", "Synchronous", "Sequential"],
        correctAnswer: "Non-blocking",
      },
      {
        id: "q5_l17",
        type: "short",
        question: "What is the main runtime environment Node.js is built on?",
        correctAnswer: "V8 JavaScript engine",
      },
    ],
  },

  // l18
  {
    lessonId: "l18",
    questions: [
      {
        id: "q1_l18",
        type: "mcq",
        question:
          "Which framework is commonly used with Node.js for building APIs?",
        options: ["React", "Express", "Vue", "Angular"],
        correctAnswer: "Express",
      },
      {
        id: "q2_l18",
        type: "short",
        question: "What is middleware in Express?",
        correctAnswer:
          "A function that processes requests and responses in the request-response cycle.",
      },
      {
        id: "q3_l18",
        type: "long",
        question:
          "Explain the importance of project structure in Express applications.",
        correctAnswer:
          "A clean project structure separates routes, controllers, models, and middleware, making code easier to maintain, scale, and debug.",
      },
      {
        id: "q4_l18",
        type: "mcq",
        question: "Which file usually starts an Express application?",
        options: ["index.html", "app.js", "server.css", "config.json"],
        correctAnswer: "app.js",
      },
      {
        id: "q5_l18",
        type: "short",
        question: "Why are environment variables used?",
        correctAnswer:
          "To store configuration values that can change between environments, like API keys or database URLs.",
      },
    ],
  },

  // l19
  {
    lessonId: "l19",
    questions: [
      {
        id: "q1_l19",
        type: "mcq",
        question: "What does REST stand for?",
        options: [
          "Representational State Transfer",
          "Random Server Transfer",
          "Rapid Server Technology",
          "React State Transfer",
        ],
        correctAnswer: "Representational State Transfer",
      },
      {
        id: "q2_l19",
        type: "short",
        question: "Which HTTP method is used to create resources?",
        correctAnswer: "POST",
      },
      {
        id: "q3_l19",
        type: "mcq",
        question: "Which HTTP method is used to update a resource?",
        options: ["GET", "PUT/PATCH", "DELETE", "POST"],
        correctAnswer: "PUT/PATCH",
      },
      {
        id: "q4_l19",
        type: "long",
        question: "Explain the difference between PUT and PATCH.",
        correctAnswer:
          "PUT replaces the entire resource, while PATCH updates only specific fields of a resource.",
      },
      {
        id: "q5_l19",
        type: "short",
        question: "What is a controller in REST API?",
        correctAnswer:
          "A function or module that handles incoming requests and returns responses for specific routes.",
      },
    ],
  },

  // l20
  {
    lessonId: "l20",
    questions: [
      {
        id: "q1_l20",
        type: "mcq",
        question: "What is middleware primarily used for in Express?",
        options: [
          "Routing",
          "Request/Response processing",
          "Database operations",
          "UI rendering",
        ],
        correctAnswer: "Request/Response processing",
      },
      {
        id: "q2_l20",
        type: "short",
        question: "What does next() do in middleware?",
        correctAnswer:
          "It passes control to the next middleware function in the stack.",
      },
      {
        id: "q3_l20",
        type: "long",
        question:
          "Why is centralized error handling important in backend applications?",
        correctAnswer:
          "Centralized error handling ensures consistent responses, simplifies debugging, reduces duplicate code, and helps monitor application errors efficiently.",
      },
      {
        id: "q4_l20",
        type: "mcq",
        question: "Which package is commonly used for logging in Node.js?",
        options: ["Morgan", "Axios", "React", "Bootstrap"],
        correctAnswer: "Morgan",
      },
      {
        id: "q5_l20",
        type: "short",
        question: "What is an error-handling middleware signature in Express?",
        correctAnswer: "(err, req, res, next) => { ... }",
      },
    ],
  },

  // l21
  {
    lessonId: "l21",
    questions: [
      {
        id: "q1_l21",
        type: "mcq",
        question: "What does JWT stand for?",
        options: [
          "JavaScript Web Token",
          "JSON Web Token",
          "Java Web Token",
          "Java Web Transaction",
        ],
        correctAnswer: "JSON Web Token",
      },
      {
        id: "q2_l21",
        type: "short",
        question: "What is the purpose of refresh tokens?",
        correctAnswer:
          "To renew expired access tokens without requiring the user to log in again.",
      },
      {
        id: "q3_l21",
        type: "mcq",
        question: "Which header is usually used to send JWT?",
        options: ["Authorization", "Content-Type", "Accept", "Cookie"],
        correctAnswer: "Authorization",
      },
      {
        id: "q4_l21",
        type: "long",
        question:
          "Explain the difference between JWT and session-based authentication.",
        correctAnswer:
          "JWT is stateless and stores user info in the token itself, while session-based authentication stores session data on the server and tracks the user via session ID.",
      },
      {
        id: "q5_l21",
        type: "short",
        question: "What is a common use case for JWT in Node.js apps?",
        correctAnswer: "Authentication and protecting API routes.",
      },
    ],
  },

  // l22
  {
    lessonId: "l22",
    questions: [
      {
        id: "q1_l22",
        type: "mcq",
        question: "Which ORM is commonly used with Node.js?",
        options: ["Sequelize", "Redux", "Mongoose", "React Query"],
        correctAnswer: "Sequelize",
      },
      {
        id: "q2_l22",
        type: "short",
        question: "What is a model in ORM?",
        correctAnswer:
          "A representation of a database table as a class in code.",
      },
      {
        id: "q3_l22",
        type: "mcq",
        question: "Which database type is MongoDB?",
        options: ["SQL", "NoSQL", "GraphQL", "REST"],
        correctAnswer: "NoSQL",
      },
      {
        id: "q4_l22",
        type: "long",
        question: "Explain the benefits of using an ORM.",
        correctAnswer:
          "ORMs simplify database operations, enforce schema, reduce boilerplate code, and provide abstraction over SQL, improving maintainability and readability.",
      },
      {
        id: "q5_l22",
        type: "short",
        question: "What is data validation?",
        correctAnswer:
          "Ensuring that the data stored in the database meets defined rules or constraints.",
      },
    ],
  },

  // l23
  {
    lessonId: "l23",
    questions: [
      {
        id: "q1_l23",
        type: "mcq",
        question: "What is caching used for?",
        options: [
          "Improving performance",
          "Logging",
          "Routing",
          "Authentication",
        ],
        correctAnswer: "Improving performance",
      },
      {
        id: "q2_l23",
        type: "short",
        question: "Give one example of caching in Node.js.",
        correctAnswer: "Using Redis to store frequently accessed data.",
      },
      {
        id: "q3_l23",
        type: "mcq",
        question: "What is rate limiting?",
        options: [
          "Controlling API request rate",
          "Limiting memory usage",
          "Database query optimization",
          "Frontend throttling",
        ],
        correctAnswer: "Controlling API request rate",
      },
      {
        id: "q4_l23",
        type: "long",
        question: "Why is rate limiting important in APIs?",
        correctAnswer:
          "Rate limiting prevents abuse, reduces server overload, and protects applications from DDoS attacks by controlling the number of requests per client.",
      },
      {
        id: "q5_l23",
        type: "short",
        question: "Name one performance optimization technique in Node.js.",
        correctAnswer: "Caching, query optimization, or load balancing.",
      },
    ],
  },

  // l24
  {
    lessonId: "l24",
    questions: [
      {
        id: "q1_l24",
        type: "mcq",
        question: "Which tool is commonly used for API documentation?",
        options: ["Swagger", "Jest", "Mocha", "Redux"],
        correctAnswer: "Swagger",
      },
      {
        id: "q2_l24",
        type: "short",
        question: "Why write automated tests for APIs?",
        correctAnswer:
          "To ensure endpoints work correctly, avoid regressions, and improve reliability.",
      },
      {
        id: "q3_l24",
        type: "mcq",
        question: "Which environment is used for production deployment?",
        options: [
          "Localhost",
          "Cloud servers",
          "Test servers",
          "Staging servers",
        ],
        correctAnswer: "Cloud servers",
      },
      {
        id: "q4_l24",
        type: "long",
        question: "Explain the importance of CI/CD in backend deployment.",
        correctAnswer:
          "CI/CD automates testing, building, and deploying applications, ensuring consistency, reducing manual errors, and accelerating delivery to production.",
      },
      {
        id: "q5_l24",
        type: "short",
        question: "Name one testing framework for Node.js.",
        correctAnswer: "Jest or Mocha",
      },
    ],
  },

  // l25
  {
    lessonId: "l25",
    questions: [
      {
        id: "q1_l25",
        type: "mcq",
        question: "What is the primary goal of UI/UX design?",
        options: [
          "Improve aesthetics",
          "Enhance user experience",
          "Optimize backend",
          "Increase server speed",
        ],
        correctAnswer: "Enhance user experience",
      },
      {
        id: "q2_l25",
        type: "short",
        question: "What does UX stand for?",
        correctAnswer: "User Experience",
      },
      {
        id: "q3_l25",
        type: "long",
        question: "Explain the difference between UI and UX design.",
        correctAnswer:
          "UI (User Interface) focuses on the visual design and interactive elements, while UX (User Experience) focuses on the overall experience, usability, and satisfaction of the user.",
      },
      {
        id: "q4_l25",
        type: "mcq",
        question: "Which is a key principle of UI design?",
        options: [
          "Responsiveness",
          "Middleware",
          "State Management",
          "Routing",
        ],
        correctAnswer: "Responsiveness",
      },
      {
        id: "q5_l25",
        type: "short",
        question: "Why is visual hierarchy important?",
        correctAnswer:
          "It guides the user's attention and improves readability and navigation.",
      },
    ],
  },

  // l26
  {
    lessonId: "l26",
    questions: [
      {
        id: "q1_l26",
        type: "mcq",
        question: "What is user research primarily used for?",
        options: [
          "Improve server speed",
          "Gather user insights",
          "Write CSS code",
          "Deploy applications",
        ],
        correctAnswer: "Gather user insights",
      },
      {
        id: "q2_l26",
        type: "short",
        question: "Name one method to collect user feedback.",
        correctAnswer: "Interviews, surveys, usability testing, or analytics",
      },
      {
        id: "q3_l26",
        type: "long",
        question:
          "Explain why requirement analysis is crucial in UI/UX design.",
        correctAnswer:
          "Requirement analysis ensures that the design addresses real user needs, business goals, and functionality requirements, reducing costly redesigns and improving satisfaction.",
      },
      {
        id: "q4_l26",
        type: "mcq",
        question: "Which tool can be used for collecting survey data?",
        options: ["Google Forms", "VSCode", "Node.js", "Redux"],
        correctAnswer: "Google Forms",
      },
      {
        id: "q5_l26",
        type: "short",
        question: "What is the main output of user research?",
        correctAnswer: "Insights and requirements that guide design decisions.",
      },
    ],
  },

  // l27
  {
    lessonId: "l27",
    questions: [
      {
        id: "q1_l27",
        type: "mcq",
        question: "What is a wireframe?",
        options: [
          "High fidelity design",
          "Visual representation of layout",
          "Database schema",
          "API documentation",
        ],
        correctAnswer: "Visual representation of layout",
      },
      {
        id: "q2_l27",
        type: "short",
        question: "What is the purpose of low fidelity prototypes?",
        correctAnswer:
          "To test user flow and functionality without detailed visuals.",
      },
      {
        id: "q3_l27",
        type: "long",
        question: "Explain the advantages of using wireframes in design.",
        correctAnswer:
          "Wireframes help plan layout, visualize structure, communicate ideas with stakeholders, test usability early, and reduce costly design changes later.",
      },
      {
        id: "q4_l27",
        type: "mcq",
        question: "Which tool is commonly used for wireframing?",
        options: ["Figma", "Node.js", "Express", "Redux"],
        correctAnswer: "Figma",
      },
      {
        id: "q5_l27",
        type: "short",
        question: "How do wireframes improve collaboration?",
        correctAnswer:
          "They provide a clear visual reference for designers, developers, and stakeholders.",
      },
    ],
  },

  // l28
  {
    lessonId: "l28",
    questions: [
      {
        id: "q1_l28",
        type: "mcq",
        question: "What is visual hierarchy?",
        options: [
          "Server optimization",
          "Arrangement of elements by importance",
          "Middleware management",
          "Routing paths",
        ],
        correctAnswer: "Arrangement of elements by importance",
      },
      {
        id: "q2_l28",
        type: "short",
        question: "Why is typography important in UI design?",
        correctAnswer:
          "It improves readability, sets tone, and guides user attention.",
      },
      {
        id: "q3_l28",
        type: "long",
        question: "Explain how spacing and layout impact usability.",
        correctAnswer:
          "Proper spacing prevents clutter, enhances readability, improves focus on key elements, and creates a balanced and aesthetically pleasing interface.",
      },
      {
        id: "q4_l28",
        type: "mcq",
        question: "Which font characteristic affects readability?",
        options: [
          "Color only",
          "Line height, size, and style",
          "Server response time",
          "Route structure",
        ],
        correctAnswer: "Line height, size, and style",
      },
      {
        id: "q5_l28",
        type: "short",
        question: "Name one principle of visual hierarchy.",
        correctAnswer: "Contrast, size, color, alignment, or proximity",
      },
    ],
  },

  // l29
  {
    lessonId: "l29",
    questions: [
      {
        id: "q1_l29",
        type: "mcq",
        question: "Why is color theory important in UI design?",
        options: [
          "Improves database queries",
          "Influences user emotions",
          "Enhances routing",
          "Reduces API load",
        ],
        correctAnswer: "Influences user emotions",
      },
      {
        id: "q2_l29",
        type: "short",
        question: "What is a design system?",
        correctAnswer:
          "A collection of reusable components, patterns, and guidelines to maintain consistency.",
      },
      {
        id: "q3_l29",
        type: "long",
        question: "Explain how color schemes affect user perception.",
        correctAnswer:
          "Colors evoke emotions, convey brand identity, guide attention, and improve usability when chosen consistently and thoughtfully in the UI.",
      },
      {
        id: "q4_l29",
        type: "mcq",
        question: "Which color combination ensures high contrast?",
        options: [
          "Blue on white",
          "Grey on grey",
          "Red on red",
          "Green on green",
        ],
        correctAnswer: "Blue on white",
      },
      {
        id: "q5_l29",
        type: "short",
        question: "Name one advantage of using a design system.",
        correctAnswer:
          "Consistency, faster development, scalability, or maintainability.",
      },
    ],
  },

  // l30
  {
    lessonId: "l30",
    questions: [
      {
        id: "q1_l30",
        type: "mcq",
        question: "What is responsive design?",
        options: [
          "Optimizing backend APIs",
          "Creating layouts that adapt to screen sizes",
          "Writing CSS only",
          "Database normalization",
        ],
        correctAnswer: "Creating layouts that adapt to screen sizes",
      },
      {
        id: "q2_l30",
        type: "short",
        question: "Why is accessibility important?",
        correctAnswer:
          "To ensure applications are usable by all users, including those with disabilities.",
      },
      {
        id: "q3_l30",
        type: "long",
        question:
          "Explain how responsive and accessible design improves user experience.",
        correctAnswer:
          "Responsive design adapts layouts to various devices, while accessibility ensures inclusivity; together they provide seamless and usable experiences for a wider audience.",
      },
      {
        id: "q4_l30",
        type: "mcq",
        question: "Which HTML attribute improves accessibility for images?",
        options: ["alt", "id", "class", "src"],
        correctAnswer: "alt",
      },
      {
        id: "q5_l30",
        type: "short",
        question: "Name one tool to check accessibility.",
        correctAnswer: "Lighthouse, Axe, or WAVE",
      },
    ],
  },

  // l31
  {
    lessonId: "l31",
    questions: [
      {
        id: "q1_l31",
        type: "mcq",
        question: "What is usability testing?",
        options: [
          "Backend debugging",
          "Evaluating a product with real users",
          "Writing CSS",
          "Database testing",
        ],
        correctAnswer: "Evaluating a product with real users",
      },
      {
        id: "q2_l31",
        type: "short",
        question: "Why conduct iterative improvements?",
        correctAnswer:
          "To refine designs based on feedback and improve usability continuously.",
      },
      {
        id: "q3_l31",
        type: "long",
        question: "Explain the steps of a usability testing cycle.",
        correctAnswer:
          "Plan testing goals, recruit participants, conduct tests, analyze results, implement improvements, and repeat the cycle for better UX.",
      },
      {
        id: "q4_l31",
        type: "mcq",
        question: "Which method can gather qualitative user feedback?",
        options: ["Surveys", "Interviews", "Analytics", "APIs"],
        correctAnswer: "Interviews",
      },
      {
        id: "q5_l31",
        type: "short",
        question: "Name one key metric to measure usability.",
        correctAnswer: "Task success rate, time on task, or user satisfaction",
      },
    ],
  },

  // l32
  {
    lessonId: "l32",
    questions: [
      {
        id: "q1_l32",
        type: "mcq",
        question: "What is a design handoff?",
        options: [
          "Code deployment",
          "Sharing design specifications with developers",
          "API testing",
          "Backend routing",
        ],
        correctAnswer: "Sharing design specifications with developers",
      },
      {
        id: "q2_l32",
        type: "short",
        question: "Why is developer collaboration important?",
        correctAnswer:
          "To ensure designs are implemented accurately and efficiently in production.",
      },
      {
        id: "q3_l32",
        type: "long",
        question:
          "Explain how proper design handoff reduces development issues.",
        correctAnswer:
          "By providing clear specifications, assets, and documentation, developers can implement UI/UX correctly, reducing misinterpretation, rework, and delays.",
      },
      {
        id: "q4_l32",
        type: "mcq",
        question: "Which tool can assist in design handoff?",
        options: ["Zeplin", "Express", "Node.js", "Redux"],
        correctAnswer: "Zeplin",
      },
      {
        id: "q5_l32",
        type: "short",
        question: "What should a design handoff include?",
        correctAnswer:
          "Assets, design specifications, typography, colors, and interaction details.",
      },
    ],
  },

  // l33
  {
    lessonId: "l33",
    questions: [
      {
        id: "q1_l33",
        type: "mcq",
        question:
          "What is the main advantage of using Node.js for backend development?",
        options: [
          "Single-threaded, event-driven architecture",
          "High memory usage",
          "CSS rendering",
          "Database normalization",
        ],
        correctAnswer: "Single-threaded, event-driven architecture",
      },
      {
        id: "q2_l33",
        type: "short",
        question: "What is the event loop in Node.js?",
        correctAnswer:
          "A mechanism that handles asynchronous callbacks and non-blocking operations.",
      },
      {
        id: "q3_l33",
        type: "long",
        question: "Explain why Node.js is suitable for real-time applications.",
        correctAnswer:
          "Node.js uses non-blocking I/O and an event-driven architecture, which allows handling multiple connections concurrently, making it ideal for real-time applications like chat apps or online games.",
      },
      {
        id: "q4_l33",
        type: "mcq",
        question: "Which command initializes a Node.js project?",
        options: ["npm init", "node start", "express create", "tsc init"],
        correctAnswer: "npm init",
      },
      {
        id: "q5_l33",
        type: "short",
        question: "Name one use case for Node.js.",
        correctAnswer:
          "APIs, real-time apps, streaming services, microservices, or serverless functions.",
      },
    ],
  },

  // l34
  {
    lessonId: "l34",
    questions: [
      {
        id: "q1_l34",
        type: "mcq",
        question: "What is Express.js primarily used for?",
        options: [
          "Server-side framework for Node.js",
          "Frontend styling",
          "Database indexing",
          "Middleware for CSS",
        ],
        correctAnswer: "Server-side framework for Node.js",
      },
      {
        id: "q2_l34",
        type: "short",
        question: "What is a route in Express?",
        correctAnswer:
          "A URL pattern that defines how an application responds to client requests.",
      },
      {
        id: "q3_l34",
        type: "long",
        question:
          "Explain the importance of project structure in Express applications.",
        correctAnswer:
          "A proper structure organizes routes, controllers, models, and middleware logically, making code maintainable, scalable, and easier for teams to collaborate.",
      },
      {
        id: "q4_l34",
        type: "mcq",
        question: "Which method defines a GET route in Express?",
        options: ["app.get()", "app.post()", "app.put()", "app.delete()"],
        correctAnswer: "app.get()",
      },
      {
        id: "q5_l34",
        type: "short",
        question: "How do you handle environment variables in Express?",
        correctAnswer: "Using process.env and packages like dotenv.",
      },
    ],
  },

  // l35
  {
    lessonId: "l35",
    questions: [
      {
        id: "q1_l35",
        type: "mcq",
        question: "What is middleware in Express?",
        options: [
          "A function that handles requests/responses",
          "A database",
          "Frontend component",
          "CSS framework",
        ],
        correctAnswer: "A function that handles requests/responses",
      },
      {
        id: "q2_l35",
        type: "short",
        question: "Name one type of middleware in Express.",
        correctAnswer:
          "Application-level, router-level, error-handling, or third-party middleware",
      },
      {
        id: "q3_l35",
        type: "long",
        question: "Explain the request-response lifecycle in Express.",
        correctAnswer:
          "Requests pass through middleware in order, which can modify request/response objects, handle authentication, logging, or errors, and eventually send a response back to the client.",
      },
      {
        id: "q4_l35",
        type: "mcq",
        question: "Which function signature is correct for middleware?",
        options: [
          "(req, res, next) => {}",
          "(state, action) => {}",
          "(data, error) => {}",
          "(event, callback) => {}",
        ],
        correctAnswer: "(req, res, next) => {}",
      },
      {
        id: "q5_l35",
        type: "short",
        question: "Why is middleware useful?",
        correctAnswer:
          "It allows code reuse, modularity, and centralized handling of requests and errors.",
      },
    ],
  },

  // l36
  {
    lessonId: "l36",
    questions: [
      {
        id: "q1_l36",
        type: "mcq",
        question: "What is JWT used for in Express apps?",
        options: [
          "Authentication and authorization",
          "CSS styling",
          "Database schema",
          "Frontend routing",
        ],
        correctAnswer: "Authentication and authorization",
      },
      {
        id: "q2_l36",
        type: "short",
        question: "What does role-based access control mean?",
        correctAnswer:
          "Users have permissions according to their roles, restricting access to certain resources.",
      },
      {
        id: "q3_l36",
        type: "long",
        question:
          "Explain the difference between authentication and authorization.",
        correctAnswer:
          "Authentication verifies the identity of a user, while authorization determines what resources or actions the authenticated user is allowed to access.",
      },
      {
        id: "q4_l36",
        type: "mcq",
        question: "Which HTTP status code indicates unauthorized access?",
        options: ["401", "200", "500", "302"],
        correctAnswer: "401",
      },
      {
        id: "q5_l36",
        type: "short",
        question: "Name one method to secure passwords.",
        correctAnswer: "Hashing using bcrypt or Argon2.",
      },
    ],
  },

  // l37
  {
    lessonId: "l37",
    questions: [
      {
        id: "q1_l37",
        type: "mcq",
        question: "Which database is commonly used with Node.js apps?",
        options: ["MongoDB", "CSS", "HTML", "Redux"],
        correctAnswer: "MongoDB",
      },
      {
        id: "q2_l37",
        type: "short",
        question: "What is an ORM?",
        correctAnswer:
          "Object-Relational Mapping, used to interact with databases using objects instead of SQL queries.",
      },
      {
        id: "q3_l37",
        type: "long",
        question: "Explain benefits of using ORM in backend development.",
        correctAnswer:
          "ORMs reduce boilerplate code, prevent SQL injection, manage relationships and migrations, and simplify database interaction for developers.",
      },
      {
        id: "q4_l37",
        type: "mcq",
        question: "Which ORM is commonly used with Node.js?",
        options: ["Sequelize", "React", "Redux", "Figma"],
        correctAnswer: "Sequelize",
      },
      {
        id: "q5_l37",
        type: "short",
        question: "Name one type of database relationship.",
        correctAnswer: "One-to-one, one-to-many, or many-to-many",
      },
    ],
  },

  // l38
  {
    lessonId: "l38",
    questions: [
      {
        id: "q1_l38",
        type: "mcq",
        question: "Which module handles file uploads in Node.js?",
        options: ["Multer", "Express", "React", "Redux"],
        correctAnswer: "Multer",
      },
      {
        id: "q2_l38",
        type: "short",
        question: "Why use cloud storage for media files?",
        correctAnswer:
          "To offload server storage, ensure scalability, and serve files efficiently.",
      },
      {
        id: "q3_l38",
        type: "long",
        question:
          "Explain the process of handling image uploads securely in Node.js.",
        correctAnswer:
          "Validate file type, limit file size, store securely on server or cloud, sanitize filenames, and manage access permissions to prevent unauthorized access.",
      },
      {
        id: "q4_l38",
        type: "mcq",
        question: "Which HTTP method is commonly used for file uploads?",
        options: ["POST", "GET", "DELETE", "PUT"],
        correctAnswer: "POST",
      },
      {
        id: "q5_l38",
        type: "short",
        question: "Name one service for cloud file storage.",
        correctAnswer: "AWS S3, Google Cloud Storage, or Azure Blob Storage",
      },
    ],
  },

  // l39
  {
    lessonId: "l39",
    questions: [
      {
        id: "q1_l39",
        type: "mcq",
        question: "What is caching used for in backend development?",
        options: [
          "Improve response time",
          "Style UI",
          "Routing paths",
          "Database schema",
        ],
        correctAnswer: "Improve response time",
      },
      {
        id: "q2_l39",
        type: "short",
        question: "Name one method of caching in Node.js.",
        correctAnswer: "In-memory caching, Redis, or CDN caching",
      },
      {
        id: "q3_l39",
        type: "long",
        question:
          "Explain why performance optimization is important for backend APIs.",
        correctAnswer:
          "It reduces latency, improves user experience, ensures scalability, decreases server load, and supports high traffic applications.",
      },
      {
        id: "q4_l39",
        type: "mcq",
        question: "What is rate limiting used for?",
        options: [
          "Prevent abuse of APIs",
          "Improve frontend styling",
          "Database migration",
          "File uploads",
        ],
        correctAnswer: "Prevent abuse of APIs",
      },
      {
        id: "q5_l39",
        type: "short",
        question: "Name one security best practice for Node.js apps.",
        correctAnswer:
          "Input validation, HTTPS, helmet, CORS, or environment variable management",
      },
    ],
  },

  // l40
  {
    lessonId: "l40",
    questions: [
      {
        id: "q1_l40",
        type: "mcq",
        question: "Which tool can deploy Node.js applications?",
        options: ["Heroku", "Figma", "React", "Redux"],
        correctAnswer: "Heroku",
      },
      {
        id: "q2_l40",
        type: "short",
        question: "Why is monitoring important in production?",
        correctAnswer:
          "To detect errors, track performance, and ensure uptime of applications.",
      },
      {
        id: "q3_l40",
        type: "long",
        question: "Explain how scaling works for backend applications.",
        correctAnswer:
          "Scaling involves adding resources like CPU/memory (vertical) or multiple instances (horizontal) to handle more traffic and ensure reliable performance.",
      },
      {
        id: "q4_l40",
        type: "mcq",
        question: "Which process manager is commonly used with Node.js?",
        options: ["PM2", "Webpack", "Redux", "Express"],
        correctAnswer: "PM2",
      },
      {
        id: "q5_l40",
        type: "short",
        question: "Name one way to scale Node.js apps horizontally.",
        correctAnswer: "Load balancing across multiple instances or servers",
      },
    ],
  },

  // l41
  {
    lessonId: "l41",
    questions: [
      {
        id: "q1_l41",
        type: "mcq",
        question: "What is the main advantage of using TypeScript?",
        options: [
          "Static typing and better tooling",
          "Faster CSS rendering",
          "Automatic HTML generation",
          "Backend routing",
        ],
        correctAnswer: "Static typing and better tooling",
      },
      {
        id: "q2_l41",
        type: "short",
        question: "How do you add TypeScript to a project?",
        correctAnswer:
          "Install TypeScript using npm and create a tsconfig.json file.",
      },
      {
        id: "q3_l41",
        type: "long",
        question:
          "Explain how TypeScript improves code quality in large projects.",
        correctAnswer:
          "TypeScript enforces static typing, provides compile-time error checking, improves code readability, helps with refactoring, and enables better IDE support, which prevents runtime errors and improves maintainability.",
      },
      {
        id: "q4_l41",
        type: "mcq",
        question: "Which file extension is used for TypeScript files?",
        options: [".ts", ".js", ".jsx", ".json"],
        correctAnswer: ".ts",
      },
      {
        id: "q5_l41",
        type: "short",
        question: "Can TypeScript be used with React?",
        correctAnswer:
          "Yes, TypeScript works with React using .tsx files for components.",
      },
    ],
  },

  // l42
  {
    lessonId: "l42",
    questions: [
      {
        id: "q1_l42",
        type: "mcq",
        question: "What is an interface in TypeScript?",
        options: [
          "A way to define custom types",
          "A CSS framework",
          "A function hook",
          "A database schema",
        ],
        correctAnswer: "A way to define custom types",
      },
      {
        id: "q2_l42",
        type: "short",
        question: "What is a type alias?",
        correctAnswer:
          "A custom name assigned to a type or union of types for reuse.",
      },
      {
        id: "q3_l42",
        type: "long",
        question: "Explain the difference between interfaces and type aliases.",
        correctAnswer:
          "Interfaces are used to define the shape of objects and can be extended or implemented. Type aliases can represent primitives, unions, intersections, and object shapes. Interfaces are more flexible for extending, while type aliases are more versatile.",
      },
      {
        id: "q4_l42",
        type: "mcq",
        question: "Which keyword is used to create an interface?",
        options: ["interface", "type", "class", "extends"],
        correctAnswer: "interface",
      },
      {
        id: "q5_l42",
        type: "short",
        question: "Can interfaces be extended in TypeScript?",
        correctAnswer:
          "Yes, interfaces can extend other interfaces to create hierarchical structures.",
      },
    ],
  },

  // l43
  {
    lessonId: "l43",
    questions: [
      {
        id: "q1_l43",
        type: "mcq",
        question: "What are generics in TypeScript used for?",
        options: [
          "Reusable and type-safe code",
          "Styling UI",
          "Database migrations",
          "Frontend routing",
        ],
        correctAnswer: "Reusable and type-safe code",
      },
      {
        id: "q2_l43",
        type: "short",
        question: "Give an example of a generic function.",
        correctAnswer: "function identity<T>(arg: T): T { return arg; }",
      },
      {
        id: "q3_l43",
        type: "long",
        question: "Explain how generics improve code flexibility.",
        correctAnswer:
          "Generics allow functions, classes, and interfaces to work with multiple types while maintaining type safety. This reduces code duplication and allows reusable components without losing type-checking benefits.",
      },
      {
        id: "q4_l43",
        type: "mcq",
        question: "Which syntax is used to define a generic type?",
        options: ["<T>", "{}", "()", "[]"],
        correctAnswer: "<T>",
      },
      {
        id: "q5_l43",
        type: "short",
        question: "Can generics have constraints?",
        correctAnswer: "Yes, using extends keyword to restrict the type.",
      },
    ],
  },

  // l44
  {
    lessonId: "l44",
    questions: [
      {
        id: "q1_l44",
        type: "mcq",
        question: "Which access modifier makes a class member private?",
        options: ["private", "public", "protected", "static"],
        correctAnswer: "private",
      },
      {
        id: "q2_l44",
        type: "short",
        question: "What is an abstract class?",
        correctAnswer:
          "A class that cannot be instantiated directly and may contain abstract methods to be implemented by subclasses.",
      },
      {
        id: "q3_l44",
        type: "long",
        question:
          "Explain the difference between public, private, and protected members.",
        correctAnswer:
          "Public members are accessible anywhere, private members are accessible only within the class, and protected members are accessible within the class and its subclasses.",
      },
      {
        id: "q4_l44",
        type: "mcq",
        question: "Can TypeScript classes implement interfaces?",
        options: ["Yes", "No", "Only in React", "Only in Node.js"],
        correctAnswer: "Yes",
      },
      {
        id: "q5_l44",
        type: "short",
        question: "Why are access modifiers important in TypeScript?",
        correctAnswer:
          "They encapsulate data and control visibility, improving code safety and maintainability.",
      },
    ],
  },

  // l45
  {
    lessonId: "l45",
    questions: [
      {
        id: "q1_l45",
        type: "mcq",
        question: "What are decorators in TypeScript?",
        options: [
          "Functions that modify classes or class members",
          "UI components",
          "Database queries",
          "API endpoints",
        ],
        correctAnswer: "Functions that modify classes or class members",
      },
      {
        id: "q2_l45",
        type: "short",
        question: "Which experimental option must be enabled for decorators?",
        correctAnswer: "experimentalDecorators in tsconfig.json",
      },
      {
        id: "q3_l45",
        type: "long",
        question:
          "Explain how decorators are used in frameworks like Angular or NestJS.",
        correctAnswer:
          "Decorators are used to annotate classes, methods, or properties, enabling dependency injection, metadata definition, routing, and configuration in frameworks like Angular and NestJS.",
      },
      {
        id: "q4_l45",
        type: "mcq",
        question: "Can decorators be applied to methods?",
        options: ["Yes", "No", "Only classes", "Only properties"],
        correctAnswer: "Yes",
      },
      {
        id: "q5_l45",
        type: "short",
        question: "Name one type of decorator in TypeScript.",
        correctAnswer: "Class, method, property, or parameter decorator",
      },
    ],
  },

  // l46
  {
    lessonId: "l46",
    questions: [
      {
        id: "q1_l46",
        type: "mcq",
        question: "Why use TypeScript with React?",
        options: [
          "To enable type-safe components",
          "To style components",
          "To query databases",
          "To manage API routes",
        ],
        correctAnswer: "To enable type-safe components",
      },
      {
        id: "q2_l46",
        type: "short",
        question:
          "What file extension is used for React components in TypeScript?",
        correctAnswer: ".tsx",
      },
      {
        id: "q3_l46",
        type: "long",
        question:
          "Explain the benefits of using TypeScript in frontend frameworks.",
        correctAnswer:
          "It provides type safety, better auto-completion, compile-time error detection, easier refactoring, and consistent coding patterns, improving reliability and maintainability of frontend applications.",
      },
      {
        id: "q4_l46",
        type: "mcq",
        question: "Can TypeScript types be used in props and state?",
        options: ["Yes", "No", "Only in Node.js", "Only with classes"],
        correctAnswer: "Yes",
      },
      {
        id: "q5_l46",
        type: "short",
        question: "Name one TypeScript feature helpful for React projects.",
        correctAnswer: "Interfaces, generics, enums, or union types",
      },
    ],
  },

  // l47
  {
    lessonId: "l47",
    questions: [
      {
        id: "q1_l47",
        type: "mcq",
        question: "What is tsconfig.json used for?",
        options: [
          "TypeScript compiler configuration",
          "CSS styling",
          "React routing",
          "Database migrations",
        ],
        correctAnswer: "TypeScript compiler configuration",
      },
      {
        id: "q2_l47",
        type: "short",
        question: "Name one important tsconfig option.",
        correctAnswer:
          "target, module, strict, esModuleInterop, or experimentalDecorators",
      },
      {
        id: "q3_l47",
        type: "long",
        question:
          "Explain the process of TypeScript compilation and tooling workflow.",
        correctAnswer:
          "TypeScript compiler (tsc) checks types, transpiles TS code to JS, uses source maps for debugging, integrates with bundlers and IDEs, and ensures type-safe builds for deployment.",
      },
      {
        id: "q4_l47",
        type: "mcq",
        question: "Which command compiles TypeScript files?",
        options: ["tsc", "npm start", "node index.js", "tsrun"],
        correctAnswer: "tsc",
      },
      {
        id: "q5_l47",
        type: "short",
        question: "Can TypeScript integrate with Webpack or Vite?",
        correctAnswer:
          "Yes, TypeScript integrates with modern bundlers for building projects.",
      },
    ],
  },

  // l48
  {
    lessonId: "l48",
    questions: [
      {
        id: "q1_l48",
        type: "mcq",
        question: "Why is testing important in TypeScript projects?",
        options: [
          "Ensures type safety and correct functionality",
          "Improves UI styling",
          "Generates database schemas",
          "Routes APIs automatically",
        ],
        correctAnswer: "Ensures type safety and correct functionality",
      },
      {
        id: "q2_l48",
        type: "short",
        question: "Name one testing library for TypeScript.",
        correctAnswer: "Jest, Mocha, or Vitest",
      },
      {
        id: "q3_l48",
        type: "long",
        question: "Explain how refactoring is safer with TypeScript.",
        correctAnswer:
          "TypeScript detects type mismatches and errors at compile-time, reducing runtime bugs, making it easier to refactor code confidently in large codebases.",
      },
      {
        id: "q4_l48",
        type: "mcq",
        question:
          "Which TypeScript feature helps in maintaining scalable architecture?",
        options: [
          "Interfaces and generics",
          "CSS modules",
          "React Hooks",
          "Node middleware",
        ],
        correctAnswer: "Interfaces and generics",
      },
      {
        id: "q5_l48",
        type: "short",
        question: "Why are scalable architecture patterns important?",
        correctAnswer:
          "They ensure maintainable, reusable, and extendable code in large projects.",
      },
    ],
  },
  
];
