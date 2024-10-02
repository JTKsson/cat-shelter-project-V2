import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export const SignOutButton = () => {
	const router = useRouter();

	const signout = async () => {
		const supabase = createClient();

		const { error } = await supabase.auth.signOut();
		if (error) {
			console.log(error);
		}

		console.error(error);

		router.push("/");
	};

	return (
		<>
			<button onClick={signout}>Sign out</button>
		</>
	);
};
