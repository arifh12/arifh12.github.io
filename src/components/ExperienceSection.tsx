import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import experienceData from "../constants/experience";
import RevealContainer from "./RevealContainer";

const ExperienceSection = () => {
	return (
		<section id="experience" className="px-4 pt-20">
			<h2 className="text-3xl font-semibold">💼 Experience</h2>
			<RevealContainer>
				<Accordion selectionMode="multiple">
					{experienceData.map((exp, i) => (
						<AccordionItem
							key={i}
							aria-label={`${exp.position} @ ${exp.company}`}
							startContent={
								<Avatar
									color="success"
									radius="sm"
									src={exp.companyImage}
									className="bg-foreground-50"
									imgProps={{ className: "object-contain" }}
								/>
							}
							subtitle={`${exp.start} - ${exp.end}`}
							title={`${exp.position} @ ${exp.company}`}
						>
							<ul className="ms-14 list-[square]">
								{exp.responsibilities.map((resp, i) => (
									<li key={i}>{resp}</li>
								))}
							</ul>
						</AccordionItem>
					))}
				</Accordion>
			</RevealContainer>
		</section>
	);
};

export default ExperienceSection;
