// ✅ Correct imports
import ReactMarkdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import remarkGfm from "remark-gfm";

import { UTM_PARAMS } from "@/config/site";
import { rehypeAddQueryParams } from "@/lib/rehype-add-query-params";

// Works as a Server or Client component (no async component involved)
export function Markdown(props: React.ComponentProps<typeof ReactMarkdown>) {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[
				[rehypeExternalLinks, { target: "_blank", rel: "nofollow noopener noreferrer" }],
				[rehypeAddQueryParams, UTM_PARAMS],
			]}
			{...props}
		/>
	);
}
