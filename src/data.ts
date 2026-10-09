export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Skill {
  label: string;
  percent: number;
}

export interface ExperienceItem {
  role: string;
  subtitle: string;
  org: string;
  period: string;
}

export interface JourneyItem {
  year: string;
  title: string;
  description: string;
  images: string[];
}

export interface EducationItem {
  degree: string;
  status?: string;
  school: string;
  location: string;
}

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  color: string;
  link?: string;
}

export interface TrainingItem {
  title: string;
  venue: string;
  date: string | null;
}

export interface NavItem {
  id: string;
  label: string;
  num: string;
}

export interface Contact {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  website: string;
  location: string;
}

export interface ResumeProfile {
  title: string;
  focus: string;
  summary: string;
  pdf: string;
}

export interface ResumeSkillGroup {
  label: string;
  items: string[];
}

export interface ResumeRole {
  title: string;
  period: string;
  org: string;
  bullets: string[];
}

export interface ResumeWork {
  title: string;
  detail: string;
}

export const ROLES: string[] = [
  "Full-Stack Developer & ERP Specialist",
  "Odoo ERP Developer",
  "QA / Software Tester",
];

export const STATS: Stat[] = [
  { value: 4, suffix: "+", label: "Years — Developer" },
  { value: 1, suffix: "+", label: "Years — QA" },
  { value: 10, suffix: "+", label: "Shipped Systems" },
];

export const SKILLS: Skill[] = [
  { label: "Odoo ERP / Python", percent: 95 },
  { label: ".NET Core / C#", percent: 90 },
  { label: "Git / Version Control", percent: 90 },
  { label: "QA / Software Testing", percent: 90 },
  { label: "React / React Native", percent: 60 },
  { label: "Django REST / FastAPI", percent: 70 },
];

export const TECH_TAGS: string[] = [
  "Python", "Odoo", "XML/QWeb", "Django", "FastAPI", "React", "React Native",
  "TypeScript", "JavaScript", "Tailwind CSS", "React Query", "MobX", "Zustand",
  "C#", ".NET Core", "ADO.NET", "Git", "REST API", "Android Studio", "Arduino", "IoT",
];

export const LANGUAGES: string[] = ["Filipino", "English", "Lao"];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Sr. Computer Services Programmer",
    subtitle: "Odoo ERP Developer / React TS Full-Stack",
    org: "Davao City Water District",
    period: "Dec 2021 — Present",
  },
  {
    role: "Records Assistant / QA / Software Tester",
    subtitle: "Quality Assurance Tester",
    org: "Davao City Water District",
    period: "Jul 2020 — Nov 2021",
  },
  {
    role: "OJT Web Developer / Technical Support",
    subtitle: "On-the-Job Training",
    org: "Davao City Water District",
    period: "Jun — Oct 2019",
  },
  {
    role: "Volunteer Assistant Teacher",
    subtitle: "Volunteer",
    org: "Sunshine School, Vientiane, Laos",
    period: "Sep 2013 — Aug 2015",
  },
];

