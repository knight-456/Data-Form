export const RESUME_URL = "/resume/JASHWANT_RANA_2026-07-07.pdf";
export const RESUME_FILE_NAME = "JASHWANT_RANA_2026-07-07.pdf";

export const profile = {
  name: "Jashwant Rana",
  title: "Senior Software Engineer",
  email: "ranajashwant24@gmail.com",
  phone: "7455916166",
  location: "Dehradun, India",
  address: "36/1, Shastri Nagar, Seemadwar, Dehradun",
  linkedin: "https://linkedin.com/in/ranajashwant",
  summary:
    "I build the operational software teams open every morning: attendance apps, CRM/HRMS platforms, field dashboards, commerce flows and mobile products shipped to the Play Store.",
};

export const navItems = [
  { label: "Apps", id: "apps" },
  { label: "Experience", id: "experience" },
  { label: "Systems", id: "systems" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
] as const;

export const highlights = [
  { value: "4+", label: "years building production products" },
  { value: "3", label: "Android apps built from scratch" },
  { value: "B2B + B2C", label: "SaaS, HRMS, commerce and field ops" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3 / Sass"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Android delivery", "Biometrics", "Geolocation", "Google Maps API"],
  },
  {
    title: "State and data",
    items: ["Redux Toolkit", "TanStack Query", "React Query", "WebSockets", "REST APIs"],
  },
  {
    title: "Quality and delivery",
    items: ["Firebase", "GitHub Actions", "CI/CD", "Jest", "Code reviews", "Git workflows"],
  },
];

export const experience = [
  {
    company: "Winshitech IT Solutions Pvt Ltd",
    location: "Janakpuri, New Delhi",
    role: "Senior Software Engineer",
    period: "Jan 2025 - Jun 2026",
    points: [
      "Architected a dual-app React Native workforce ecosystem with liveness facial checks and battery-aware geolocation.",
      "Built a multi-tenant CRM/HRMS SaaS platform with WhatsApp and Facebook API integrations for centralized business communication.",
      "Reduced mobile latency by cleaning up Redux state flow and moving live operational views to WebSocket-powered dashboards.",
      "Led developers through SDLC, CI/CD pipelines, Jest testing and code reviews while keeping delivery velocity stable.",
      "Developed a Dental Practice Management System from patient inquiry to clinical treatment and lab manufacturing workflows.",
    ],
  },
  {
    company: "Edulyte Marketplace Pvt Ltd",
    location: "Greater Noida",
    role: "Software Developer",
    period: "Aug 2022 - Jan 2025",
    points: [
      "Engineered a high-performance B2C e-commerce platform with Next.js, Core Web Vitals and SEO as first-class concerns.",
      "Developed enterprise analytics portals with role-based access control and real-time business intelligence views.",
      "Built a React Native Android application with REST API synchronization and mobile-first user flows.",
      "Worked closely with backend teams to integrate complex frontend architecture with scalable microservices.",
      "Improved maintainability through code reviews, reusable UI patterns and stronger implementation standards.",
    ],
  },
  {
    company: "Early Career",
    location: "India",
    role: "Graduate Developer",
    period: "Jan 2022 - Aug 2022",
    points: [
      "Built modular UI components using JavaScript, HTML5 and CSS3 with brand-aligned implementation.",
      "Resolved launch-stage bugs and contributed to documentation and version-control workflows.",
    ],
  },
];

export const mobileApps = [
  {
    name: "LeadsForce360 - Your Smart Ops",
    packageName: "com.leadsforce360.ops",
    description:
      "Operations platform for lead management, WhatsApp communication, attendance, visits, tasks and team dashboards.",
    link: "https://play.google.com/store/apps/details?id=com.leadsforce360.ops",
    tags: ["React Native", "Field ops", "Dashboards", "WhatsApp APIs"],
    videoUrl: "/videos/leadsforce360-demo.mp4", // Replace with real video
  },
  {
    name: "LeadsForce Attendance",
    packageName: "com.leadsforce.attendance",
    description:
      "Workforce attendance app with location-aware punch flows, employee tracking and daily operational visibility.",
    link: "https://play.google.com/store/apps/details?id=com.leadsforce.attendance",
    tags: ["React Native", "Geolocation", "Biometrics", "Workforce"],
    videoUrl: "/videos/leadsforce-attendance-demo.mp4", // Replace with real video
  },
  {
    name: "Winish Trends",
    packageName: "com.winishtrends",
    description:
      "Mobile commerce experience built from scratch with clean product flows, Android delivery and API integration.",
    link: "https://play.google.com/store/apps/details?id=com.winishtrends",
    tags: ["React Native", "E-commerce", "REST APIs", "Android"],
    videoUrl: "/videos/winishtrends-demo.mp4", // Replace with real video
  },
];

export const systems = [
  {
    name: "Multi-tenant CRM / HRMS SaaS",
    detail:
      "Tenant-safe enterprise communication and workforce operations with WhatsApp/Facebook workflows, dashboards and role-driven access.",
    meta: "SaaS architecture",
  },
  {
    name: "Dental Practice Management System",
    detail:
      "Healthcare workflow automation from patient inquiry to treatment tracking and lab manufacturing coordination.",
    meta: "Healthcare ops",
  },
  {
    name: "B2C E-commerce Platform",
    detail:
      "Next.js storefront tuned for SEO, Core Web Vitals and fast consumer purchase journeys.",
    meta: "Commerce",
  },
];

export const education = {
  school: "THDC Institute of Hydropower Engineering and Technology",
  degree: "Bachelor of Technology",
  period: "2017 - 2021",
  location: "New Tehri",
};

export const revealClass = "reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out data-[animate=true]:opacity-100 data-[animate=true]:translate-y-0";
export const panelClass = "bg-background/70 border border-border/40 rounded-[20px] p-4 backdrop-blur-xl shadow-sm transition-all duration-300 hover:border-border";
