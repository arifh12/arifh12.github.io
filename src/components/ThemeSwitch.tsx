import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
	const getInitialTheme = () => {
		const storedTheme = localStorage.getItem("theme")
		return storedTheme ? storedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
	}

	const [darkMode, setDarkMode] = useState(getInitialTheme);
	const { setTheme } = useTheme();

	useEffect(() => {
    const newTheme = darkMode ? "dark" : "light"
		setTheme(newTheme);
    localStorage.setItem("theme", newTheme)
	}, [darkMode]);

	return (
		<div className="">
			<Button onClick={() => setDarkMode(prev => !prev)} isIconOnly radius="full" size="sm" variant="light" aria-label="Toggle Dark Mode">
				{darkMode ? <BsMoon size={20} /> : <BsSun size={20} /> }
			</Button>
		</div>
	);
};

export default ThemeSwitch;