export const JOURNEY: JourneyItem[] = [
  {
    year: "2025",
    title: "ERP-HR Suite v2.0 — React TS & .NET Core",
    description:
      "Rebuilding the Attendance, Leave and Payroll modules as a full-stack developer — React TS on the front end, .NET Core APIs on the back end. First deep dive into .NET Core API architecture.",
    images: ["/assets/attendance_logs.png", "/assets/attendance.png", "/assets/leave.png", "/assets/payroll.png"],
  },
  {
    year: "2022",
    title: "From Zero to Hero in the React Ecosystem",
    description:
      "Dove deeper into React — TypeScript, MobX, React Query, Zustand, and React Native — turning what I'd picked up during QA into real production-level skill.",
    images: ["/assets/django.png", "/assets/zustand.png", "/assets/react_query.jpg", "/assets/mobx.png"],
  },
  {
    year: "2021",
    title: "Became Sr. Computer Services Programmer",
    description:
      "Joined the Odoo ERP development team at Davao City Water District, specializing in Python on the back end and Odoo XML/QWeb on the front end.",
    images: ["/assets/odoo.png", "/assets/odoo_erp.png"],
  },
  {
    year: "2020",
    title: "Moved into QA & Software Testing",
    description:
      "Took on Records Assistant / QA / Software Tester duties — my first real exposure to structured testing and quality-assurance process.",
    images: ["/assets/software_testing.jpg"],
  },
  {
    year: "2019",
    title: "First Steps: OJT Web Developer",
    description:
      "500 hours of on-the-job training in web development and technical support — the start of a professional path in software.",
    images: ["/assets/certificate.png"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    status: "Graduated",
    school: "Holy Cross of Davao College",
    location: "Davao City, Philippines",
  },
  {
    degree: "General English — Intermediate 6",
    school: "Vientiane International College",
    location: "Vientiane, Laos",
  },
];

export const PROJECTS: Project[] = [
  { title: "ERP-HR Payroll", desc: "Payroll engine for the ERP-HR suite — computation, deductions, and disbursement workflows.", tags: ["React TS", ".NET Core", "Zustand", "React Query"], color: "#D9A463" },
  { title: "ERP-HR Attendance", desc: "Attendance logging and timekeeping module across the water district's full workforce.", tags: ["React TS", ".NET Core", "MobX", "React Query"], color: "#8FB9A8" },
  { title: "ERP-HR Leave", desc: "Leave-credit tracking and leave-request handling, integrated with attendance records.", tags: ["React TS", ".NET Core", "MobX", "React Query"], color: "#C97B63" },
  { title: "ERP-HR Employee 201", desc: "Digitized 201 employee records for the district's full personnel roster.", tags: ["React TS", ".NET Core", "Zustand", "React Query"], color: "#7C92A8" },
  { title: "Odoo ERP", desc: "Core ERP system built in Python, with Odoo XML/QWeb for the presentation layer.", tags: ["Python", "Odoo", "XML/QWeb"], color: "#B08968" },
  { title: "LAKO App", desc: "Public-facing web application built on a Django REST Framework backend.", tags: ["React TS", "Django REST"], color: "#6B9080" },
  { title: "COC & CTO Web App", desc: "Custom application handling Certificate of Completion processes for DCWD.", tags: ["Web App", "Government"], color: "#A47148" },
  { title: "Indoor Environmental Quality Monitor", desc: "IoT system on Arduino with a REST API and Android client for real-time environmental sensing.", tags: ["IoT", "Arduino", "API", "Android"], color: "#9C8AA5" },
  { title: "Phone Directory", desc: "Internal phone directory application built during on-the-job training.", tags: ["PHP", "AJAX", "jQuery"], color: "#8A9A5B" },
  { title: "Allia's Corner", desc: "A personal app made for my daughter — recording memories and milestones as she grows up.", tags: ["React TS", "Tailwind", "Zustand", "Supabase"], color: "#D98E73", link: "https://allias-corner.netlify.app/" },
];

export const AWARDS: string[] = [
  "Career Service Examination — Professional Level (Passed)",
  "Infomercial Contest, After Effects — Champion (2019)",
  "Best Capstone Project — 1st Runner-Up",
  "2nd Honors, SY 2018–2019, 2nd Semester",
  "2nd Honors, SY 2018–2019, 1st Semester",
  "3rd Honors, SY 2017–2018",
  "3rd Honors, SY 2016–2017",
  "Outstanding Student Leader — I.T. Society President",
];

export const AFFILIATIONS: string[] = [
  "Information Technology Society — President (2018–2019)",
  "Philippine Society of IT Students — Member (2018–2019)",
];

export const TRAINING: TrainingItem[] = [
  { title: "In-Depth Testing Management Techniques for ICTD Personnel", venue: "DCWD Building, Matina, Davao City", date: "Dec 21–22, 2023" },
  { title: "Bridging the Gap: Accounting for Non-Accountants", venue: "DCWD Building, Matina, Davao City", date: "Aug 31 – Sep 1, 2023" },
  { title: "Internet of Things: Arduino Workshop", venue: "Holy Cross of Davao College", date: "Mar 25–26, 2019" },
  { title: "Adobe Photoshop Training Course (40 hrs)", venue: "LOGOS Academy, Vientiane, Laos", date: null },
];

export const NAV: NavItem[] = [
  { id: "profile", label: "Profile", num: "01" },
  { id: "stack", label: "Stack", num: "02" },
  { id: "experience", label: "Experience", num: "03" },
  { id: "journey", label: "Journey", num: "04" },
  { id: "education", label: "Education", num: "05" },
  { id: "work", label: "Work", num: "06" },
  { id: "honors", label: "Honors", num: "07" },
  { id: "affiliations", label: "Affiliations", num: "08" },
  { id: "training", label: "Training", num: "09" },
  { id: "connect", label: "Connect", num: "10" },
];

export const CONTACT: Contact = {
  email: "gravencorias082@gmail.com",
  phone: "+63 946 412 5195",
  github: "https://github.com/gravencorias",
  linkedin: "https://www.linkedin.com/in/graven-niel-corias-452092333",
  website: "https://portfolio-gravencorias.netlify.app",
  location: "Davao City, Philippines",
};

// /resume page. The downloadable PDF is rendered from it: run `npm run resume:pdf` after editing.
export const RESUME_PROFILE: ResumeProfile = {
  title: "Full-Stack Software Developer",
  focus: "React, ASP.NET Core, Python & Odoo ERP",
  summary:
    "Full-stack software developer with 4+ years of professional experience building production ERP and internal business applications for a government utility, plus 1+ year in software quality assurance and testing. Backend strength in Python/Odoo and C#/ASP.NET Core, with frontend experience in React and TypeScript. Experienced in REST APIs, PostgreSQL, business-process automation, system integration, debugging, testing, and translating complex operational rules into maintainable software.",
  pdf: "/assets/Graven_Niel_Corias_CV.pdf",
};

export const RESUME_SKILLS: ResumeSkillGroup[] = [
  { label: "Languages", items: ["C#", "Python", "TypeScript/JavaScript", "SQL", "XML"] },
  { label: "Backend & APIs", items: ["ASP.NET Core", "EF Core", "Odoo ERP Framework", "Django REST Framework", "FastAPI", "Odoo Controllers", "RESTful APIs"] },
  { label: "Frontend", items: ["React", "TypeScript", "Vite", "Tailwind CSS", "Ant Design", "HTML", "CSS", "QWeb"] },
  { label: "Data & Integration", items: ["PostgreSQL", "relational data modeling", "Axios", "API integration"] },
  { label: "State, Testing & Tools", items: ["TanStack Query", "Zustand", "Git", "functional/regression testing", "debugging", "QA practices"] },
];

export const RESUME_EXPERIENCE: ResumeRole[] = [
  {
    title: "Sr. Computer Services Programmer — Full-Stack / ERP Developer",
    period: "Dec 2021 – Present",
    org: "Davao City Water District, Davao City, Philippines",
    bullets: [
      "Engineer and maintain custom Odoo ERP modules covering business logic, workflows, validations, reports, access controls, and XML/QWeb interfaces for core utility operations.",
      "Design and integrate RESTful APIs and backend services using ASP.NET Core, Odoo controllers, Django REST Framework, and FastAPI to connect enterprise modules and internal applications.",
      "Build React and TypeScript interfaces for internal business workflows, integrating APIs and applying modern client-side data and state-management patterns.",
      "Translate department requirements into data models, business rules, API contracts, validation flows, and maintainable end-user workflows.",
      "Troubleshoot, refactor, and validate production code with stakeholders and QA personnel to improve correctness, maintainability, and performance.",
    ],
  },
  {
    title: "Records Assistant / Quality Assurance / Software Tester",
    period: "Jul 2020 – Nov 2021",
    org: "Davao City Water District, Davao City, Philippines",
    bullets: [
      "Performed functional, regression, and business-rule testing for internal applications and documented reproducible defects before release.",
      "Validated bug fixes and new features against user requirements, coordinating with developers throughout the defect-resolution cycle.",
      "Maintained data accuracy and record integrity, strengthening attention to data quality and edge cases later applied to software development work.",
    ],
  },
  {
    title: "OJT Web Developer / Technical Support Group",
    period: "Jun 2019 – Oct 2019",
    org: "Davao City Water District, 500 hours",
    bullets: [
      "Assisted in the development and maintenance of internal web applications, including the COC & CTO Web Application and Phone Directory Application.",
      "Provided application and technical support to end users, troubleshooting software and system issues.",
    ],
  },
];

export const RESUME_WORK: ResumeWork[] = [
  {
    title: "Payroll & HR ERP Workflows",
    detail: "Developed and maintained payroll-related business logic, payslip-generation workflows, reporting/export functionality, and employee/attendance integrations across ERP and supporting web/API components.",
  },
  {
    title: "ERP & Internal API Integration",
    detail: "Built and consumed REST endpoints across Odoo/Python and ASP.NET Core services to connect modules and internal applications while keeping business rules centralized and testable.",
  },
  {
    title: "Indoor Environmental Quality Monitoring System",
    detail: "IoT capstone combining Arduino sensors, a custom API, and an Android Studio mobile application for real-time indoor-condition monitoring; recognized as Best Capstone Project 1st Runner-Up.",
  },
];

export const RESUME_EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    status: "Graduated",
    school: "Holy Cross of Davao College",
    location: "Davao City, Philippines",
  },
];

export const RESUME_CERTIFICATIONS: string[] = [
  "In-Depth Testing Management Techniques for ICTD Personnel — Davao City Water District, Dec 2023",
  "Career Service Examination, Professional Level — Passed",
  "IoT: Arduino Workshop (2-day) — Holy Cross of Davao College, Mar 2019",
];

export const RESUME_LEADERSHIP: string[] = [
  "Outstanding Student Leader — College of Engineering and Technology, SY 2018–2019",
  "President, Information Technology Society, SY 2018–2019",
  "Best Capstone Project — 1st Runner-Up",
];
