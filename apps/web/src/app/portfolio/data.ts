export const RESUME_URL = "/resume/JASHWANT_RANA_2026-07-07.pdf";
export const RESUME_FILE_NAME = "JASHWANT_RANA_RESUME.pdf";

export const profile = {
  name: "Jashwant Rana",
  title: "Senior Software Engineer",
  email: "ranajashwant24@gmail.com",
  phone: "7455916166",
  location: "Dehradun, India",
  address: "36/1, Shastri Nagar, Seemadwar, Dehradun",
  linkedin: "https://linkedin.com/in/ranajashwant",
  medium: "https://medium.com/@rana.jashwant07",
  summary:
    "I build the operational software teams open every morning: attendance apps, CRM/HRMS platforms, field dashboards, commerce flows and mobile products shipped to the Play Store.",
};

export const navItems = [
  { label: "Apps", id: "apps" },
  { label: "Experience", id: "experience" },
  { label: "Systems", id: "systems" },
  { label: "Skills", id: "skills" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Blogs", id: "blogs" },
  { label: "Contact", id: "contact" },
] as const;

export const highlights = [
  { value: "4+", label: "years building production products" },
  { value: "5+", label: "Android/iOS apps built from scratch" },
  { value: "B2B + B2C", label: "SaaS, HRMS, commerce & field ops" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js 15", "HTML5", "CSS3 / Sass", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Android Delivery", "Biometrics", "Geolocation & Maps", "Offline-first Sync"],
  },
  {
    title: "State and Data",
    items: ["Redux Toolkit", "TanStack Query", "React Query", "WebSockets", "REST APIs", "SQLite / Watermelon"],
  },
  {
    title: "Quality and Infrastructure",
    items: ["Firebase", "GitHub Actions", "CI/CD Pipelines", "Jest", "Code Reviews", "Monorepo (Turborepo)"],
  },
];

export const experience = [
  {
    id: 3,
    company: "Winshitech IT Solutions Pvt Ltd",
    location: "Janakpuri, New Delhi",
    role: "Senior Software Engineer",
    period: "Jan 2025 - Jun 2026",
    points: [
      "Architected a dual-app React Native workforce ecosystem (LeadsForce360 & Attendance) with liveness facial checks and battery-aware geolocation.",
      "Built a multi-tenant CRM/HRMS SaaS platform with WhatsApp and Facebook API integrations for centralized business communication.",
      "Reduced mobile latency by cleaning up Redux state flow and moving live operational views to WebSocket-powered dashboards.",
      "Led developers through SDLC, CI/CD pipelines, Jest testing and code reviews while keeping delivery velocity stable.",
      "Developed SmileSecure Dental Practice Management System from patient inquiry to clinical treatment and lab manufacturing workflows.",
    ],
  },
  {
    id: 2,
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
    id: 1,
    company: "Edulyte Marketplace Pvt Ltd",
    location: "Greater Noida",
    role: "Graduate Developer",
    period: "Jan 2022 - Aug 2022",
    points: [
      "Built modular UI components using JavaScript, HTML5 and CSS3 with brand-aligned implementation.",
      "Resolved launch-stage bugs and contributed to documentation and version-control workflows.",
    ],
  },
];

export type TMobileApp = {
  name: string;
  packageName: string;
  category: string;
  description: string;
  link: string;
  tags: string[];
  videoUrl?: string;
  stats: { label: string; value: string }[];
  screens: {
    id: string;
    title: string;
    description: string;
    simulatedState: Record<string, string | number | boolean>;
  }[];
  architecture: string[];
};

