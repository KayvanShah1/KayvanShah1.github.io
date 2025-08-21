// src/lib/remark-ultra-rare-mark.ts
import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root, Text, Parent, PhrasingContent } from "mdast";

// mdast doesn't know a "mark" node by default; we define one and
// map it to an HTML <mark> via `data.hName`/`data.hProperties`.
interface MarkNode {
	type: "mark";
	data?: {
		hName?: "mark";
		hProperties?: { className?: string[] };
	};
	children: PhrasingContent[];
}

export const remarkDoublePercentageMark: Plugin<[], Root> = () => {
	return (tree: Root) => {
		visit(tree, "text", (node, index, parent) => {
			const textNode = node as Text;
			const text = textNode.value;

			const regex = /%%(.*?)%%/g;
			let match: RegExpExecArray | null;
			const newNodes: PhrasingContent[] = [];
			let lastIndex = 0;

			while ((match = regex.exec(text)) !== null) {
				// plain text before %%
				if (match.index > lastIndex) {
					newNodes.push({ type: "text", value: text.slice(lastIndex, match.index) });
				}

				// our custom "mark" node (rendered as <mark class="...">...</mark>)
				const markNode: MarkNode = {
					type: "mark",
					data: {
						hName: "mark",
						hProperties: { className: ["text-green-400", "font-bold"] },
					},
					children: [{ type: "text", value: match[1] }],
				};

				newNodes.push(markNode as unknown as PhrasingContent);
				lastIndex = regex.lastIndex;
			}

			// remaining text after the last %%
			if (lastIndex < text.length) {
				newNodes.push({ type: "text", value: text.slice(lastIndex) });
			}

			if (newNodes.length > 0 && parent && typeof index === "number") {
				(parent as Parent).children.splice(index, 1, ...newNodes);
				// returning a new index helps unist-util-visit keep traversal correct
				return index + newNodes.length;
			}
		});
	};
};
