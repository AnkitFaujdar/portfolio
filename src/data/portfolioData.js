/**
 * Portfolio Data Configuration
 * Centralized data store for Ankit Faujdar's Portfolio
 * Replace placeholder links (socialLinks, projectLinks) with your actual profile links when available.
 */

export const personalInfo = {
  name: "Ankit Faujdar",
  shortName: "Ankit",
  title: "B.Tech CSE | AI & Data Science Student",
  institution: "JECRC University",
  year: "1st Year Student",
  statusBadge: "Open to Learning & Opportunities",
  tagline: "Passionate about programming, web development, artificial intelligence, and building practical technology solutions. Currently learning and developing my skills in computer science while working on real-world projects.",
  location: "Jaipur, Rajasthan, India",
  email: "ankit.faujdar.dev@gmail.com", // Placeholder: replace with your primary email
  github: "https://github.com/ankit-faujdar", // Placeholder: replace with your GitHub profile
  linkedin: "https://linkedin.com/in/ankit-faujdar", // Placeholder: replace with your LinkedIn profile
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Journey", href: "#journey" },
  { name: "Goals", href: "#goals" },
  { name: "Contact", href: "#contact" },
];

export const aboutStats = [
  { label: "Academic Level", value: "B.Tech Student", sub: "1st Year CSE" },
  { label: "Specialization", value: "AI & Data Science", sub: "Core Focus" },
  { label: "Practical Work", value: "Project-Driven", sub: "Active Builder" },
  { label: "Mindset", value: "Continuous Learner", sub: "Tech Explorer" },
];

