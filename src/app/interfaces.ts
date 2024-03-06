export default interface repo extends Object {
	name: string
	language: string | null
	html_url: string
	stargazers_count: number
	forks: number
	fork: boolean
}
