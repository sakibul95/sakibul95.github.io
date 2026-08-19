export type ExperienceType = "On-site" | "Remote" | "Hybrid";

export type Experience = {
  company: string;
  role: string;
  location: string;
  type: ExperienceType;
  isBangladesh: boolean;
  period: { start: string; end: string };
  summary: string;
  achievements: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: "B-Trac Solutions Ltd.",
    role: "Senior Software Engineer (Team Lead)",
    location: "Dhaka, Bangladesh",
    type: "On-site",
    isBangladesh: true,
    period: { start: "Apr 2025", end: "Present" },
    summary:
      "Leading backend engineering for BTRC-regulated billing, ticketing and energy-monitoring platforms while mentoring a cross-functional team.",
    achievements: [
      "Optimized the IOF Management System to streamline billing operations and ensure compliance with BTRC regulatory guidelines",
      "Improved Ticketing System performance by 36%, cutting resolution times and boosting responsiveness",
      "Built an automated Energy Monitoring System for solar inverters and power grids, improving operational visibility and network reliability",
      "Designed Multitenant Architecture, CQRS, Repository and Multi-Layered patterns for scalable, maintainable solutions",
      "Accelerated data retrieval with Redis caching across large-scale SQL and NoSQL workloads",
      "Led a cross-functional engineering team — distributing work, reviewing code and optimizing delivery workflows",
    ],
    tech: ["C#", "ASP.NET Core", "SQL Server", "Redis", "Next.js", "Azure DevOps"],
  },
  {
    company: "Link3 Technologies Ltd.",
    role: "Software Engineer",
    location: "Dhaka, Bangladesh",
    type: "On-site",
    isBangladesh: true,
    period: { start: "May 2023", end: "Mar 2025" },
    summary:
      "Owned billing, network-monitoring and client-facing systems for one of Bangladesh's largest ISPs, while leading a team and modernizing legacy platforms.",
    achievements: [
      "Optimized the IPTSP Payment Management System to streamline billing operations and enhance transaction reliability",
      "Improved Ticketing System performance by 25%, reducing resolution times",
      "Built the CoreMonitoring System, an automated solution monitoring OLT, PON and ONU network infrastructure",
      "Streamlined service-to-service workflows with Azure Service Bus",
      "Implemented parallel programming in .NET Core to optimize computationally intensive tasks",
      "Integrated third-party vendor APIs (CDATA, VSOL, Hydra) and modernized legacy desktop apps into web platforms",
    ],
    tech: ["C#", "ASP.NET Core", "Azure Service Bus", "Redis", "MongoDB", "Blazor"],
  },
  {
    company: "VU Mobile Ltd.",
    role: "Software Engineer",
    location: "Dhaka, Bangladesh",
    type: "On-site",
    isBangladesh: true,
    period: { start: "Jan 2022", end: "Apr 2023" },
    summary:
      "Built monetization and operator-facing platforms integrating mobile payment and ad-network APIs for a telecom VAS provider.",
    achievements: [
      "Integrated payment APIs (bKash, Banglalink, GrameenPhone) and ad-network APIs (Admaven, Evadev, Bidvertiser) to boost monetization",
      "Developed RESTful APIs with ASP.NET Core Web API for mobile-driven services and ERP modules",
      "Built portals, CRM and CMS systems for operator partners, enhancing service delivery",
      "Designed complex T-SQL queries for advanced business reporting",
    ],
    tech: ["ASP.NET Core", "Web API", "T-SQL", "SQL Server"],
  },
  {
    company: "InitVent Consulting Services Ltd.",
    role: "Software Engineer",
    location: "Dhaka, Bangladesh",
    type: "On-site",
    isBangladesh: true,
    period: { start: "Jan 2019", end: "Dec 2021" },
    summary:
      "Delivered government and international ERP systems end-to-end, from requirements analysis through web and Android delivery.",
    achievements: [
      "Led development of EZ2Count, an Inventory + Accounts ERP for a Myanmar Government project, built with C#.NET, WCF, CanJS and Android",
      "Developed an Integrated Microfinance Automation ERP with RESTful APIs (Web API + Android app) for government clients",
      "Delivered Business Plan Financials and ERP solutions (ASP.NET Core + Angular) for international markets",
      "Implemented Agile-Scrum practices and collaborated directly with clients",
    ],
    tech: ["C#", ".NET", "WCF", "ASP.NET Core", "Angular", "T-SQL"],
  },
] as const;