export const mobileApps: TMobileApp[] = [
  {
    name: "LeadsForce360 - Your Smart Ops",
    packageName: "com.leadsforce360.ops",
    category: "Field Operations & CRM",
    description:
      "Full operational platform for field sales & support teams. Features lead management, automated WhatsApp communication, task tracking, visit logs, and real-time team dashboards.",
    link: "https://play.google.com/store/apps/details?id=com.leadsforce360.ops",
    tags: ["React Native", "Field Ops", "Dashboards", "WhatsApp APIs", "WebSockets"],
    videoUrl: "/videos/leadsforce360-demo.mp4",
    stats: [
      { label: "Daily Active Users", value: "5,000+" },
      { label: "Sync Latency", value: "< 150ms" },
      { label: "Crash-free Rate", value: "99.8%" },
    ],
    screens: [
      {
        id: "leads",
        title: "Live Lead Pipeline",
        description: "Real-time lead status tracking with quick WhatsApp chat trigger and status updates.",
        simulatedState: { leadCount: 42, status: "Active Intake", unassigned: 3 },
      },
      {
        id: "visits",
        title: "Field Visit Check-in",
        description: "GPS-verified visit logging with client sign-off and photo upload capability.",
        simulatedState: { locationVerified: true, distKm: 0.05, status: "On Site" },
      },
      {
        id: "dashboard",
        title: "Manager Operations Board",
        description: "Live WebSocket feed showing active field agents, closed leads, and pending tasks.",
        simulatedState: { onlineAgents: 18, shiftCoverage: "94%", activeAlerts: 0 },
      },
    ],
    architecture: [
      "React Native CLI with Native Modules for Android background tracking",
      "Redux Toolkit + RTK Query for state management & optimistic updates",
      "WebSocket manager with exponential backoff & offline transaction queue",
    ],
  },
  {
    name: "LeadsForce Attendance",
    packageName: "com.leadsforce.attendance",
    category: "Workforce Biometrics & GPS",
    description:
      "Workforce attendance app featuring location-aware punch flows, employee tracking, liveness facial verification, and daily operational visibility.",
    link: "https://play.google.com/store/apps/details?id=com.leadsforce.attendance",
    tags: ["React Native", "Geolocation", "Biometrics", "Workforce", "Offline First"],
    videoUrl: "/videos/leadsforce-attendance-demo.mp4",
    stats: [
      { label: "Punches Logged", value: "100k+" },
      { label: "Location Accuracy", value: "±5 meters" },
      { label: "Battery Saver", value: "3x lower drain" },
    ],
    screens: [
      {
        id: "punch",
        title: "Biometric Punch In/Out",
        description: "Geo-fenced punch screen with camera liveness verification and timestamp seal.",
        simulatedState: { geofenceMatch: true, faceVerified: true, punchTime: "09:00:14 AM" },
      },
      {
        id: "history",
        title: "Shift & Break Log",
        description: "Detailed monthly shift history, overtime calculation, and manager approval status.",
        simulatedState: { hoursWorked: "8h 45m", breakMinutes: 45, status: "Approved" },
      },
      {
        id: "offline",
        title: "Offline Buffer Queue",
        description: "Automatic SQLite buffer that securely queues punches when network connection is lost.",
        simulatedState: { bufferedItems: 0, syncStatus: "Synced" },
      },
    ],
    architecture: [
      "Custom Geofence Anchoring algorithm to minimize GPS battery drain",
      "SQLite / WatermelonDB FIFO persistent offline queue",
      "Camera facial detection with liveness anti-spoofing logic",
    ],
  },
  {
    name: "Winish Trends",
    packageName: "com.winishtrends",
    category: "B2C E-Commerce Mobile App",
    description:
      "Mobile commerce experience built from scratch with clean product catalog flows, cart persistence, Android distribution, and fast checkout integration.",
    link: "https://play.google.com/store/apps/details?id=com.winishtrends",
    tags: ["React Native", "E-commerce", "REST APIs", "Android", "Payment Gateway"],
    videoUrl: "/videos/winishtrends-demo.mp4",
    stats: [
      { label: "Catalog Size", value: "10,000+ Items" },
      { label: "App Size", value: "12 MB" },
      { label: "Checkout Time", value: "< 30 sec" },
    ],
    screens: [
      {
        id: "catalog",
        title: "Product Catalog & Filters",
        description: "Infinite scroll catalog with instant category filtering and price sorting.",
        simulatedState: { activeCategory: "Trending", itemsDisplayed: 24, cartCount: 2 },
      },
      {
        id: "detail",
        title: "Product Showcase & Reviews",
        description: "High-resolution image gallery, size selector, stock indicator, and customer reviews.",
        simulatedState: { inStock: true, size: "M", rating: 4.8 },
      },
      {
        id: "checkout",
        title: "Express Mobile Checkout",
        description: "Streamlined 2-step checkout with saved address cards and integrated payment gateway.",
        simulatedState: { paymentMethod: "UPI / Card", totalAmount: "₹1,499", status: "Ready" },
      },
    ],
    architecture: [
      "Optimized FlatList image lazy-loading & caching pipeline",
      "Redux Toolkit for persistent cart & user session management",
      "Native payment gateway integration for seamless UPI & card checkout",
    ],
  },
];

