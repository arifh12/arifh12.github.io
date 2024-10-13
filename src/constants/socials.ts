import { IconType } from "react-icons"
import { FaEnvelope, FaFileDownload, FaGithub, FaLinkedinIn } from "react-icons/fa"

type Social = {
  name: string,
  icon: IconType,
  url: string
}

const socials : Social[] = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/arifh12"
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/arifhasan12"
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:arifh167@gmail.com"
  },
  {
    name: "Resume",
    icon: FaFileDownload,
    url: "https://1drv.ms/f/c/34f9347078febfc1/EoyRlr6C7apNjnG2kPpj6PABMvE81i3PDsip2ILU84vIqQ?e=WJRMuq"
  }
]

export default socials
