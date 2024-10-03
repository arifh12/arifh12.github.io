import { IconType } from "react-icons"
import { FaJava } from "react-icons/fa"
import { SiApachekafka, SiCsharp, SiCss3, SiDocker, SiFirebase, SiGit, SiHtml5, SiJavascript, SiJenkins, SiK6, SiKotlin, SiKubernetes, SiLaravel, SiMicrosoftazure, SiMysql, SiOracle, SiPhp, SiPlaywright, SiPostgresql, SiPython, SiR, SiReact, SiRedis, SiSpring, SiSpringboot, SiTailwindcss, SiTypescript } from "react-icons/si"

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
    icon: SiCss3
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
    icon: SiCsharp
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
    name: "React/React Native",
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
    icon: SiPlaywright
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
    icon: SiOracle
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
    icon: SiMicrosoftazure
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