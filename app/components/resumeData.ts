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
  };
  certificates: CertificateItem[];
  education: EducationItem[];
};

export const resumeData: ResumeData = {
  name: "Deepanshu Prajapati",
  nameJP: "ディーパンシュ・プラジャパティ",
  title: "Web3 Full-Stack Engineer",
  summary:
    "Full-stack engineer with 6+ years of experience building cloud and Web3 products across distributed teams in the US, Europe, and Australia. Strong in cloud infrastructure (AWS, Azure, DevOps), asynchronous collaboration, and translating product goals into scalable engineering outcomes.",
  location: "Bengaluru, India",
  email: "dipanshuraz2@gmail.com",
  phone: "+91 8299379285",
  links: {
    portfolio: "Portfolio",
    linkedin: "LinkedIn",
    github: "Github"
  },
  highlights: [
    "Reduced AWS costs by 20%-50% through anomaly detection and resource optimization.",
    "Led a frontend team and delivered a server-driven UI architecture for scalability.",
    "Re-architected a trading platform and built micro-frontend modules for wallets and exchange.",
    "Shipped analytics-driven customer platforms with measurable engagement gains."
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
      role: "Software Engineer",
      period: "Aug 2023 - Feb 2026",
      url: "https://augustdigital.io/",
      summary:
        "Cloud governance platform to reduce AWS costs via anomaly detection and wastage insights.",
      bullets: [
        "Reduced AWS costs by 20%-50% through anomaly detection and resource optimization.",
        "Built a custom UI library, charts, and grids to enhance usability.",
        "Led the frontend team and designed a server-driven UI architecture to improve scalability.",
        "Developed customer and admin dashboards for cloud expense management."
      ],
      stack: "AWS, Next.js, Tailwind, Express.js, React Query, Material UI, Charts"
    },
    {
      company: "Braveno LTD, UK (Remote)",
      role: "Lead Software Engineer",
      period: "Nov 2021 - Aug 2023",
      url: "https://braveno.com/",
      summary:
        "Exchange with provable full reserves via segmented wallets and decentralized settlement.",
      bullets: [
        "Led development of Braveno and FreeStreet platforms.",
        "Re-architected the trading platform to improve performance and reliability.",
        "Built micro-frontend architecture for wallet, exchange, admin, and auth modules.",
        "Developed SDKs, customizable themes, and advanced analytics for clients.",
        "Engineered backend services for admin and authentication modules."
      ],
      stack: "Ethers.js, React, Next.js, Socket.IO, Tailwind, Express.js, MongoDB"
    },
    {
      company: "Zensar Technologies, Bengaluru",
      role: "Software Developer",
      period: "Jun 2021 - Oct 2021",
      url: "https://www.zensar.com/",
      summary: "Preventx remote sexual health testing platform for the UK.",
      bullets: [
        "Designed and developed a scalable customer platform, improving user satisfaction by 40%.",
        "Conducted analytics to identify user behavior trends.",
        "Established a triage system to improve customer support workflows."
      ],
      stack: "React, Tailwind, Sass"
    },
    {
      company: "Edstem Technologies, Kochi",
      role: "Software Developer",
      period: "Jul 2020 - Jun 2021",
      url: "https://www.edstem.com/",
      summary: "Warehowz on-demand warehousing platform for USA & Canada.",
      bullets: [
        "Spearheaded advanced reporting tools with PDF and Excel export.",
        "Built a ticketing system reducing issue resolution time by 25%.",
        "Implemented custom analytics tools for event tracking and success goals.",
        "Delivered manager action logs and invoice tracking dashboards."
      ],
      stack: "HTML, CSS, JavaScript, Socket.IO, Bootstrap, Node.js, Express.js, MongoDB"
    },
    {
      company: "Masai School, Bengaluru",
      role: "Full Stack Engineer",
      period: "Oct 2019 - Oct 2020",
      url: "https://www.masaischool.com/",
      summary: "Bootcamp mentor and platform contributor.",
      bullets: [
        "Mentored students weekly through coding challenges and mock interviews.",
        "Provided targeted feedback to improve interview outcomes."
      ],
      stack: "HTML, CSS, JavaScript, React, Redux, Node.js"
    },
    {
      company: "Kuku FM, Mumbai",
      role: "Frontend Developer Intern",
      period: "May 2020 - Jul 2020",
      url: "https://kukufm.com/",
      summary: "India's leading audio platform for audiobooks and podcasts.",
      bullets: [
        "Increased user engagement by 30% with UI redesigns.",
        "Partnered with the CTO on strategic improvements for the dev team.",
        "Implemented new features to boost platform retention."
      ],
      stack: "React, Next.js, Tailwind, Redux, Audio API"
    }
  ],
  skills: {
    languages: ["JavaScript (ES6+)", "TypeScript", "Solidity"],
    frontend: [
      "ReactJS",
      "NextJS",
      "Material UI",
      "Tailwind",
      "Ethers.js",
      "D3.js",
      "Highcharts",
      "React Query",
      "Redux"
    ],
    backend: ["Node.js", "Express.js", "REST APIs", "Microservices", "WebSockets"],
    testing: ["Jest", "React Testing Library", "Mock Server", "Hardhat", "Playwright"],
    database: ["MongoDB", "SQL"],
    infra: ["AWS", "Docker", "GitHub Actions", "CI/CD Pipelines"],
    product: ["Claude AI", "Cursor", "Jira", "Confluence", "Notion", "Draw.io", "Git"],
    tools: ["Ethers.js", "Wallet Integrations", "Smart Contract Interaction", "DeFi Frontends"]
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
      school: "Harcourt Butler Technical University, Kanpur",
      degree: "Master of Computer Applications",
      period: "Oct 2022 - Oct 2024"
    },
    {
      school: "Mangalayatan University, Aligarh",
      degree: "Master of Computer Applications",
      period: "Oct 2022 - Oct 2024"
    },
    {
      school: "Integral University, Lucknow",
      degree: "BCA",
      period: "Jan 2017 - Jan 2020"
    }
  ]
};
