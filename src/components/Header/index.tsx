"use client";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";
import Styles from "./Header.module.scss";

export const Header = () => {
	return (
		<div className={Styles.header}>
			<Logo />
			<NavMenu />
		</div>
	);
};
