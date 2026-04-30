export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: string;
  url: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
};

export type CertificateItem = {
  title: string;
  url: string;
};

export type ResumeData = {
  name: string;
  nameJP: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  links: {
    portfolio: string;
    linkedin: string;
    github: string;
  };
  highlights: string[];
  strengths: string[];
  experience: ExperienceItem[];
  skills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    testing: string[];
    database: string[];
    infra: string[];
    product: string[];
    tools: string[];
    dataAi: string[];
  };
  certificates: CertificateItem[];
  education: EducationItem[];
};

export const resumeData: ResumeData = {
  name: "Deepanshu Prajapati",
  nameJP: "ディーパンシュ・プラジャパティ",
  title: "Senior Full Stack Engineer · Design Systems · Scalable Architecture · Blockchain",
  summary:
    "Full-stack engineer with experience building high-scale, multi-service platforms using Next.js, TypeScript, and Node.js. Distributed systems handling high-throughput workloads, real-time data, and complex role-based access patterns, with a focus on performance and scalability.",
  location: "Bengaluru, India",
  email: "dipanshuraz2@gmail.com",
  phone: "+91 8299379285",
  links: {
    portfolio: "Portfolio",
    linkedin: "LinkedIn",
    github: "Github"
  },
  highlights: [
    "Built Upshift from scratch (Next.js): 0→200 institutional users, $400M+ TVL, 50+ vaults.",
    "Led frontend architecture for institutional DeFi and CeFi workflows at August Digital.",
    "Designed server-driven UI and micro-frontends for Braveno / FreeStreet trading platforms.",
    "Improved customer satisfaction ~40% on a MERN health platform at Zensar."
  ],
  strengths: [
    "Takes initiative: proactively owns new challenges and drives results.",
    "Technical acumen: trusted contributor who shares deep expertise.",
    "Learning agility: learns by doing and applies new knowledge quickly.",
    "Growth mindset: innovates for disruptive solutions and continuous improvement."
  ],
  experience: [
    {
      company: "August Digital, New York",
      role: "Software Engineer (Remote, US Timezone)",
      period: "Aug 2023 - Jan 2026",
      url: "https://augustdigital.io/",
      summary:
        "Institutional DeFi infrastructure powering Upshift and the August Platform — secure vault management, lending, collateralization, and asset optimization.",
      bullets: [
        "Built Upshift from scratch using Next.js, scaling from 0 to 200 institutional users and supporting $400M+ TVL across 50+ vaults.",
        "Revamped the August Platform: loans, collateral management, vault deployment, swaps, and multi-tenancy.",
        "Built frontend contract interaction layers and abstraction workflows so users can run complex on-chain strategies through clear UX.",
        "Led frontend architecture and delivery for institutional DeFi and CeFi workflows — performance, scalability, and production reliability.",
        "Built a scalable design system and UI library: architecture, patterns, and standards for consistency and velocity across teams."
      ],
      stack:
        "Next.js, TypeScript, Express.js, Ethers.js, Wallet Integrations, AWS, GitHub Actions, CI/CD, Analytics, Monitoring"
    },
    {
      company: "Braveno LTD, UK",
      role: "Lead Software Engineer (Remote, UK Timezone)",
      period: "Nov 2021 - Aug 2023",
      url: "https://braveno.com/",
      summary:
        "Braveno and FreeStreet — institutional trading platforms with exchange, wallet, and analytics for digital assets.",
      bullets: [
        "Led development of institutional trading platforms on Next.js with Node.js and Express-based microservices.",
        "Designed and implemented server-driven UI for dynamic, configuration-driven workflows.",
        "Built and maintained backend microservices (Node.js, Express) for authentication, admin, and orchestration.",
        "Re-architected the trading system for performance, fault tolerance, and scalability under high load.",
        "Micro-frontend architecture for wallet, exchange, admin, and authentication; SDKs and analytics dashboards."
      ],
      stack: "Next.js, TypeScript, Ethers.js, Express.js, WebSockets, GitHub Actions, CI/CD"
    },
    {
      company: "Zensar Technologies, Bengaluru, India",
      role: "Software Developer (Onsite)",
      period: "Jun 2021 - Oct 2021",
      url: "https://www.zensar.com/",
      summary:
        "Preventxis — scalable digital health platform for secure, confidential remote sexual health testing across the UK.",
      bullets: [
        "Full-stack features on Node.js and Express services integrated with frontend apps.",
        "RESTful APIs and backend workflows with microservice-style separation of concerns.",
        "MERN customer platform; ~40% user satisfaction improvement via UX and performance work.",
        "Responsive UI and SQL-backed analytics; triage and workflow systems for operations."
      ],
      stack: "MongoDB, SQL, Express.js, React.js, Node.js, Tailwind CSS"
    },
    {
      company: "Edstem Technologies, Kochi, India",
      role: "Software Developer (Remote)",
      period: "Jul 2020 - Jun 2021",
      url: "https://www.edstem.com/",
      summary:
        "Warehowz — on-demand warehousing for businesses in the USA and Canada to discover, manage, and optimize storage and logistics.",
      bullets: [
        "Advanced reporting with PDF and Excel exports for operational insights.",
        "Real-time ticketing with WebSockets, cutting resolution time by ~25%.",
        "Custom analytics, operational logging, and a platform built from scratch."
      ],
      stack: "Node.js, Express.js, MongoDB, Socket.IO, Docker"
    },
    {
      company: "Masai School, Bengaluru, India",
      role: "Full Stack Engineer / Mentor (Remote)",
      period: "Oct 2019 - Oct 2020",
      url: "https://www.masaischool.com/",
      summary:
        "Masai School — full-stack, web, and AI/ML bootcamp training tech aspirants in Bengaluru.",
      bullets: [
        "Mentored 100+ students in full-stack web development, data structures, and systems fundamentals.",
        "Mock interviews, code reviews, and guidance on production-ready frontend and backend projects."
      ],
      stack: "JavaScript, Next.js, Node.js, Data Structures & Algorithms"
    },
    {
      company: "Kuku FM, Mumbai, India",
      role: "Frontend Developer Intern (Remote)",
      period: "May 2020 - Jul 2020",
      url: "https://kukufm.com/",
      summary:
        "India's leading audio platform for audiobooks, stories, podcasts, news, and courses across genres and languages.",
      bullets: [
        "~30% engagement lift through UI redesign and UX improvements.",
        "Shipped features for content discovery, playback, and retention with the CTO and design team."
      ],
      stack: "Next.js, Tailwind CSS, Redux, Audio APIs"
    }
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "Solidity"],
    frontend: [
      "React.js",
      "Next.js",
      "Material UI",
      "Tailwind",
      "D3.js",
      "Highcharts",
      "React Query",
      "Redux"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "WebSockets",
      "Prisma",
      "Redis"
    ],
    testing: ["Jest", "React Testing Library", "Playwright", "API Mocking"],
    database: ["MongoDB", "PostgreSQL"],
    infra: ["AWS", "Docker", "GitHub Actions", "CI/CD Pipelines"],
    product: ["Claude AI", "Cursor", "Jira", "Confluence", "Notion", "Draw.io", "Git", "Agents", "MCP"],
    tools: [
      "Ethers.js",
      "Wallet Integration",
      "Smart Contract Integration",
      "DeFi Frontends"
    ],
    dataAi: ["Python (APIs, scripting)", "Automation", "GenAI workflows"]
  },
  certificates: [
    {
      title: "Microsoft EXAM 480: Programming in HTML5 with JavaScript and CSS3 (G911-7855)",
      url: "https://www.youracclaim.com/badges/48db5f6d-a346-4291-ad39-9a504250c692/linked_in_profile"
    },
    {
      title: "React Developer Nanodegree",
      url: "https://drive.google.com/file/d/1rqLyhOeSkQ40oB35JDaL0U4c83VyMOWV/view?usp=drive_link"
    },
    {
      title: "Front End Web Developer Nanodegree",
      url: "https://drive.google.com/file/d/1rqLyhOeSkQ40oB35JDaL0U4c83VyMOWV/view?usp=drive_link"
    },
    {
      title: "Android Developer Nanodegree",
      url: "https://drive.google.com/file/d/1VHOBWugnqTLSWIxkrl2byymUkg5Gdhpb/view?usp=sharing"
    },
    {
      title: "Blockchain Developer Nanodegree",
      url: "https://drive.google.com/file/d/1bnaP6kMem1jXd3g77_nV3nhw_XYkD2GF/view?usp=sharing"
    },
    {
      title: "Scientific Computing & Python for Data Science (WQU)",
      url: "https://wqu.thedataincubator.com/certificate/6015360742457344"
    }
  ],
  education: [
    {
      school: "Mangalayatan University, Aligarh",
      degree: "MCA — Computer Applications",
      period: ""
    },
    {
      school: "Integral University, Lucknow",
      degree: "BCA — Computer Applications",
      period: ""
    }
  ]
};
