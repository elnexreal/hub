"use client"

import { FaCircle } from "react-icons/fa6"
import { repo } from "../lib/interfaces";
import { GoRepo, GoRepoForked, GoStar } from "react-icons/go"

export default function Repo({ data, staggerId }: { data: repo, staggerId: number }) {
	return (
		<a href={data.html_url} className="animate-repoCardEnter opacity-0" style={{ animationDelay: `${staggerId * 0.03}s` }}>
			<div className="flex flex-col group-hover:scale-95 ease-in-out duration-300">
				<div className="flex flex-row justify-center items-center gap-1 bg-stone-800 group-hover:bg-stone-700 ease-in-out duration-300 p-2 rounded-t-xl text-lg md:p-4 md:text-2xl">
					{data.fork ? <GoRepoForked /> : <GoRepo />}
					<span className="text-white">{data.name}</span>
				</div>
				<div className="text-black/50 bg-white grid grid-cols-2 grid-rows-2 gap-x-4 rounded-b-xl p-2 text-xl md:p-4 md:text-2xl">
					<div className="flex flex-row items-center gap-1">
						<GoStar />
						<span>{data.stargazers_count}</span>
					</div>
					<div className="flex flex-row items-center gap-1">
						<GoRepoForked />
						<span>{data.forks}</span>
					</div>
					{data.fork ?
						<></>
						:
						<div className="flex flex-row items-center gap-1">
							<FaCircle color={getLangColor(data.language)} />
							<span>{data.language ? data.language : "Unknown"}</span>
						</div>}
				</div>
			</div>
		</a>
	)
}

function getLangColor(lang: string | null) {
	if (!lang) {
		return "#7F7F7F"
	}

	switch (lang?.toLowerCase()) {
		case "html":
			return "#FF5733"
		case "javascript":
			return "#F7DF1E"
		case "python":
			return "#3572A5"
		case "java":
			return "#5382A1"
		case "ruby":
			return "#701516"
		case "php":
			return "#4F5D95"
		case "c#":
			return "#178600"
		case "cmake":
			return "#DA3434"
		case "c++":
			return "#F34B7D"
		case "c":
			return "#555555"
		case "rust":
			return "#DEA584"
		case "sql":
			return "#E38D8D"
		case "typescript":
			return "#2F74C0"
		case "assembly":
			return "#6E4C13"
		default:
			return "#7F7F7F" // gray color
	}
}
