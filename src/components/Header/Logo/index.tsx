import Image from "next/image";
import CatLogo from "./catlogo.png";
import Link from "next/link";
import Styles from "../Header.module.scss";

export const Logo = () => {
	return (
		<Link href='/' className={Styles.logo}>
			<Image src={CatLogo} height={100} width={100} alt='Logo' />
		</Link>
	);
};
