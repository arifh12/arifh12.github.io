import { FaGraduationCap } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import HighlightSpan from "./HighlightSpan";
import RevealContainer from "./RevealContainer";
import { Link } from "@nextui-org/react";

const AboutSection = () => {
	return (
		<section id="about" className="px-4 pt-20">
			<div className="">
				<h2 className="text-3xl font-semibold mb-2">🌱 About Me</h2>
				<div className="flex flex-col md:flex-row gap-5">
					<div className="basis-3/5 flex-1">
						<RevealContainer>
							<p>
								Hello! I'm Arif Hasan, a{" "}
								<HighlightSpan>
									highly motivated software engineer{" "}
								</HighlightSpan>
								dedicated to transforming innovative ideas into impactful
								software solutions. With a solid foundation in{" "}
								<HighlightSpan>full-stack development</HighlightSpan>, I have
								professional experience designing and implementing software
								across frontend, backend, and cloud technologies that meet or
								exceed client requirements.
							</p>
						</RevealContainer>
						<br />
						<RevealContainer>
							<p>
								I'm always eager to{" "}
								<HighlightSpan>tackle new challenges</HighlightSpan>, and my
								curiosity drives me to continuously learn and grow in this
								ever-evolving field. I love{" "}
								<HighlightSpan>
									experimenting with new technologies
								</HighlightSpan>{" "}
								and make it a priority to incorporate them into every project I
								take on.
							</p>
						</RevealContainer>
						<br />
						<RevealContainer>
							<p>
								When I'm not tinkering with my latest project, you can find me
								at the gym, playing soccer, gaming, or watching sports!
							</p>
						</RevealContainer>
					</div>
					<div className="basis-1/4 flex-1 flex flex-col justify-between gap-4">
						<RevealContainer>
							<div>
								<h3 className="text-2xl flex items-center gap-2 font-semibold mb-2">
									<FaGraduationCap size={30} className="text-primary" />
									Education
								</h3>
								<h4 className="text-xl font-semibold">
									Wayne State University
								</h4>
								<p className="text-default-500">
									B.S. in Computer Science
									<br />
									Minor in Mathematics
								</p>
							</div>
						</RevealContainer>
						<RevealContainer>
							<div>
								<h3 className="text-2xl flex items-center gap-2 font-semibold mb-2">
									<MdWorkspacePremium size={30} className="text-primary" />
									Certification
								</h3>
								<h4 className="text-xl font-semibold">
									C)ISSO: Certified Information Systems Security Officer
								</h4>
								<p className="text-default-500">
									Issued by Mile2
									<br />
									Obtained on 12/18/2021
									<br />
									<Link
										href="https://1drv.ms/b/c/34f9347078febfc1/EVSs5t0P0WFEvKqKR8tZfO0BniO1dKNInMJ4P1C30fHVgg?e=3tjWhC"
										target="_blank"
										underline="hover"
										showAnchorIcon
									>
										View
									</Link>
								</p>
							</div>
						</RevealContainer>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
