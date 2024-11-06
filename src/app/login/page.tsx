"use client";
import { login, signup } from "@/utils/user/actions";
import Styles from "./login.module.scss";

export default function LoginPage() {
	return (
		<div className={Styles.loginPage}>
			<form className={Styles.loginForm}>
				<label htmlFor='email'>Email:</label>
				<input id='email' name='email' type='email' required />
				<label htmlFor='password'>Password:</label>
				<input id='password' name='password' type='password' required />
				<button formAction={login}>Log in</button>
			</form>
		</div>
	);
}
