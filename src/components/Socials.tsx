import { Button, Link } from "@nextui-org/react";
import socials from "../constants/socials";

const Socials = () => {
	return (
		<div className="flex gap-4 flex-wrap">
			{socials.map((social, i) => (
				<Link key={i} href={social.url} isExternal>
				<Button variant="flat" className="hover:bg-default-200 text-medium font-medium" color="default" radius="sm">
					<social.icon className="text-primary"/> {social.name}
				</Button>
				</Link>
			))}
		</div>
	);
};

export default Socials;
