import { Button } from "@/components/ui/button";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import {
	BriefcaseBusiness,
	Check,
	CornerDownLeft,
	Download,
	Link as LinkIcon,
	MoonStar,
	Rss,
	Sun,
	User,
} from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

/* ---------- Types ---------- */
type CommandLinkItem = {
	title: string;
	href: string;
	keywords?: string[];
	openInNewTab?: boolean;
	icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type CommandKind = "command" | "page" | "link";

/* ---------- Example data (tweak to your portfolio) ---------- */
const MENU_LINKS: CommandLinkItem[] = [
	{ title: "Home", href: "/", icon: LinkIcon },
	{ title: "Blog", href: "/blog", icon: Rss },
];

const PORTFOLIO_LINKS: CommandLinkItem[] = [
	{ title: "About", href: "/#about", icon: User },
	{ title: "Experience", href: "/#experience", icon: BriefcaseBusiness },
	{ title: "Education", href: "/#education", icon: LinkIcon },
	{ title: "Projects", href: "/#projects", icon: LinkIcon },
	{ title: "Contact", href: "/#contact", icon: LinkIcon },
];

const SOCIAL_LINKS: CommandLinkItem[] = [
	{ title: "LinkedIn", href: "https://linkedin.com/in/your-handle", openInNewTab: true, icon: LinkIcon },
	{ title: "GitHub", href: "https://github.com/your-handle", openInNewTab: true, icon: LinkIcon },
	{ title: "X / Twitter", href: "https://x.com/your-handle", openInNewTab: true, icon: LinkIcon },
];

/* ---------- Theme helpers (safe for SSR) ---------- */
function setTheme(theme: "light" | "dark" | "system") {
	if (typeof window === "undefined") return;
	if (theme === "system") {
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		document.documentElement.classList.toggle("dark", prefersDark);
		localStorage.setItem("theme", "system");
	} else {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}
}
function getResolvedTheme(): "light" | "dark" {
	if (typeof window === "undefined") return "light";
	const stored = localStorage.getItem("theme");
	if (stored === "dark") return "dark";
	if (stored === "light") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/* ---------- Footer enter hint ---------- */
const ENTER_ACTION_LABELS: Record<CommandKind, string> = {
	command: "Run command",
	page: "Go to page",
	link: "Open link",
};

function buildCommandMetaMap(links: CommandLinkItem[]) {
	const map = new Map<string, { commandKind: CommandKind }>();
	["Light", "Dark", "Auto", "Download vCard"].forEach((t) => map.set(t, { commandKind: "command" }));
	SOCIAL_LINKS.forEach((l) => map.set(l.title, { commandKind: "link" }));
	[...MENU_LINKS, ...PORTFOLIO_LINKS, ...links].forEach((l) => {
		if (!map.has(l.title)) map.set(l.title, { commandKind: "page" });
	});
	return map;
}

/* ---------- Component ---------- */
export function CommandPalette({ posts }: { posts?: { title: string; slug: string; category?: string }[] }) {
	const [open, setOpen] = React.useState(false);
	const [highlightedTitle, setHighlightedTitle] = React.useState<string>("");
	const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">(getResolvedTheme());

	// Open/close by ⌘K / Ctrl+K / '/'
	React.useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
				const target = e.target as HTMLElement | null;
				if (target && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))) {
					return;
				}
				e.preventDefault();
				setOpen((o) => !o);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	React.useEffect(() => {
		if (open) setResolvedTheme(getResolvedTheme());
	}, [open]);

	// Posts -> links
	const { blogLinks, componentLinks } = React.useMemo(() => {
		const items = posts ?? [];
		const blog = items
			.filter((p) => p.category !== "components")
			.map((p) => ({ title: p.title, href: `/blog/${p.slug}` }));
		const comps = items
			.filter((p) => p.category === "components")
			.map((p) => ({ title: p.title, href: `/components/${p.slug}` }));
		return { blogLinks: blog, componentLinks: comps };
	}, [posts]);

	const META_MAP = React.useMemo(
		() => buildCommandMetaMap([...blogLinks, ...componentLinks]),
		[blogLinks, componentLinks]
	);
	const selectedKind: CommandKind = META_MAP.get(highlightedTitle)?.commandKind ?? "page";

	const handleOpenLink = React.useCallback((href: string, newTab?: boolean) => {
		setOpen(false);
		if (newTab || /^https?:\/\//.test(href)) {
			window.open(href, "_blank", "noopener,noreferrer");
			return;
		}
		if (href.startsWith("/#")) {
			const id = href.slice(2);
			const el = document.getElementById(id);
			if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
			else window.location.href = href;
		} else {
			window.location.href = href;
		}
	}, []);

	const handleDownloadVcard = React.useCallback(() => {
		setOpen(false);
		const a = document.createElement("a");
		a.href = "/vcard/your-name.vcf";
		a.download = "your-name.vcf";
		document.body.appendChild(a);
		a.click();
		a.remove();
		toast.success("Downloading vCard…");
	}, []);

	const handleTheme = React.useCallback((t: "light" | "dark" | "system") => {
		setOpen(false);
		setTheme(t);
		const now = getResolvedTheme();
		setResolvedTheme(now);
		toast.success(`Theme: ${t === "system" ? `Auto (${now})` : t}`);
	}, []);

	return (
		<>
			{/* Trigger (put this in your navbar) */}
			<Button variant="outline" className="rounded-full text-sm" onClick={() => setOpen(true)}>
				<span className="font-sans text-sm/4 font-medium">Search</span>
				<CommandMenuKbd className="hidden tracking-wider sm:in-[.os-macos_&]:flex">⌘K</CommandMenuKbd>
				<CommandMenuKbd className="hidden sm:not-[.os-macos_&]:flex">Ctrl K</CommandMenuKbd>
			</Button>

			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Type a command or search…" />
				<CommandList className="max-h-[60vh]">
					<CommandEmpty>No results found.</CommandEmpty>

					<LinksGroup
						heading="Menu"
						links={MENU_LINKS}
						onSelect={handleOpenLink}
						onHighlight={setHighlightedTitle}
					/>

					<CommandSeparator />

					<LinksGroup
						heading="Portfolio"
						links={PORTFOLIO_LINKS}
						onSelect={handleOpenLink}
						onHighlight={setHighlightedTitle}
					/>

					{blogLinks.length > 0 && (
						<>
							<CommandSeparator />
							<LinksGroup
								heading="Blog"
								links={blogLinks}
								onSelect={handleOpenLink}
								onHighlight={setHighlightedTitle}
							/>
						</>
					)}

					{componentLinks.length > 0 && (
						<>
							<CommandSeparator />
							<LinksGroup
								heading="Components"
								links={componentLinks}
								onSelect={handleOpenLink}
								onHighlight={setHighlightedTitle}
							/>
						</>
					)}

					<CommandSeparator />

					<LinksGroup
						heading="Social"
						links={SOCIAL_LINKS}
						onSelect={handleOpenLink}
						onHighlight={setHighlightedTitle}
					/>

					<CommandSeparator />

					<CommandGroup heading="Brand / Utilities">
						<CommandItem
							value="Download vCard"
							keywords={["vcard", "download"]}
							onSelect={handleDownloadVcard}
							onMouseMove={() => setHighlightedTitle("Download vCard")}
							onFocus={() => setHighlightedTitle("Download vCard")}
						>
							<Download className="mr-2 h-4 w-4" />
							Download vCard
						</CommandItem>
					</CommandGroup>

					<CommandSeparator />

					<CommandGroup heading="Theme">
						<CommandItem
							value="Light"
							keywords={["theme", "light"]}
							onSelect={() => handleTheme("light")}
							onMouseMove={() => setHighlightedTitle("Light")}
							onFocus={() => setHighlightedTitle("Light")}
						>
							<Sun className="mr-2 h-4 w-4" />
							<span className="flex-1">Light</span>
							{resolvedTheme === "light" && <Check className="h-4 w-4 opacity-70" />}
						</CommandItem>

						<CommandItem
							value="Dark"
							keywords={["theme", "dark"]}
							onSelect={() => handleTheme("dark")}
							onMouseMove={() => setHighlightedTitle("Dark")}
							onFocus={() => setHighlightedTitle("Dark")}
						>
							<MoonStar className="mr-2 h-4 w-4" />
							<span className="flex-1">Dark</span>
							{resolvedTheme === "dark" && <Check className="h-4 w-4 opacity-70" />}
						</CommandItem>

						<CommandItem
							value="Auto"
							keywords={["theme", "system", "auto"]}
							onSelect={() => handleTheme("system")}
							onMouseMove={() => setHighlightedTitle("Auto")}
							onFocus={() => setHighlightedTitle("Auto")}
						>
							<CornerDownLeft className="mr-2 h-4 w-4 rotate-90 opacity-70" />
							<span className="flex-1">Auto</span>
							<span className="text-muted-foreground mr-2 text-xs">({resolvedTheme})</span>
						</CommandItem>
					</CommandGroup>
				</CommandList>

				{/* Footer */}
				<div className="text-muted-foreground flex items-center justify-between border-t px-3 py-2 text-xs">
					<span>{ENTER_ACTION_LABELS[selectedKind]}</span>
					<div className="flex items-center gap-2">
						<kbd className="bg-muted rounded px-1.5 py-0.5">Esc</kbd>
						<span>Exit</span>
					</div>
				</div>
			</CommandDialog>
		</>
	);
}

