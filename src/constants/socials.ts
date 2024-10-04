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
    url: "https://1drv.ms/w/c/34f9347078febfc1/EchIOoUHOu1NkR1huvnMefEBL44gHhCMKLjF5Bxe87BwrA?e=4ToVAc"
  }
]

export default socials
