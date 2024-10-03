import { motion } from "framer-motion";
import skills from "../constants/skills";
import SkillChip from "./SkillChip";

const SkillsSection = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<section id="skills" className="px-4 pt-20">
			<h2 className="text-3xl font-semibold mb-5">⚡ Skills</h2>
			<div className="">
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="flex flex-wrap justify-center gap-3"
				>
					{skills.map((element, i) => (
						<SkillChip key={i} name={element.name} icon={element.icon} />
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default SkillsSection;
