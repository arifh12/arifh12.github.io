import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import { Chip } from "@nextui-org/react";
import { Project } from "../constants/projects";
import { motion } from "framer-motion";

type Props = Project & { fadeDirection: string };

const ProjectCard = (props: Props) => {
	const rightFadeVariant = {
		hidden: { opacity: 0, x: 75 },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.6,
				delay: 0.2,
			},
		},
	};
	const leftFadeVariant = {
		hidden: { opacity: 0, x: -75 },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.6,
				delay: 0.2,
			},
		},
	};

	return (
		<div className="basis-1/3 flex-1 overflow-hidden">
			<motion.div
				variants={
					props.fadeDirection == "left" ? leftFadeVariant : rightFadeVariant
				}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				className="border-small border-default-100 rounded-xl overflow-hidden h-full"
			>
				<img src={props.image} alt={`Cover image of ${props.title}`}/>
				<div className="p-4">
					<div className="flex justify-between text-xl font-semibold">
						<h3 className="">{props.title}</h3>
						<div className="flex gap-3 align-middle text-2xl">
							<a href={props.githubUrl} target="_blank" aria-label="GitHub repository">
								<FaGithub className="hover:text-primary cursor-pointer" />
							</a>
							{props.demoUrl && (
								<a href={props.demoUrl} target="_blank" aria-label="Live demo">
									<MdLaunch className="hover:text-primary cursor-pointer" />
								</a>
							)}
						</div>
					</div>
					<div className="flex flex-wrap gap-1 my-1">
						{props.tags.map((tag, i) => (
							<Chip key={i} variant="flat" radius="sm" size="sm">
								{tag}
							</Chip>
						))}
					</div>
					<hr className="border-default-100 mt-2 mb-1" />
					<p>{props.description}</p>
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectCard;
