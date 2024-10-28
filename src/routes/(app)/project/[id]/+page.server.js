import data from '$lib/json/projects.json';

export function entries() {
	return Object.entries(data.projects).flatMap(([items]) =>
		Array.isArray(items) ? items.map(project => ({ id: project.id })) : []
	);
}

export const prerender = true;