import { createNeuromorphTree } from "@kayvanshah1/neuromorph/core";
import { useEffect, useRef } from "react";

export function HeroTree() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const tree = createNeuromorphTree(container);
		const canvas = container.querySelector("canvas");
		if (canvas) {
			canvas.setAttribute("aria-label", "Luminous Grove, an interactive generative tree");
			canvas.setAttribute("aria-description", "Press S while focused to download an image of the tree.");
			canvas.style.touchAction = "pan-y";
		}

		return () => tree.destroy();
	}, []);

	return (
		<div className="group relative mt-20 mb-10 h-65 w-full max-w-150 sm:h-81.25 lg:mt-10 lg:mb-6 lg:h-[30.46875rem] lg:max-w-225">
			<div ref={containerRef} className="size-full" />
			<p
				aria-hidden="true"
				className="pointer-events-none invisible absolute inset-x-0 top-full mt-2 text-center text-xs text-muted-foreground group-has-[canvas:focus-visible]:visible"
			>
				Press <kbd>S</kbd> to save the tree
			</p>
		</div>
	);
}
