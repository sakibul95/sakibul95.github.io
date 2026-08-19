export const expertise = [
  {
    title: "Backend",
    items: [
      "C# / .NET & .NET Core",
      "ASP.NET Core · REST APIs · WCF",
      "CQRS, Repository & Multi-Layered Architecture",
      "Multitenant system design",
      "Java / Spring Boot, Python",
    ],
  },
  {
    title: "Data & Performance",
    items: [
      "SQL Server, MySQL, Oracle · T-SQL",
      "MongoDB & Redis caching",
      "Entity Framework Core, Dapper, NHibernate",
      "Query optimization & ETL pipelines",
      "Azure Service Bus & parallel processing",
    ],
  },
  {
    title: "Frontend & Delivery",
    items: [
      "Next.js, React, Blazor, Angular",
      "Legacy-to-web modernization",
      "Third-party & payment gateway integration",
      "Azure DevOps, Git, Jira",
      "Agile/Scrum delivery & code review",
    ],
  },
] as const;

export const stats = [
  { value: "7.5+", label: "Years in enterprise software" },
  { value: "25+", label: "Enterprise systems delivered" },
  { value: "80%", label: "Legacy system's performance gain" },
  { value: "5", label: "Companies · cross-functional teams led" },
] as const;

export const techStack = [
  "C# / .NET Core",
  "ASP.NET Core",
  "SQL Server",
  "Entity Framework Core",
  "Dapper",
  "Redis",
  "MongoDB",
  "Azure Service Bus",
  "Next.js",
  "Blazor",
] as const;