export type TSystem = {
  name: string;
  meta: string;
  detail: string;
  keyTech: string[];
  nodes: { id: string; label: string; role: string; type: "client" | "gateway" | "service" | "db" }[];
  dataFlow: string;
};

export const systems: TSystem[] = [
  {
    name: "Multi-tenant CRM / HRMS SaaS Platform",
    meta: "SaaS Architecture",
    detail:
      "Tenant-isolated enterprise platform managing workforce ops, leads, and customer comms. Integrated with WhatsApp Business & Facebook Graph APIs, real-time WebSocket dashboards, and role-driven permission controls.",
    keyTech: ["Next.js", "React Native", "WebSockets", "WhatsApp APIs", "Redux Toolkit"],
    dataFlow: "Client Action → Node Gateway → WhatsApp Graph API / DB → WebSocket Broadcast → Live Dashboards",
    nodes: [
      { id: "1", label: "Mobile / Web Client", role: "Field Agent & Admin Portal", type: "client" },
      { id: "2", label: "API Gateway", role: "Auth, Multi-Tenant Resolver", type: "gateway" },
      { id: "3", label: "Comms Engine", role: "WhatsApp & Facebook Webhooks", type: "service" },
      { id: "4", label: "WebSocket Hub", role: "Real-time Delta Sync", type: "service" },
      { id: "5", label: "PostgreSQL / Redis", role: "Tenant Data & Cache", type: "db" },
    ],
  },
  {
    name: "SmileSecure Dental Practice Management System",
    meta: "Healthcare Ops",
    detail:
      "End-to-end clinical workflow system across 5 specialized portals (Dentist, Lab, BPO, Office, Admin). Automates patient inquiries, treatment planning, digital dental impression tracking, and manufacturing lab dispatch.",
    keyTech: ["Next.js 15", "TypeScript", "Role RBAC", "REST APIs", "Tailwind CSS"],
    dataFlow: "Patient Registration → Dentist Diagnosis → Treatment Plan → Lab BPO Orders → Manufacturing Dispatch",
    nodes: [
      { id: "1", label: "Dentist Portal", role: "Inquiry & Clinical Charting", type: "client" },
      { id: "2", label: "Office & BPO Portal", role: "Patient Billing & Case Routing", type: "client" },
      { id: "3", label: "Lab Portal", role: "Manufacturing & CAD/CAM Specs", type: "client" },
      { id: "4", label: "Core API Service", role: "HIPAA-compliant Case Engine", type: "service" },
      { id: "5", label: "Encrypted Storage", role: "Medical Records & Scans", type: "db" },
    ],
  },
  {
    name: "B2C E-commerce Storefront",
    meta: "Commerce",
    detail:
      "Next.js e-commerce application tuned specifically for Google Core Web Vitals, Incremental Static Regeneration (ISR), dynamic product search, and high-conversion mobile purchase journeys.",
    keyTech: ["Next.js ISR", "TypeScript", "Tailwind CSS", "Redux", "REST APIs"],
    dataFlow: "User Hit → Edge Cache (ISR HTML) → Client Hydration → Optimistic Cart → Payment Gateway",
    nodes: [
      { id: "1", label: "Next.js Edge Storefront", role: "Instant HTML & Image Optimization", type: "client" },
      { id: "2", label: "Catalog Engine", role: "ISR Product Revalidation (60s)", type: "service" },
      { id: "3", label: "Cart & Session Store", role: "Redux State + Local Persistence", type: "client" },
      { id: "4", label: "Payment Gateway", role: "UPI / Card Express Checkout", type: "gateway" },
    ],
  },
];

