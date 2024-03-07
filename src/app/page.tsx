"use client"

import { repo, response } from "./lib/interfaces";
import { useEffect, useState } from "react"
import Repo from "./repo";
import fetchApi from "./lib/fetchApi";

export default function Home() {
	const currentYear = new Date().getFullYear();
	const birthYear = 2007;
	const yearsOld = currentYear - birthYear;

	const [loaded, setLoaded] = useState(false)
	const [repos, setRepos] = useState<Array<repo>>([])

	const apiUrl = "https://api.github.com/users/elnexreal/repos"
	// const apiUrl = "https://65e7b9bc53d564627a8f2f0e.mockapi.io/api/array"

	useEffect(() => {
		fetch("/fetchRepos", {
			method: "GET"
		})
			.then(res => res.json())
			.then((ret: response) => {
				setRepos(ret.data)
			})

		setLoaded(true)
	}, [])

	return (
		<>
			<div className="flex flex-col gap-8 m-10 md:m-20">
				<div className="font-Kodemono">
					<h1 className="text-5xl md:text-7xl">
						elnexreal's hub
					</h1>
					<h6 className="text-base md:text-xl">
						Welcome to my website
					</h6>
				</div>

				<p className="text-lg md:text-2xl">
					Im a {yearsOld} years old student that likes music production, programming & graphic design.
				</p>

				<hr />

				<div id="projects" className="flex flex-col items-center gap-4">
					<span className="text-3xl md:text-5xl">GitHub repositories</span>
					<div className="flex flex-wrap justify-center gap-8 md:flex-row">
						{loaded ? repos.map((repo, index) => <Repo key={index} {...repo} />) : <span>Loading</span>}
					</div>
				</div>
			</div>
		</>
	)
}
