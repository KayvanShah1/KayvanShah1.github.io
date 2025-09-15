import { useMemo, useState } from "react";
import { SKILLS, type Skill } from "@/components/features/profile/data/skills";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

function SkillIcon({ Icon, label }: { Icon: Skill["icon"]; label: string }) {
	return (
		<SimpleTooltip content={label}>
			<Icon className="text-muted-foreground size-6 shrink-0 md:size-8" />
		</SimpleTooltip>
	);
}

function DomainPill({ domain, active, onClick }: { domain: string; active: boolean; onClick: () => void }) {
	return (
		<Toggle
			pressed={active}
			onPressedChange={onClick}
			className={cn(
				"rounded-full px-3 py-1 text-xs transition duration-300",
				active ? "!text-green-400 ring-2 ring-green-400/70" : "bg-muted text-muted-foreground hover:bg-muted/70"
			)}
		>
			{domain}
		</Toggle>
	);
}

export default function Skills() {
	const domains = useMemo(() => Array.from(new Set(SKILLS.map((s) => s.domain))).sort(), []);

	const [selected, setSelected] = useState<string[]>([]);

	const toggleDomain = (d: string) =>
		setSelected((prev) => (prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]));

	const clear = () => setSelected([]);

	// OR semantics across selected domains
	const filtered = useMemo(() => {
		if (selected.length === 0) return SKILLS;
		return SKILLS.filter((s) => selected.includes(s.domain));
	}, [selected]);

	return (
		<section id="skills" className="mx-6 my-10 flex flex-col justify-start py-10 sm:px-8 md:mx-4 md:px-16">
			<h1 className="mb-4 text-4xl font-semibold">
				Skills
				<sup className="text-muted-foreground ml-1 text-sm select-none">
					({filtered.length}/{SKILLS.length})
				</sup>
			</h1>

			{/* Controls: domain pills + Clear */}
			<div className="mb-10">
				<div className="flex flex-wrap items-center gap-2">
					{domains.map((d) => (
						<DomainPill key={d} domain={d} active={selected.includes(d)} onClick={() => toggleDomain(d)} />
					))}

					{selected.length > 0 && (
						<button
							type="button"
							onClick={clear}
							className="text-muted-foreground ml-auto text-xs underline decoration-dotted underline-offset-4"
						>
							Clear ({selected.length})
						</button>
					)}
				</div>
			</div>

			{/* Flat list always (no domain headers) */}
			<ul className="flex flex-wrap gap-5 select-none">
				{[...filtered]
					.sort((a, b) => a.name.localeCompare(b.name))
					.map(({ name, icon: Icon }) => (
						<li key={name} className="flex">
							<SkillIcon Icon={Icon} label={name} />
							<span className="sr-only">{name}</span>
						</li>
					))}
			</ul>
		</section>
	);
}