export const education = {
  school: "THDC Institute of Hydropower Engineering and Technology",
  degree: "Bachelor of Technology",
  period: "2017 - 2021",
  location: "New Tehri",
};

export const revealClass =
  "reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out data-[animate=true]:opacity-100 data-[animate=true]:translate-y-0";
export const panelClass =
  "bg-background/70 border border-border/40 rounded-[20px] p-4 backdrop-blur-xl shadow-sm transition-all duration-300 hover:border-border";

export type TBlog = {
  slug: string;
  title: string;
  mediumUrl: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  interactiveSimulator?: boolean;
};

export const blogs: TBlog[] = [
  {
    slug: "the-real-permission-flow-for-background-location-in-react-native-android-ios",
    title: "The Real Permission Flow for Background Location in React Native (Android & iOS)",
    mediumUrl: "https://medium.com/@rana.jashwant07/the-real-permission-flow-for-background-location-in-react-native-android-ios-ff0ffcb09992",
    excerpt: "A step-by-step architectural guide to handling multi-level background location permissions, OS dialog nuances, and fallback flows in production React Native apps.",
    content: `When requesting background location permissions in production mobile apps, standard single-prompt requests inevitably fail on modern operating systems. Android and iOS enforce strict two-step permission flows that require careful app design.

### 1. The Two-Step Permission Rule
* **Step 1 (Foreground First)**: You must first request \`ACCESS_FINE_LOCATION\` (and \`ACCESS_COARSE_LOCATION\`). If the user denies foreground access, you cannot request background access.
* **Step 2 (Background Request)**: Only after foreground permission is granted can you prompt for \`ACCESS_BACKGROUND_LOCATION\` on Android 10+ (API level 29+).

### 2. Android OS Nuances (Android 10 to 14)
On Android 11+ (API 30+), the OS no longer displays an in-app system dialog for background location. Instead:
* The system redirects the user directly to the app's **System Settings → Permissions → Location** page.
* You must present a custom **in-app rationale modal** explaining *why* your app requires "Allow all the time" before opening system settings.

### 3. iOS "Always Allow" Flow
On iOS, requesting "Always Allow" shows a two-phase system prompt:
1. The app first receives provisional background access ("While In Use").
2. Later, when the device leaves the geofence or moves significantly, iOS triggers a secondary system confirmation dialog asking the user if they want to keep "Always Allow".

### Summary Blueprint
Always handle permission denials gracefully. Provide a fall-back mode where the user can manually punch location in the foreground if background permission is rejected.`,
    date: "Jun 12, 2026",
    readTime: "5 min read",
    tags: ["React Native", "Android & iOS", "Permissions"],
  },
  {
    slug: "why-your-android-background-location-still-gets-killed-and-how-to-fight-oem-power-managers",
    title: "Why Your Android Background Location Still Gets Killed (And How to Fight OEM Power Managers)",
    mediumUrl: "https://medium.com/@rana.jashwant07/why-your-android-background-location-still-gets-killed-and-how-to-fight-oem-power-managers-fe2289ded489",
    excerpt: "How manufacturers like Xiaomi, Samsung, and Huawei aggressively terminate background location workers, and how to configure battery optimization whitelists & persistent tasks.",
    content: `Even after obtaining "Allow all the time" location permissions, field apps routinely stop updating after 15 to 30 minutes in the background. The culprit is non-standard OEM battery management implementations.

### 1. The Enemy: Custom OEM Task Killers
Manufacturers modify stock Android Doze mode to aggressively kill background processes to claim battery savings:
* **Xiaomi (MIUI / HyperOS)**: Enforces "No restrictions" battery mode manually per app.
* **Samsung (OneUI)**: Places background location workers into "Sleeping Apps" or "Deep Sleeping Apps".
* **OnePlus / Vivo / Oppo**: Force-closes non-system foreground services when the screen is turned off for > 10 minutes.

### 2. Defensive Engineering Strategies
To keep workforce tracking reliable across shifts:
* **Request Battery Optimization Exemption**: Prompt the user with \`ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS\` to whitelist the app.
* **Foreground Service with Sticky Notification**: Attach a persistent notification with priority \`IMPORTANCE_LOW\` to signal Android OS that the service is actively performing critical operations.
* **Direct Users to DontKillMyApp Instructions**: Show OEM-specific step-by-step guides inside your app onboarding for Xiaomi, Vivo, and Samsung devices.`,
    date: "Jun 5, 2026",
    readTime: "6 min read",
    tags: ["Android Ops", "OEM Battery Optimization", "Mobile Performance"],
  },
  {
    slug: "android-13s-hidden-requirement-notification-permission-for-background-services",
    title: "Android 13's Hidden Requirement: Notification Permission for Background Services",
    mediumUrl: "https://medium.com/@rana.jashwant07/android-13s-hidden-requirement-notification-permission-for-background-services-cefbe7568887",
    excerpt: "Understanding the POST_NOTIFICATIONS requirement in Android 13 (API 33) and how silent notification blocks break background location tracking services if unhandled.",
    content: `Starting with Android 13 (API level 33), runtime notification permissions (\`POST_NOTIFICATIONS\`) are required. What many developers miss is how this breaks background location foreground services.

### 1. The Hidden Trap
In Android, running a background location service requires starting a Foreground Service (\`startForeground\`). A Foreground Service MUST display an active, visible notification to the user.
* If \`POST_NOTIFICATIONS\` is denied or ignored on Android 13+, calling \`startForeground()\` will succeed silently without showing a notification, BUT the system will demote your foreground service to a standard background service!
* Once demoted, Android Doze mode will terminate your location updates within minutes.

### 2. Correct Implementation Flow
1. Check for Android 13 (API 33+) at runtime: \`Build.VERSION.SDK_INT >= 33\`.
2. Request \`POST_NOTIFICATIONS\` *before* launching the location foreground service.
3. If the user denies notification permissions, warn them that background tracking will be suspended during screen lock.`,
    date: "May 28, 2026",
    readTime: "4 min read",
    tags: ["Android 13", "Foreground Services", "Notifications"],
  },
  {
    slug: "building-a-watchdog-for-background-tracking-that-actually-restarts-itself",
    title: "Building a Watchdog for Background Tracking That Actually Restarts Itself",
    mediumUrl: "https://medium.com/@rana.jashwant07/building-a-watchdog-for-background-tracking-that-actually-restarts-itself-eae7414da9a8",
    excerpt: "Engineering a resilient native watchdog service using WorkManager and AlarmManager that detects silent tracking crashes and automatically revives the location worker.",
    content: `No matter how clean your JavaScript code is, native memory pressure or OS battery kills can terminate your location service. To guarantee 99.9% tracking uptime during an 8-hour shift, you need a self-healing native Watchdog.

### 1. Watchdog Architecture
The Watchdog operates on a separate thread independent of your main React Native JS engine:
* **Heartbeat Ping**: Every 60 seconds, the active location worker updates a \`last_heartbeat_timestamp\` in native Shared Preferences.
* **WorkManager Periodic Inspector**: A scheduled Android \`WorkManager\` task fires every 15 minutes to inspect the heartbeat timestamp.
* **Self-Healing Trigger**: If \`currentTime - last_heartbeat_timestamp > 5 minutes\`, the Watchdog assumes the location worker crashed and automatically invokes \`startForegroundService()\`.

### 2. AlarmManager Fallback for Deep Sleep
Because WorkManager intervals can be delayed during deep Doze state, configure an exact \`AlarmManager.setExactAndAllowWhileIdle()\` timer as a secondary fallback trigger.`,
    date: "May 18, 2026",
    readTime: "7 min read",
    tags: ["React Native", "WorkManager", "Self-Healing Architecture"],
  },
  {
    slug: "designing-a-persisted-tracking-session-state-machine",
    title: "Designing a Persisted Tracking Session State Machine",
    mediumUrl: "https://medium.com/@rana.jashwant07/designing-a-persisted-tracking-session-state-machine-00125aee4111",
    excerpt: "How to build an explicit finite state machine for workforce tracking sessions that persists across app kills, device reboots, and network losses using SQLite.",
    interactiveSimulator: true,
    content: `Managing complex tracking states (e.g. \`UNINITIALIZED\`, \`SHIFT_ACTIVE\`, \`SITE_ARRIVED\`, \`PAUSED_BREAK\`, \`SYNC_PENDING\`) with loose boolean flags (\`isTrackingEnabled\`, \`isPaused\`) leads to race conditions and invalid operational logs.

### 1. Defining Explicit State Transitions
By modeling tracking sessions as a strict Finite State Machine (FSM):
* States can only move along validated paths (e.g., \`SHIFT_ACTIVE\` → \`SITE_ARRIVED\` → \`SHIFT_ACTIVE\` → \`SHIFT_ENDED\`).
* Invalid transitions (e.g., \`UNINITIALIZED\` → \`SITE_ARRIVED\`) are rejected immediately, preventing bogus visit logs.

### 2. Persistent SQLite State Machine Log
To survive device reboots or app force-closes:
1. Every state transition is written to an atomic SQLite transaction log along with coordinates, battery level, and timestamp.
2. On app launch, the FSM hydrates its current state directly from SQLite, restoring the tracking session seamlessly.

Try out the interactive event stream and Redux slice simulator widget below to see state updates in action!`,
    date: "May 5, 2026",
    readTime: "6 min read",
    tags: ["State Machine", "SQLite Persistence", "Mobile Architecture"],
  },
  {
    slug: "client-side-deduplication-for-location-pings-haversine-distance-time-windows",
    title: "Client-Side Deduplication for Location Pings: Haversine Distance & Time Windows",
    mediumUrl: "https://medium.com/@rana.jashwant07/client-side-deduplication-for-location-pings-haversine-distance-time-windows-de37b9b527a2",
    excerpt: "How to filter GPS jitter, duplicate location pings, and stationary battery drain on Android and iOS using client-side Haversine distance thresholding and sliding time windows.",
    content: `High-frequency GPS tracking can generate thousands of redundant location pings when a worker is stationary, draining device battery and cluttering backend databases.

### 1. Haversine Distance Thresholding
Before dispatching a location ping to the server, calculate the Haversine distance between the newly received \`(lat2, lon2)\` and the last recorded location \`(lat1, lon1)\`:

\`\`\`ts
function getHaversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371e3; // Earth radius in meters
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
}
\`\`\`

### 2. Time Window & Distance Rules
* **Distance Rule**: Discard pings where \`distance < 15 meters\` unless a stationary time window threshold (e.g. 5 minutes) has elapsed.
* **Accuracy Filter**: Drop pings where GPS accuracy radius \`> 30 meters\` to prevent false jumps inside buildings.
* **Outcome**: Reduced backend database write load by 65% and extended mobile battery life by up to 3 hours per shift.`,
    date: "Jun 2, 2026",
    readTime: "6 min read",
    tags: ["Haversine Formula", "GPS Deduplication", "Mobile Performance", "Geolocation"],
  },
  {
    slug: "idempotency-keys-for-location-tracking-apis",
    title: "Idempotency Keys for Location Tracking APIs",
    mediumUrl: "https://medium.com/@rana.jashwant07/idempotency-keys-for-location-tracking-apis-37acd9cfddec",
    excerpt: "How to eliminate duplicate GPS check-ins, double ping submissions, and server race conditions over flaky mobile networks using client-generated Idempotency Keys.",
    content: `When mobile apps transmit location pings over unstable 3G/4G networks, HTTP timeouts frequently cause clients to retry requests that the server already processed, creating duplicate visit logs and corrupting attendance records.

### 1. Generating Client-Side Deterministic Keys
Every location ping batch generates a unique, deterministic Idempotency Key header:

\`\`\`ts
const idempotencyKey = \`ping_\${userId}_\${sessionId}_\${pingTimestamp}_\${sha256(lat + lng)}\`;
// Attach to HTTP request headers: 'Idempotency-Key': idempotencyKey
\`\`\`

### 2. Redis Locking & Deduplication Pipeline
On the backend API gateway:
1. **Atomic Lock Check**: Check Redis using \`SET key value NX EX 86400\`.
2. **First Request**: Executes business logic and caches the resulting HTTP response payload in Redis.
3. **Duplicate Request**: Returns the cached response immediately with HTTP \`200 OK\` (or \`409 Conflict\`) without re-running database writes.

### 3. Measured Impact
* **Zero Duplicate Check-ins**: 100% elimination of double attendance check-ins caused by mobile network retries.
* **Network Flakiness Resiliency**: Seamless recovery when mobile clients transition through tunnels or poor coverage zones.`,
    date: "Jun 10, 2026",
    readTime: "7 min read",
    tags: ["Idempotency Keys", "API Security", "Distributed Systems", "Mobile Networks"],
  },
];

