import { redirect } from '@sveltejs/kit';

export const load = () => {
	return redirect(303, "https://bellasekai.com");
}