import Link from "next/link";
import { usePathname } from "next/navigation";
import Styles from "../Header.module.scss";

const navItems = {
	"/": {
		name: "Home",
	},
	"/vacant-cats": {
		name: "Vacant Cats",
	},
	"/info": {
		name: "Info",
	},
	"/about": {
		name: "About",
	},
	"/contact": {
		name: "Contact",
	},
};

export const NavMenu = () => {
	const pathname = usePathname() || "/";

	return (
		<div className={Styles.navMenu}>
			{Object.entries(navItems).map(([path, { name }]) => {
				const isActive = path === pathname;
				// const active = isActive ? black : inherit;
				return (
					<Link key={path} href={path}>
						<p style={{ color: isActive ? "black" : "inherit" }}>{name}</p>
					</Link>
				);
			})}
		</div>
	);
};
