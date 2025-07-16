import { useEffect, useRef } from "react";
import p5 from "p5";

interface P5CanvasProps {
	sketch: (p: p5) => void;
	className?: string;
}

export default function P5Canvas({ sketch, className }: P5CanvasProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const p5InstanceRef = useRef<p5 | null>(null);

	useEffect(() => {
		if (containerRef.current) {
			p5InstanceRef.current = new p5(sketch, containerRef.current);
		}

		return () => {
			p5InstanceRef.current?.remove(); // Clean up on unmount
		};
	}, [sketch]);

	return <div ref={containerRef} className={className} />;
}
