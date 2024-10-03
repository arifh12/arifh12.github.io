import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem("theme") == "dark"
	);
	const { setTheme } = useTheme();

	useEffect(() => {
    const newTheme = darkMode ? "dark" : "light"
		setTheme(newTheme);
    localStorage.setItem("theme", newTheme)
	}, [darkMode]);

	return (
		<div className="">
			<Button onClick={() => setDarkMode(prev => !prev)} isIconOnly radius="full" size="sm" variant="light">
				{darkMode ? <BsMoon size={20} /> : <BsSun size={20} /> }
			</Button>
		</div>
	);
};

export default ThemeSwitch;
