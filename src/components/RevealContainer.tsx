import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const RevealContainer = ({ children }: Props) => {
	const variant = {
		hidden: { opacity: 0, y: 45 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
			},
		},
	};

	return (
		<div className="overflow-hidden">
			<motion.div
				variants={variant}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				{children}
			</motion.div>
		</div>
	);
};

export default RevealContainer;
