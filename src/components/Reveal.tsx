import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const Reveal = ({ children }: Props) => {
	const item = {
		hidden: { opacity: 0, y: 75 },
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
			<motion.div variants={item}>{children}</motion.div>
		</div>
	);
};

export default Reveal;