/* ---------- Small grouped list section ---------- */
function LinksGroup({
	heading,
	links,
	onSelect,
	onHighlight,
}: {
	heading: string;
	links: CommandLinkItem[];
	onSelect: (href: string, openInNewTab?: boolean) => void;
	onHighlight: (title: string) => void;
}) {
	return (
		<CommandGroup heading={heading}>
			{links.map((l) => {
				const Icon = l.icon ?? LinkIcon;
				const val = l.title; // used for footer mapping + cmdk filtering
				return (
					<CommandItem
						key={l.title + l.href}
						value={val}
						keywords={l.keywords}
						onSelect={() => onSelect(l.href, l.openInNewTab)}
						onMouseMove={() => onHighlight(val)}
						onFocus={() => onHighlight(val)}
					>
						<Icon className="mr-2 h-4 w-4 shrink-0" />
						{l.title}
					</CommandItem>
				);
			})}
		</CommandGroup>
	);
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<"kbd">) {
	return (
		<kbd
			className={cn(
				"text-muted-foreground pointer-events-none flex h-5 min-w-6 items-center justify-center gap-1 rounded-sm bg-black/5 px-1 font-sans text-[13px] font-normal shadow-[inset_0_-1px_2px] shadow-black/10 select-none dark:bg-white/10 dark:shadow-white/10 dark:text-shadow-xs [&_svg:not([class*='size-'])]:size-3",
				className
			)}
			{...props}
		/>
	);
}
