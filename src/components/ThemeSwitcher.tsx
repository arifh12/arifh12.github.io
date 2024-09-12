import {useTheme} from "next-themes";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "../assets/MoonIcon";
import {SunIcon} from "../assets/SunIcon";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Switch
      defaultSelected
      size="md"
      color="default"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onChange={() => setTheme(theme === "light" ? "dark" : "light")}
    />
  )
};