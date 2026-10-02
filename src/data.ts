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
  location: string;
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
  { label: "Odoo ERP / Python", percent: 90 },
  { label: ".NET Core / C#", percent: 90 },
  { label: "Git / Version Control", percent: 90 },
  { label: "QA / Software Testing", percent: 90 },
  { label: "React / React Native", percent: 60 },
  { label: "Django REST / FastAPI", percent: 60 },
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
  location: "Davao City, Philippines",
};
