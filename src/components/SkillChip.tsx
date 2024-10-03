import { Skill } from "../constants/skills"
import Reveal from "./Reveal"

type Props = Skill

function SkillChip({name, icon: IconType}: Props) {
  return (
    
    <Reveal>
      <div className="text-xl flex gap-2 items-center px-4 py-2 rounded-lg bg-default-50">
        <IconType />
        <p className="">{name}</p>
      </div>
    </Reveal>
  )
}

export default SkillChip