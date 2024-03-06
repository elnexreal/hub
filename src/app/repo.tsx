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
