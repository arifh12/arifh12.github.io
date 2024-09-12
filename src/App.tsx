import { NextUIProvider } from "@nextui-org/react";
import Header from "./components/Header";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
	return (
		<NextUIProvider>
			<NextThemesProvider attribute="class" defaultTheme="dark">
				<Header />
				<main className="flex flex-col m-auto max-w-screen-lg" style={{"marginInline":"auto"}}>
					<Hero/>
					<About />
					<Skills />
				</main>
			</NextThemesProvider>
		</NextUIProvider>
	);
}

export default App;
