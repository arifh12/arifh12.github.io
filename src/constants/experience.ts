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
        "Developed full-stack web applications and RESTful APIs across multiple microservices within the OnStar domain using Java, Kotlin, Spring Boot, React, TypeScript, and Tailwind CSS, serving over 1 million daily user requests.",
        "Migrated 6 applications from PCF on-prem to Microsoft Azure cloud and databases from Oracle to PostgreSQL using Liquibase and Ora2Pg, increasing system scalability and reliability.",
        "Implemented CI/CD pipelines using Jenkins, GitHub Actions, Docker, Kubernetes, Helm, and Argo CD, automating the build, test, and deployment process.",
        "Created automated test suites using JUnit, Jest, Cucumber, Postman, and Insomnia, achieving over 90% test coverage and significantly reducing defects.",
        "Established observability and monitoring for applications using Grafana, Dynatrace, Azure Monitor, SiteScope, and OpenTelemetry, enhancing system reliability and enabling proactive incident management.",
        "Enhanced backend performance by upgrading to Spring Boot 2.7 and Java 17, configuring CircuitBreakers for resiliency, implementing Redis caching, and refactoring code and SQL queries, achieving 70% faster response times.",
      ],
    },
    {
      position: "Software Engineering Intern",
      company: "Flagstar Bank",
      companyImage: fbLogo,
      start: "May 2021",
      end: "August 2021",
      responsibilities: [
        "Developed a Spring Boot application for the MyLoans teams to demonstrate the process of connecting and storing data to AWS (Amazon Web Services) PostgreSQL, supporting their transition to the cloud.",
        "Actively engaged in the Agile/SCRUM development process, participating in daily stand-ups, sprint plannings, and retrospectives to foster team collaboration and project alignment, utilizing Jira for task management.",
        "Executed manual and automated Selenium test cases for new features, documenting bug reproduction steps to facilitate effective resolution and improve overall software quality.",
      ],
    },
  ];

  export default experience;
  export type { Experience };
