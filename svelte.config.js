import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},
		prerender: {
			entries: ["/", "/projects/bella_sekai", "/projects/flashcard", "/projects/schedule_emloyees", "/projects/twitter_alarm"]
		}
	}
};

export default config;