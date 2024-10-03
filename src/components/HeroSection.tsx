import { motion } from "framer-motion";
import HighlightSpan from "./HighlightSpan";
import Reveal from "./Reveal";
import Socials from "./Socials";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const HeroSection = () => {
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
			className="max-w-screen-lg min-h-screen py-20 flex flex-col justify-center px-4 gap-8"
		>
			<div className="">
				<Reveal>
					<h2 className="text-primary text-2xl md:text-4xl">Hi, there! 👋</h2>
				</Reveal>
				<Reveal>
					<h1 className="text-7xl md:text-8xl lg:text-9xl font-bold">
						I'm Arif Hasan<HighlightSpan>.</HighlightSpan>
					</h1>
				</Reveal>
			</div>
			<div className="text-2xl md:text-4xl font-medium">
				<Reveal>
					<h2>
						A <HighlightSpan>Software Engineer</HighlightSpan> with a passion for
						building innovative software solutions as a profession (and hobby).
					</h2>
				</Reveal>
			</div>
			<div className="text-xl md:text-2xl mt-3">
				<Reveal>
					<p className="">🏡 Based in Warren, Michigan</p>
					<p className="">
						💻 Currently working at <HighlightSpan>General Motors</HighlightSpan>
					</p>
				</Reveal>
			</div>
			<Reveal>
				<Socials />
			</Reveal>
			<div className="absolute left-0 right-0 bottom-4 w-fit mx-auto hover:scale-110 transition ease-in-out cursor-pointer text-gray-500">
				<Reveal>
					<MdOutlineKeyboardDoubleArrowDown
						size={48}
						onClick={() => (window.location.href = "#about")}
					/>
				</Reveal>
			</div>
		</motion.section>
	);
};

export default HeroSection;
