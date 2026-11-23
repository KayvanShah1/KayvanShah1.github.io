"use client";

import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

const MIN_GRID = 1;
const MAX_GRID = 16;

type Grid = {
	rows: number;
	cols: number;
};

const DEFAULT_GRIDS: Record<string, Grid> = {
	"6x4": { rows: 4, cols: 6 },
	"8x8": { rows: 8, cols: 8 },
	"8x3": { rows: 3, cols: 8 },
	"4x6": { rows: 6, cols: 4 },
	"3x8": { rows: 8, cols: 3 },
};

type PredefinedGridKey = keyof typeof DEFAULT_GRIDS;

interface PixelImageProps {
	src: string;
	grid?: PredefinedGridKey;
	customGrid?: Grid;
	grayscaleAnimation?: boolean;
	pixelFadeInDuration?: number; // in ms
	maxAnimationDelay?: number; // in ms
	colorRevealDelay?: number; // in ms
}

export const PixelImage = ({
	src,
	grid = "6x4",
	grayscaleAnimation = true,
	pixelFadeInDuration = 1000,
	maxAnimationDelay = 1200,
	colorRevealDelay = 1300,
	customGrid,
}: PixelImageProps) => {
	const [randomDelays] = useState(() => Array.from({ length: MAX_GRID * MAX_GRID }, () => Math.random()));

	const { rows, cols } = useMemo(() => {
		const isValidGrid = (grid?: Grid) => {
			if (!grid) return false;
			const { rows, cols } = grid;
			return (
				Number.isInteger(rows) &&
				Number.isInteger(cols) &&
				rows >= MIN_GRID &&
				cols >= MIN_GRID &&
				rows <= MAX_GRID &&
				cols <= MAX_GRID
			);
		};

		return isValidGrid(customGrid) ? customGrid! : DEFAULT_GRIDS[grid];
	}, [customGrid, grid]);

	const pieces = useMemo(() => {
		const total = rows * cols;
		return Array.from({ length: total }, (_, index) => {
			const row = Math.floor(index / cols);
			const col = index % cols;

			const clipPath = `polygon(
        ${col * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${(row + 1) * (100 / rows)}%,
        ${col * (100 / cols)}% ${(row + 1) * (100 / rows)}%
      )`;

			const delay = randomDelays[index] * maxAnimationDelay;
			return {
				clipPath,
				delay,
			};
		});
	}, [rows, cols, maxAnimationDelay, randomDelays]);

	return (
		<div className="relative h-72 w-72 select-none md:h-96 md:w-96">
			{pieces.map((piece, index) => (
				<div
					key={index}
					className="absolute inset-0"
					style={{
						clipPath: piece.clipPath,
						animation: `pixel-image-fade-in ${pixelFadeInDuration}ms ease-out ${piece.delay}ms both`,
					}}
				>
					<img
						src={src}
						alt={`Pixel image piece ${index + 1}`}
						className={cn("z-1 object-cover rounded-[2.5rem]", grayscaleAnimation && "grayscale")}
						style={{
							animation: grayscaleAnimation
								? `pixel-image-color-reveal ${pixelFadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1) ${colorRevealDelay}ms both`
								: "none",
						}}
						draggable={false}
					/>
				</div>
			))}
		</div>
	);
};