export const skillCategories = [
  {
    title: "Programming",
    icon: "Code2",
    description: "Core languages used for problem solving and software fundamentals.",
    skills: [
      { name: "Python", level: "Primary Language", icon: "FileCode2" },
      { name: "C", level: "Foundations", icon: "Terminal" },
      { name: "C++", level: "Problem Solving", icon: "Cpu" },
      { name: "JavaScript", level: "Web & Logic", icon: "Braces" },
    ],
  },
  {
    title: "Web Development",
    icon: "Layout",
    description: "Creating responsive, interactive web interfaces and experiences.",
    skills: [
      { name: "HTML", level: "Semantic Markup", icon: "Code" },
      { name: "CSS", level: "Styling & Flex/Grid", icon: "Palette" },
      { name: "JavaScript", level: "Modern ES6+", icon: "Sparkles" },
      { name: "React", level: "Component Architecture", icon: "Layers" },
      { name: "Responsive Web Design", level: "Mobile-First UX", icon: "Smartphone" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: "Wrench",
    description: "Modern developer workflow, version control, and tooling setup.",
    skills: [
      { name: "Git", level: "Version Control", icon: "GitBranch" },
      { name: "GitHub", level: "Repo Management", icon: "Github" },
      { name: "VS Code", level: "Primary Code Editor", icon: "Laptop" },
      { name: "Vite", level: "Build Tooling", icon: "Zap" },
    ],
  },
  {
    title: "AI & Data Science",
    badge: "Active Learning Focus",
    icon: "Brain",
    description: "Foundational concepts and emerging technologies currently being explored.",
    isLearningArea: true,
    skills: [
      { name: "Artificial Intelligence", level: "Foundational Concepts", icon: "Bot" },
      { name: "Data Science", level: "Analysis Fundamentals", icon: "BarChart3" },
      { name: "Machine Learning", level: "Algorithmic Basics", icon: "Network" },
      { name: "Generative AI", level: "Prompting & API Exploration", icon: "Sparkles" },
    ],
  },
];

export const projects = [
  {
    id: "rasoi-gen-ai",
    title: "Rasoi-Gen AI",
    category: "AI / Healthcare / Web Development",
    highlight: "Featured Concept Project",
    description:
      "Rasoi-Gen AI is a health-focused web platform concept designed to help users discover suitable meal and recipe suggestions based on health-related requirements and available ingredients.",
    features: [
      "Health profile configuration (dietary limits, allergies, fitness targets)",
      "Ingredient scanning & pantry-matching concept",
      "AI-driven recipe suggestions tailored to user nutrition",
      "Dynamic AI weekly meal planner",
      "Direct grocery ordering flow concept",
      "Personalized health subscription model concept",
      "Adaptive mobile-first responsive interface",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "React", "AI / GenAI Concepts"],
    links: {
      demo: "https://rasoi-gen-ai-preview.example.com", // Placeholder
      github: "https://github.com/ankit-faujdar/rasoi-gen-ai", // Placeholder
    },
    status: "Concept & Prototype",
    featured: true,
  },
  {
    id: "portfolio-website",
    title: "Developer Portfolio",
    category: "Personal Brand / Frontend",
    highlight: "Live Showcase",
    description:
      "A responsive personal portfolio designed to showcase my skills, projects, education, and journey as a B.Tech CSE student with a dark modern tech aesthetic.",
    features: [
      "Glassmorphic cards with responsive layout",
      "Section smooth-scroll with active nav indicator",
      "Client-side validated contact form with quick feedback",
      "Interactive code preview visual and modular architecture",
      "Zero-latency loading with Vite and modern React hooks",
    ],
    techStack: ["React", "Vite", "JavaScript", "CSS"],
    links: {
      demo: "#", // Current website
      github: "https://github.com/ankit-faujdar/portfolio", // Placeholder
    },
    status: "Completed",
    featured: false,
  },
  {
    id: "future-project",
    title: "More Projects Coming Soon...",
    category: "In Ideation & Development",
    isComingSoon: true,
    description:
      "Currently ideating and building new projects focused on Machine Learning fundamentals, data-driven web utilities, and real-world student tools. Stay tuned for updates!",
    features: [
      "Exploring real-world problem statements",
      "Focusing on AI/ML integration with web frontends",
      "Hackathon collaborations and open-source contributions",
    ],
    techStack: ["Python", "React", "AI/ML", "REST APIs"],
    status: "Coming Soon",
    featured: false,
  },
];

export const educationData = [
  {
    degree: "B.Tech — Computer Science & Engineering (AI & Data Science)",
    institution: "JECRC University",
    duration: "2026 – Present",
    status: "Currently Pursuing (1st Year)",
    isCurrent: true,
    highlights: [
      "Specializing in Artificial Intelligence and Data Science curriculum",
      "Building strong foundation in Computer Science fundamentals, logic design, and programming",
      "Active participant in tech societies, hackathons, and collaborative developer clubs",
    ],
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "[Your School Name]", // Placeholder for user
    duration: "Completed",
    status: "Science Stream (PCM)",
    isCurrent: false,
    gradePlaceholder: "[Your Percentage / Grade %]", // Placeholder for user
    highlights: [
      "Physics, Chemistry, and Mathematics (PCM) foundation",
      "Developed early interest in algorithmic problem solving and computing",
    ],
  },
];

export const learningJourney = [
  {
    year: "2026",
    title: "Started B.Tech",
    subtitle: "Computer Science & Engineering (AI & Data Science)",
    description:
      "Embarked on my undergraduate journey at JECRC University, focusing on core computer science foundations and the rapid emergence of intelligent systems.",
    icon: "GraduationCap",
    badge: "Current Milestone",
  },
  {
    year: "Phase 1",
    title: "Programming Fundamentals",
    subtitle: "Logic & Problem Solving",
    description:
      "Building robust programming fundamentals starting with Python, C, and C++. Exploring data structures, algorithm design, and core programming paradigms.",
    icon: "Terminal",
    badge: "Active Focus",
  },
  {
    year: "Phase 2",
    title: "Web Development",
    subtitle: "Frontend & Architecture",
    description:
      "Learning modern HTML, CSS, JavaScript, and React while building practical, responsive web applications like this portfolio and platform prototypes.",
    icon: "Layout",
    badge: "Active Focus",
  },
  {
    year: "Phase 3",
    title: "Projects & Hackathons",
    subtitle: "Practical Implementation",
    description:
      "Exploring practical problem statements, building web concepts such as Rasoi-Gen AI, and participating in hackathon events and coding challenges.",
    icon: "Rocket",
    badge: "Continuous",
  },
  {
    year: "Phase 4",
    title: "AI & Data Science",
    subtitle: "Specialization Exploration",
    description:
      "Beginning my deeper journey into Machine Learning mathematics, data analysis libraries, and Generative AI workflows to solve real-world problems.",
    icon: "BrainCircuit",
    badge: "Expanding",
  },
];

export const goals = [
  {
    title: "Strong Programming Fundamentals",
    category: "Core Competency",
    description:
      "Deepen mastery of data structures, algorithms, and computational thinking across Python, C++, and modern languages.",
    icon: "Code2",
  },
  {
    title: "Full-Stack Web Development",
    category: "Engineering",
    description:
      "Expand from frontend React into end-to-end full-stack development, server architectures, and RESTful API integrations.",
    icon: "Globe",
  },
  {
    title: "Artificial Intelligence & Data Science",
    category: "Specialization",
    description:
      "Master core machine learning models, statistical analysis, data preprocessing, and applied AI pipelines.",
    icon: "Brain",
  },
  {
    title: "Machine Learning Implementations",
    category: "Applied AI",
    description:
      "Build practical predictive models and computer vision / NLP prototypes addressing tangible everyday challenges.",
    icon: "Cpu",
  },
  {
    title: "Real-World Projects",
    category: "Product",
    description:
      "Ship complete, end-to-end software tools that provide real value to users, with intuitive UX and maintainable codebases.",
    icon: "Layers",
  },
  {
    title: "Internships & Industry Exposure",
    category: "Career",
    description:
      "Work alongside experienced engineers and product teams during summer internships to learn production-grade standards.",
    icon: "Briefcase",
  },
  {
    title: "Competitive Programming & Problem Solving",
    category: "Algorithmic Skill",
    description:
      "Consistently practice algorithmic problems on platforms like LeetCode and CodeChef to sharpen analytical speed.",
    icon: "Target",
  },
  {
    title: "Long-Term Software Engineering Career",
    category: "Vision",
    description:
      "Grow into a well-rounded software engineer and AI practitioner who designs resilient, scalable, and impactful technology.",
    icon: "Compass",
  },
];

export const contactInfo = {
  heading: "Let's Build Something Together",
  description:
    "I'm always interested in learning, collaborating, building projects, and connecting with people in technology.",
  directEmail: "ankit.faujdar.dev@gmail.com",
  location: "Jaipur, Rajasthan, India",
  channels: [
    {
      name: "Email",
      value: "ankit.faujdar.dev@gmail.com",
      actionLabel: "Send an Email",
      href: "mailto:ankit.faujdar.dev@gmail.com",
      icon: "Mail",
      note: "Preferred for direct messages",
    },
    {
      name: "GitHub",
      value: "github.com/ankit-faujdar",
      actionLabel: "View Repositories",
      href: "https://github.com/ankit-faujdar",
      icon: "Github",
      note: "Code repositories & concepts",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/ankit-faujdar",
      actionLabel: "Connect on LinkedIn",
      href: "https://linkedin.com/in/ankit-faujdar",
      icon: "Linkedin",
      note: "Professional networking",
    },
  ],
};
