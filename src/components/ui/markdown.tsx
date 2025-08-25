// ✅ Correct imports
import ReactMarkdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import remarkGfm from "remark-gfm";

import { UTM_PARAMS } from "@/config/site";
import { rehypeAddQueryParams } from "@/lib/rehype-add-query-params";
import { remarkDoublePercentageMark } from "@/lib/remark-double-per-mark";

// Works as a Server or Client component (no async component involved)
export function Markdown(props: React.ComponentProps<typeof ReactMarkdown>) {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm, remarkDoublePercentageMark]}
			rehypePlugins={[
				[rehypeExternalLinks, { target: "_blank", rel: "nofollow noopener noreferrer" }],
				[rehypeAddQueryParams, UTM_PARAMS],
			]}
			components={{
				// strong: ({ children }) => <span className="font-semibold text-green-400">{children}</span>,
				em: ({ children }) => <span className="text-yellow-400 italic">{children}</span>,
				mark: ({ children }) => <span className="bg-transparent font-bold text-green-400">{children}</span>,
				img: (props) => <img {...props} style={{ display: "inline", margin: 0, verticalAlign: "middle" }} />,
			}}
			{...props}
		/>
	);
}
