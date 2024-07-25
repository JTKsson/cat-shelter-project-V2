import Image from "next/image";
import CatLogo from "./catlogo.png";
import Link from "next/link";

export const Logo = () => {
	return (
		<Link href='/'>
			<Image src={CatLogo} height={100} width={100} alt='Logotype' />
		</Link>
	);
};
