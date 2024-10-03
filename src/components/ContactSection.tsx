import React from "react";
import Socials from "./Socials";
import { delay, motion } from "framer-motion";
import Reveal from "./Reveal";

type Props = {};

const ContactSection = (props: Props) => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	return (
		<motion.section
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			id="contact"
			className="px-4 my-36 max-w-3xl mx-auto text-center"
		>
			<Reveal>
				<h2 className="text-5xl font-semibold mb-5">Contact</h2>
			</Reveal>

			<Reveal>
				<p className="mb-7">
					Thanks for stopping by! Whether you have any questions or just want to
					say hi, feel free to reach out to me and{" "}
					<span className="text-primary">let's connect!</span>
				</p>
			</Reveal>
			<Reveal>
				<div className="w-fit mx-auto">
					<Socials />
				</div>
			</Reveal>
		</motion.section>
	);
};

export default ContactSection;
