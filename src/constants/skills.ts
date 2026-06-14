import { IconType } from "react-icons"
import { FaJava } from "react-icons/fa"
import { SiApachekafka, SiCss, SiDocker, SiFirebase, SiGit, SiHtml5, SiJavascript, SiJenkins, SiK6, SiKotlin, SiKubernetes, SiLaravel, SiMysql, SiPhp, SiPostgresql, SiPython, SiR, SiReact, SiRedis, SiSpring, SiTailwindcss, SiTypescript } from "react-icons/si"
import { FaMasksTheater } from "react-icons/fa6";
import { TbBrandCSharp, TbBrandAzure } from "react-icons/tb";
import { GrOracle } from "react-icons/gr";

type Skill = {
  name: string,
  icon: IconType
}

const skills : Skill[] = [
  {
    name: "Java",
    icon: FaJava
  },
  {
    name: "HTML",
    icon: SiHtml5
  },
  {
    name: "CSS",
    icon: SiCss
  },
  {
    name: "JavaScript",
    icon: SiJavascript
  },
  {
    name: "TypeScript",
    icon: SiTypescript
  },
  {
    name: "Python",
    icon: SiPython
  },
  {
    name: "Kotlin",
    icon: SiKotlin
  },
  {
    name: "R",
    icon: SiR
  },
  {
    name: "C#",
    icon: TbBrandCSharp
  },
  {
    name: "PHP",
    icon: SiPhp
  },
  {
    name: "Spring Boot",
    icon: SiSpring
  },
  {
    name: "React",
    icon: SiReact
  },
  {
    name: "React Native",
    icon: SiReact
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss
  },
  {
    name: "Laravel",
    icon: SiLaravel
  },
  {
    name: "Playwright",
    icon: FaMasksTheater
  },
  {
    name: "K6",
    icon: SiK6
  },
  {
    name: "Kafka",
    icon: SiApachekafka
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql
  },
  {
    name: "Oracle",
    icon: GrOracle
  },
  {
    name: "MySQL",
    icon: SiMysql
  },
  {
    name: "Redis",
    icon: SiRedis
  },
  {
    name: "Firebase",
    icon: SiFirebase
  },
  {
    name: "Docker",
    icon: SiDocker
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes
  },
  {
    name: "Azure",
    icon: TbBrandAzure
  },
  {
    name: "Jenkins",
    icon: SiJenkins
  },
  {
    name: "Git",
    icon: SiGit
  },
]

export default skills 
export type {Skill}