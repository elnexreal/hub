import { repo } from "../lib/interfaces"

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request): Promise<Response> {
	const res = await fetch('https://api.github.com/users/elnexreal/repos', {
		headers: {
			"Authorization": `Bearer ${process.env.AUTH_TOKEN}`
		},
	})
	const data: Array<repo> = await res.json()

	return Response.json({ data })
}
