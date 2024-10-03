import { NextUIProvider } from "@nextui-org/react";
import Header from "./components/Header";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

function App() {
	return (
		<NextUIProvider>
			<NextThemesProvider attribute="class" defaultTheme="dark">
				<Header />
				<main className="flex flex-col mx-auto max-w-screen-lg">
					<HeroSection/>
					<AboutSection />
					<ExperienceSection />
					<SkillsSection />
					<ProjectsSection />
					<ContactSection />
				</main>
			</NextThemesProvider>
		</NextUIProvider>
	);
}

export default App;