export type TTestimonial = {
  id: number;
  name: string;
  role: string;
  relationship: string;
  initials: string;
  quote: string;
  skills: string[];
  gradient: string;
};

export const testimonials: TTestimonial[] = [
  {
    id: 1,
    name: "Ashutosh Anand",
    role: "Senior Full Stack Developer",
    relationship: "Senior Lead",
    initials: "AA",
    quote:
      "Jashwant's ownership of the entire mobile and frontend pipeline is exceptional. From building multi-tenant SaaS dashboards to shipping battery-aware Play Store apps from scratch, his technical depth, reliability, and architectural clarity are top-tier.",
    skills: ["System Architecture", "React Native", "Monorepo"],
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    id: 2,
    name: "Anjali Sharma",
    role: "Backend Developer",
    relationship: "Co-worker",
    initials: "AS",
    quote:
      "Jashwant is one of the rare frontend engineers who deeply understands backend contracts, REST API design, and WebSocket optimization. Integrating live operational dashboards and field tracking APIs with his React Native apps was always smooth and rock solid.",
    skills: ["WebSocket Sync", "API Design", "State Management"],
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    id: 3,
    name: "Amarjeet Singh",
    role: "Junior Frontend Developer",
    relationship: "Co-worker & Mentee",
    initials: "AS",
    quote:
      "Working under Jashwant's guidance completely transformed how I write React and TypeScript code. He introduced clean component architecture, Redux Toolkit best practices, and disciplined code reviews that helped our team ship complex mobile screens faster.",
    skills: ["Mentorship", "TypeScript", "Code Reviews"],
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    id: 4,
    name: "Shivani Chauhan",
    role: "Junior Frontend Developer",
    relationship: "Co-worker & Mentee",
    initials: "SC",
    quote:
      "Jashwant has a phenomenal eye for UI polish and performance optimization. He taught me how to diagnose re-render bottlenecks, build reusable Tailwind design systems, and approach mobile state management with a resilient, offline-first mindset.",
    skills: ["UI Systems", "Performance", "Offline First"],
    gradient: "from-purple-600 to-blue-600",
  },
];
