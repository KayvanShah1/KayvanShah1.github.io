import { Button } from "@/components/ui/button";
import { SOURCE_CODE_GITHUB_URL } from "@/config/site";

import { Icons } from "@/components/icons";

export function NavItemGitHub() {
	return (
		<Button variant="outline" size="icon" asChild className="rounded-full">
			<a href={SOURCE_CODE_GITHUB_URL} target="_blank" rel="noopener">
				<Icons.github />
				<span className="sr-only">GitHub</span>
			</a>
		</Button>
	);
}
