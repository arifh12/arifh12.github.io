import unipool from "../assets/unipool.png"
import quizzical from "../assets/quizzical.png"
import vividCinemas from "../assets/vivid-cinemas.png"
import quizzer from "../assets/quizzer.png"
import exterminator from "../assets/exterminator.png"
import cLikeCompiler from "../assets/c-like-compiler.png"
import foodDistributor from "../assets/food-distributor.png"
import sunsetImages from "../assets/sunset-images.png"
import androidProjects from "../assets/android-projects.png"
import movieDb from "../assets/movie-db.png"

type Project = {
  title: string,
  image: string,
  description: string,
  tags: string[],
  githubUrl: string,
  demoUrl?: string
}

const projects: Project[] = [
  {
    title: "UniPool",
    image: unipool,
    description: "Cross-platform mobile app allowing university students to carpool with one another as a way to reduce carbon emissions, socialize, and save money!",
    tags: ["JavaScript", "CSS", "NoSQL", "React Native", "Firebase", "Google Maps SDK", "Figma"],
    githubUrl: "https://github.com/arifh12/UniPool",
    demoUrl: undefined
  },
  {
    title: "Sunset Images",
    image: sunsetImages,
    description: "A J2EE web application that mimics the functionalities of a social media website, where users are able to post images and interact with one another.",
    tags: ["Java", "J2EE", "JSP", "HTML", "CSS", "SQL", "MySQL", "Tomcat"],
    githubUrl: "https://github.com/arifh12/CSC4710FinalProject",
    demoUrl: undefined
  },
  {
    title: "C-Like Compiler",
    image: cLikeCompiler,
    description: "Designed and built a C-like compiler using Flex scanner, Bison parser, and C++ for generating and pretty-printing the Abstract Syntax Tree (AST).",
    tags: ["C++", "Flex", "Bison"],
    githubUrl: "https://github.com/arifh12/C-Like-Compiler",
    demoUrl: undefined
  },
  {
    title: "WSU Inc. Food Distribution",
    image: foodDistributor,
    description: "Data management application for a wholesale company with features to manage inventory, customers, and orders.",
    tags: ["Java", "SQL", "JavaFX", "MySQL", "SceneBuilder"],
    githubUrl: "https://github.com/arifh12/FoodDistributor",
    demoUrl: undefined
  },
  {
    title: "Exterminator",
    image: exterminator,
    description: "An endless 3D top-down zombie shooter developed using the Unity Engine and human-computer interaction concepts.",
    tags: ["C#", "Unity Engine", "HCI"],
    githubUrl: "https://github.com/arifh12/Exterminator",
    demoUrl: undefined
  },
  {
    title: "Quizzical",
    image: quizzical,
    description: "Quiz app created using ReactJS, responsive web design, and the Open Trivia DB API.",
    tags: ["JavaScript", "CSS", "React"],
    githubUrl: "https://github.com/arifh12/Quizzical",
    demoUrl: "https://arifh12.github.io/Quizzical"
  },
  {
    title: "Movie Database",
    image: movieDb,
    description: "A full-stack Laravel application for managing a movie database.",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "SQL", "Laravel", "Oracle"],
    githubUrl: "https://github.com/arifh12/MovieDB",
    demoUrl: undefined
  },
  {
    title: "Android Mini Projects",
    image: androidProjects,
    description: "Check out some of the mini Android projects that I have developed, showcasing my knowledge of the fundamentals.",
    tags: ["Java", "XML", "Android Studio"],
    githubUrl: "https://github.com/arifh12/AndroidProjects",
    demoUrl: undefined
  },
  {
    title: "Vivid Cinemas",
    image: vividCinemas,
    description: "My very first website of a (fictional) movie theater, Vivid Cinemas, demonstrating my understanding of the fundamentals of web design.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/arifh12/VividCinemas",
    demoUrl: "https://arifh12.github.io/VividCinemas"
  },
  {
    title: "Quizzer",
    image: quizzer,
    description: "Test your trivia knowledge! Quizzer is a trivia application built using Python's Tkinter GUI framework and the Open Trivia DB API.",
    tags: ["Python", "Tkinter"],
    githubUrl: "https://github.com/arifh12/Quizzer",
    demoUrl: undefined
  }
];

export default projects;
export type {Project}
