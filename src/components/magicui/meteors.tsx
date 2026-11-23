"use client";

import { cn } from "@/lib/utils";
import { useState, type CSSProperties } from "react";

type MeteorProps = {
	minDelay: number;
	maxDelay: number;
	minDuration: number;
	maxDuration: number;
	angle: number;
	className?: string;
};

interface MeteorsProps extends Partial<MeteorProps> {
	number?: number;
}

function Meteor({ minDelay, maxDelay, minDuration, maxDuration, angle, className }: MeteorProps) {
	const [random] = useState(() => ({
		position: Math.random(),
		delay: Math.random(),
		duration: Math.random(),
	}));
	const style: CSSProperties & { "--angle": string } = {
		"--angle": `${-angle}deg`,
		top: "-5%",
		left: `${random.position * 100}vw`,
		animationDelay: `${random.delay * (maxDelay - minDelay) + minDelay}s`,
		animationDuration: `${Math.floor(random.duration * (maxDuration - minDuration) + minDuration)}s`,
	};

	return (
		<span
			style={style}
			className={cn(
				"animate-meteor pointer-events-none absolute size-0.5 rotate-(--angle) rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
				className
			)}
		>
			<div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-linear-to-r from-zinc-500 to-transparent" />
		</span>
	);
}

export const Meteors = ({
	number = 20,
	minDelay = 0.2,
	maxDelay = 1.2,
	minDuration = 2,
	maxDuration = 10,
	angle = 215,
	className,
}: MeteorsProps) => (
	<>
		{Array.from({ length: number }, (_, index) => (
			<Meteor
				key={index}
				minDelay={minDelay}
				maxDelay={maxDelay}
				minDuration={minDuration}
				maxDuration={maxDuration}
				angle={angle}
				className={className}
			/>
		))}
	</>
);
