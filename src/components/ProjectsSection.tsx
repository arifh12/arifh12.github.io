import ProjectCard from "./ProjectCard";
import projects from "../constants/projects";

const ProjectsSection = () => {
	return (
		<section id="projects" className="px-4 pt-20">
			<h2 className="text-3xl font-semibold mb-5">🚀 Projects</h2>
			<div className="flex flex-col md:flex-row flex-wrap gap-12">
				{projects.map((project, i) => <ProjectCard key={i} {...project} fadeDirection={i%2==0? "left":"right"} />)}
			</div>
		</section>
	);
};

export default ProjectsSection;
