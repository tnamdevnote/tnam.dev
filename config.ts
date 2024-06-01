export const TOC_LIST = [
  {
    name: "ABOUT",
    path: "#about",
  },
  {
    name: "EXPERIENCE",
    path: "#experience",
  },
  {
    name: "PROJECTS",
    path: "#projects",
  },
];

export const EXPERIENCE = [
  {
    title: "Frontend Developer - PRISM 2.0",
    date: "OCT, 2019 — AUG, 2023",
    description: `Modernized 5+ legacy features through design and development overhaul, addressing user needs and design aesthetic; Communicated design and technical requirements during design reviews within a cross-functional team of 5 by creating wireframes and interactive prototype;`,
    techStack: [
      "React",
      "TypeScript",
      "MUI",
      "styled components",
      "Figma",
      "Framer Motion",
      "react-hook-form",
      "redux-toolkit",
    ],
  },
  {
    title: "Data Warehouse Developer",
    date: "NOV, 2018 — OCT, 2019",
    description: `Developed data pipelines using SQL to ingest statewide assessment data, creating data views for utilization in BI tools like Qliksense`,
    techStack: ["SQL", "Snowflake", "Data Warehousing", "ETL"],
  },
  {
    title: "Data Analyst",
    date: "NOV, 2016 — NOV, 2018",
    description: `Expedited data validation process by 50% by writing reusable test queries using SQL after two months; Documented testing manual for the product data validation process, which was adopted across the development team.`,
    techStack: ["SQL", "RDBMS", "Excel"],
  },
];

export const PROJECTS = [
  {
    name: "Mini Project: An Animated Like Button",
    description: `Inspired by Delba and Josh Comeau, I recreated my own version of a like button that not only animates but also persists
    like counts to a database.`,
    techStack: [
      "React",
      "Next.js",
      "Prisma",
      "PlanetScale",
      "TailwindCSS",
      "Figma",
    ],
    url: "https://medium.com/@taekbeen93/mini-project-how-i-built-a-full-stack-like-button-from-design-to-implementation-701edc1a0f0c",
    imgUrl: "/project-like-btn.png",
  },
  {
    name: "PRISM 2.0 Design Mockup (Eidex)",
    description: `This is a collection of design mockups that I designed and also developed during the most recent project at my work. 
    I have created this document to facilitate communication with the team, making sure engineers and product owner were on the same page with the business requirements.`,
    techStack: ["Figma", "Styled Component", "MUI"],
    url: "https://drive.google.com/file/d/1PaqNKYgW0WzZ855CbfyZW8eEIGp2IGje/view?usp=sharing",
    imgUrl: "/project-prism-2.png",
  },
  {
    name: "Build Youtube",
    description: `Built client-side Youtube application in order to learn and apply frontend development practices, including theming,
routing, and data fetching. The application provides search and streaming features using Youtube Data API.`,
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "TanstackQuery",
      "RESTful API",
    ],
    url: "https://github.com/tnamdevnote/youtube-clone",
    imgUrl: "/project-yc-light.png",
  },
];

export const CONTACTS = [
  {
    name: "Github",
    url: "https://github.com/tnamdevnote",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/luke-tb-nam/",
  },
  {
    name: "Email",
    url: "mailto:luke.tb.nam@outlook.com",
  },
];
