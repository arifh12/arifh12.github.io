  import gmLogo from "../assets/gm-logo.svg";
  import fbLogo from "../assets/flagstar-bank-logo.svg";
  import mmLogo from "../assets/may-mobility-logo.svg"

  type Experience = {
    position: string;
    company: string;
    companyImage: string;
    start: string;
    end: string;
    responsibilities?: string[];
  };

  const experience: Experience[] = [
    {
      position: "DevOps Engineer",
      company: "May Moblility",
      companyImage: mmLogo,
      start: "December 2024",
      end: "Present",
    },
    {
      position: "Software Engineer",
      company: "General Motors",
      companyImage: gmLogo,
      start: "June 2022",
      end: "September 2024",
    },
    {
      position: "Software Engineering Intern",
      company: "Flagstar Bank",
      companyImage: fbLogo,
      start: "May 2021",
      end: "August 2021",
    },
  ];

  export default experience;
  export type { Experience };
