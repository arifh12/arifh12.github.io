import icon from "../assets/timer-icon.png"
import skillsJson from "../assets/skills.json"

type Props = {}

const Skills = (props: Props) => {
  return (
    <section id="skills" className="px-6">
      <h1 className="text-3xl text-center">Skills</h1>
			<div className="">
				<div className="flex flex-wrap justify-center">
          {skillsJson.map(element => <img src={element.icon} className="w-24 mx-10"/>)}
        </div>
			</div>
		</section>
  )
}

export default Skills