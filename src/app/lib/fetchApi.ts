"use server"

import { repo } from "./interfaces";

export default async function fetchApi(apiUrl: string): Promise<Array<repo>> {
	let ret: Array<repo> = []

	await fetch(apiUrl, {
		headers: {
			"Authorization": `Bearer ${process.env.AUTH_TOKEN}`
		}
	})
		.then(response => response.json())
		.then((data: Array<repo>) => {
			ret = data
		});

	return ret
}
