  import gmLogo from "../assets/gm-logo.svg";
  import fbLogo from "../assets/flagstar-bank-logo.svg";

  type Experience = {
    position: string;
    company: string;
    companyImage: string;
    start: string;
    end: string;
    responsibilities: string[];
  };

  const experience: Experience[] = [
    {
      position: "Software Engineer",
      company: "General Motors",
      companyImage: gmLogo,
      start: "June 2022",
      end: "September 2024",
      responsibilities: [
        "Designed and developed RESTful APIs across 5 microservices using Java, Kotlin, and the Spring Boot framework.",
        "Implemented internal UI application using React, TypeScript, TailwindCSS, and DaisyUI.",
        "Composed automated unit, integration, contract, and end-to-end test suites to maintain over 90% code coverage.",
        "Supported the migration of 6 applications from PCF on-prem to Azure cloud and databases from Oracle to PostgreSQL.",
        "Troubleshooted bugs and incidents using Dynatrace, Kibana, Grafana, and Azure Insights.",
      ],
    },
    {
      position: "Software Engineering Intern",
      company: "Flagstar Bank",
      companyImage: fbLogo,
      start: "May 2021",
      end: "August 2021",
      responsibilities: [
        "Supported the software development team in maintaining and improving the MyLoans application.",
        "Regularly participated in the Agile/SCRUM software development process.",
        "Developed APIs using the Spring Boot framework with AWS PostgreSQL integration.",
        "Conducted QA testing to ensure that newly developed features performed as intended.",
      ],
    },
  ];

  export default experience;
  export type { Experience };
