import { CollapsibleList } from "@/components/collapsible-list";
import { ProjectItem } from "@/components/features/profile/projects/project-item";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toggle } from "@/components/ui/toggle";
import { PROJECTS } from "@/data/projects";
import { useMemo, useState } from "react";

type TagToggleProps = {
	tag: string;
	active: boolean;
	onClick: () => void;
};
type Mode = "AND" | "OR";
type ProjectFiltersProps = {
	allTags: string[];
	selected: string[];
	mode: Mode;
	onToggleTag: (tag: string) => void;
	onClear: () => void;
	onModeChange: (m: Mode) => void;
};

export function TagToggle({ tag, active, onClick }: TagToggleProps) {
	return (
		<Toggle
			pressed={active}
			onPressedChange={onClick}
			className={[
				"rounded-full px-3 py-1 text-xs transition duration-300",
				active
					? "!text-green-400 ring-2 ring-green-400/70"
					: "bg-muted text-muted-foreground hover:bg-muted/70",
			].join(" ")}
		>
			{tag}
		</Toggle>
	);
}

export function ProjectFilters({ allTags, selected, mode, onToggleTag, onClear, onModeChange }: ProjectFiltersProps) {
	return (
		<div className="mb-6 space-y-3">
			{/* Row 1: AND/OR toggle + Clear */}
			<div className="flex flex-wrap items-center gap-2">
				Match
				<Tabs value={mode} onValueChange={(val) => onModeChange(val as Mode)}>
					<TabsList className="bg-muted/40 rounded-full">
						<TabsTrigger
							value="AND"
							className="rounded-full px-3 py-1 text-xs data-[state=active]:!bg-green-500 data-[state=active]:text-white"
						>
							AND
						</TabsTrigger>
						<TabsTrigger
							value="OR"
							className="rounded-full px-3 py-1 text-xs data-[state=active]:!bg-green-500 data-[state=active]:text-white"
						>
							OR
						</TabsTrigger>
					</TabsList>
				</Tabs>
				{selected.length > 0 && (
					<button
						type="button"
						onClick={onClear}
						className="text-muted-foreground ml-auto text-xs underline decoration-dotted underline-offset-4"
					>
						Clear ({selected.length})
					</button>
				)}
			</div>

			{/* Row 2: All tags */}
			<div className="flex flex-wrap items-center gap-2">
				{allTags.map((tag) => (
					<TagToggle key={tag} tag={tag} active={selected.includes(tag)} onClick={() => onToggleTag(tag)} />
				))}
			</div>
		</div>
	);
}

export default function Projects() {
	// Collect all unique tags
	const allTags = useMemo(() => Array.from(new Set(PROJECTS.flatMap((p) => p.tags ?? []))).sort(), []);

	const [selected, setSelected] = useState<string[]>([]);
	const [mode, setMode] = useState<Mode>("OR");

	const toggleTag = (tag: string) =>
		setSelected((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));

	const clear = () => setSelected([]);

	const filtered = useMemo(() => {
		if (selected.length === 0) return PROJECTS;
		if (mode === "AND") {
			return PROJECTS.filter((p) => selected.every((t) => p.tags?.includes(t)));
		}
		// OR
		return PROJECTS.filter((p) => p.tags?.some((t) => selected.includes(t)));
	}, [selected, mode]);

	return (
		<section id="projects" className="mx-6 my-10 flex flex-col justify-center py-10 sm:px-8 md:mx-4 md:px-16">
			<h1 className="mb-4 text-4xl font-semibold">
				Projects
				<sup className="text-muted-foreground ml-1 text-sm select-none">
					({filtered.length}/{PROJECTS.length})
				</sup>
			</h1>

			{/* ✅ Filters */}
			<ProjectFilters
				allTags={allTags}
				selected={selected}
				mode={mode}
				onToggleTag={toggleTag}
				onClear={clear}
				onModeChange={setMode}
			/>

			{/* ✅ Filtered Projects */}
			<CollapsibleList
				items={filtered}
				max={5}
				renderItem={(item) => <ProjectItem project={item} selectedTags={selected} />}
			/>
		</section>
	);
}
