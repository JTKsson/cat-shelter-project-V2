import { createClient } from "@/utils/supabase/client";
import { AuthError, User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
const supabase = createClient();

export const useUser = () => {
	const [user, setUser] = useState<User | null>(null);
	const [error, setError] = useState<AuthError | null>(null);
	// const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchUser = async () => {
			const {
				data: { user },
				error,
			} = await supabase.auth.getUser();
			setUser(user);
			setError(error);
			// setLoading(false);
		};

		fetchUser();
	}, []);

	return { user, error };
};
