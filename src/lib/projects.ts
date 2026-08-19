import type { ProjectVisualKey } from "@/components/project-visuals";

export type Project = {
  slug: string;
  title: string;
  company: string;
  tagline: string;
  description: string;
  visual: ProjectVisualKey;
  technologies: string[];
  year: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "iof-management-system",
    title: "IOF Management System",
    company: "B-Trac Solutions Ltd.",
    tagline: "BTRC-compliant billing & revenue platform",
    description:
      "A billing and interconnection-offset management platform rebuilt for reliability, streamlining transaction processing under strict BTRC regulatory guidelines.",
    visual: "billing",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "Redis"],
    year: "2025",
    highlights: [
      "Streamlined billing operations and transaction reconciliation",
      "Brought the platform in line with BTRC regulatory guidelines",
      "Improved transaction reliability across high-volume billing runs",
    ],
  },
  {
    slug: "energy-monitoring-system",
    title: "Energy Monitoring System",
    company: "B-Trac Solutions Ltd.",
    tagline: "Real-time solar & power-grid monitoring",
    description:
      "An automated monitoring system for solar inverters and power grids, giving operations teams live visibility into generation, load and network health.",
    visual: "energy",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "Next.js"],
    year: "2025",
    highlights: [
      "Automated data collection from solar inverters and grid endpoints",
      "Improved operational visibility for power-monitoring teams",
      "Increased network reliability through proactive monitoring",
    ],
  },
  {
    slug: "core-monitoring-system",
    title: "CoreMonitoring System",
    company: "Link3 Technologies Ltd.",
    tagline: "Automated OLT / PON / ONU network monitoring",
    description:
      "A monitoring platform that tracks OLT, PON and ONU network equipment in real time, catching faults early and keeping client-facing uptime high across the ISP network.",
    visual: "network",
    technologies: ["C#", ".NET Core", "Azure Service Bus", "SQL Server"],
    year: "2023 – 2025",
    highlights: [
      "Automated health checks across OLT, PON and ONU infrastructure",
      "Raised client satisfaction through faster fault detection",
      "Streamlined service-to-service communication with Azure Service Bus",
    ],
  },
  {
    slug: "iptsp-payment-management",
    title: "IPTSP Payment Management System",
    company: "Link3 Technologies Ltd.",
    tagline: "Telecom billing & payment reliability",
    description:
      "A payment and billing management system for IPTSP operations, optimized for transaction reliability and streamlined reconciliation at ISP scale.",
    visual: "billing",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "Redis"],
    year: "2023 – 2025",
    highlights: [
      "Enhanced transaction reliability across high-volume billing cycles",
      "Integrated third-party vendor APIs (CDATA, VSOL, Hydra) to extend capabilities",
      "Modernized legacy desktop billing tools into web-based workflows",
    ],
  },
  {
    slug: "operator-commerce-platform",
    title: "Operator Commerce Platform",
    company: "VU Mobile Ltd.",
    tagline: "Payment & ad-network integrations for telecom VAS",
    description:
      "Portals, CRM and CMS systems built for mobile operator partners, with integrated payment gateways and ad-network APIs powering monetization for VAS products.",
    visual: "commerce",
    technologies: ["ASP.NET Core", "Web API", "T-SQL", "SQL Server"],
    year: "2022 – 2023",
    highlights: [
      "Integrated bKash, Banglalink and GrameenPhone payment APIs",
      "Connected Admaven, Evadev and Bidvertiser ad-network APIs to boost monetization",
      "Delivered complex T-SQL reporting for operator partners",
    ],
  },
  {
    slug: "ez2count-erp",
    title: "EZ2Count — Inventory & Accounts ERP",
    company: "InitVent Consulting Services Ltd.",
    tagline: "Government inventory & accounts ERP",
    description:
      "An Inventory + Accounts ERP built for a Myanmar Government project, spanning a C#/WCF backend, a CanJS/jQuery web client and a companion Android app.",
    visual: "erp",
    technologies: ["C#", ".NET", "WCF", "CanJS", "Android"],
    year: "2019 – 2021",
    highlights: [
      "Led end-to-end development of a government inventory & accounts platform",
      "Shipped a companion Android app alongside the web client",
      "Delivered under Agile-Scrum practices in direct collaboration with government stakeholders",
    ],
  },
];
