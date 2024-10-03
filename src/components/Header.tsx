import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
} from "@nextui-org/react";
import ThemeSwitch from "./ThemeSwitch.js";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const menuItems = [
		"Home",
		"About",
		"Experience",
		"Skills",
		"Projects",
		"Contact",
	];

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			isBordered
			maxWidth="xl"
			className="fixed top-0"
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand className="cursor-pointer select-none">
					<a className="font-semibold text-3xl" href="#">
						<span className="text-default-400">{"{"}</span>A
						<span className="text-default-400">{"}"}</span>
					</a>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-8" justify="center">
				{menuItems.map((item, i) => (
					<NavbarItem key={i}>
						<Link
							color="foreground"
							href={item == "Home" ? "#" : `#${item.toLowerCase()}`}
						>
							{item}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={"foreground"}
							className="w-full"
							href={item == "Home" ? "#" : `#${item.toLowerCase()}`}
							size="lg"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
};

export default Header;
