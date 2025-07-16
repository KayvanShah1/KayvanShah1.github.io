import type p5 from "p5";

const maxDepth = 6; // maximum depth of the tree
const maxBranchesPerNode = 3; // maximum branches per node
const shineSpeed = 130; // pixels per second
let treeScale = 1; // scaling factor based on canvas height

// 🌱 Branch options interface
interface BranchOptions {
	angle: number;
	depth: number;
	parent: Branch | null;
	originX?: number;
	originY?: number;
}

// 🌳 Branch class
class Branch {
	baseAngle: number;
	animatedAngle: number;
	depth: number;
	length: number;
	children: Branch[] = [];
	parent: Branch | null;
	shineProgress: number = -1; // -1 = not active, 0...1 = in progress
	shineStartTime: number | null = null;
	originX?: number;
	originY?: number;

	constructor(p: p5, opts: BranchOptions) {
		this.baseAngle = opts.angle;
		this.animatedAngle = this.baseAngle;
		this.depth = opts.depth;
		this.parent = opts.parent;
		this.originX = opts.originX;
		this.originY = opts.originY;
		this.length = p.random(20, 70) * treeScale; // length of the branch, scaled by treeScale

		if (this.depth < maxDepth) {
			const shouldBranch = this.depth < 2 || p.random() < 0.92;

			if (shouldBranch) {
				const childAngles: number[] = [];

				if (this.depth === 0 || this.depth === 1) {
					// 🔁 Symmetric branching
					const numChildren = p.int(p.random(2, maxBranchesPerNode + 1));
					const spread = p.PI / 3; // adjust as needed (wider = more fan)

					for (let i = 0; i < numChildren; i++) {
						const normalized = i / (numChildren - 1) - 0.5; // [-0.5, 0.5]
						const offset = normalized * spread;
						const angle = this.baseAngle + offset + p.random(-0.25, 0.25); // slight noise
						childAngles.push(angle);
					}
				} else {
					// 🌱 Fully random
					const numChildren = p.int(p.random(1, maxBranchesPerNode + 1));
					for (let i = 0; i < numChildren; i++) {
						const angle = this.baseAngle + p.random(-p.PI / 3.5, p.PI / 3.5);
						childAngles.push(angle);
					}
				}

				// Create children
				for (const angle of childAngles) {
					this.children.push(
						new Branch(p, {
							angle,
							depth: this.depth + 1,
							parent: this,
							originX: this.getEndPosition().x,
							originY: this.getEndPosition().y,
						})
					);
				}
			}
		}
	}

	triggerShine(startTime: number) {
		this.shineProgress = 0;
		this.shineStartTime = startTime;
	}

	update(now: number) {
		const t = now / 1000;

		// Animate sway for outer branches (depth ≥ 2)
		if (this.depth >= 2) {
			const wiggleAmplitude = 0.15;
			const swayFactor = 1 / Math.sqrt(this.depth + 1);
			this.animatedAngle = this.baseAngle + Math.sin(t + this.depth) * wiggleAmplitude * swayFactor;
		} else {
			this.animatedAngle = this.baseAngle;
		}

		// ✨ Shine update logic
		if (this.shineProgress >= 0 && this.shineProgress < 1) {
			const elapsed = (now - (this.shineStartTime ?? now)) / 1000;
			this.shineProgress = Math.min(1, (elapsed * shineSpeed) / this.length);

			if (this.shineProgress === 1 && this.children.length > 0) {
				for (const child of this.children) {
					if (child.shineProgress < 0) child.triggerShine(now);
				}
			}
		}

		// 🔁 Recursive update for children
		for (const child of this.children) child.update(now);
	}

	resetShine() {
		this.shineProgress = -1;
		this.shineStartTime = null;
		for (const child of this.children) child.resetShine();
	}

	getStartPosition(): { x: number; y: number; angle: number } {
		if (!this.parent) {
			// Root branch — start from position
			const x = this.originX ?? 250;
			const y = this.originY ?? 325;
			return { x, y, angle: this.animatedAngle }; // canvas bottom center
		} else {
			const parentPos = this.parent.getEndPosition();
			return { x: parentPos.x, y: parentPos.y, angle: this.animatedAngle };
		}
	}

	getEndPosition(): { x: number; y: number } {
		const { x, y } = this.getStartPosition();
		return {
			x: x + Math.cos(this.animatedAngle) * this.length,
			y: y + Math.sin(this.animatedAngle) * this.length,
		};
	}

	draw(p: p5) {
		const start = this.getStartPosition();
		const end = this.getEndPosition();

		// Draw line
		const maxWeight = 3.5; // for depth = 0
		const minWeight = 0.5; // for deepest branches
		const t = this.depth / maxDepth;
		const weight = p.lerp(maxWeight, minWeight, t); // linear interpolation

		p.stroke(120);
		p.strokeWeight(weight);
		// p.stroke(100);
		// p.strokeWeight(1);
		p.line(start.x, start.y, end.x, end.y);

		// Draw shine dot
		if (this.shineProgress >= 0 && this.shineProgress < 1) {
			// Compute shine dot position
			const shineDotX = start.x + Math.cos(this.animatedAngle) * this.length * this.shineProgress;
			const shineDotY = start.y + Math.sin(this.animatedAngle) * this.length * this.shineProgress;

			// Dynamic shadow effect
			const t = p.millis() / 100; // Time in deciseconds for pulse effect
			const baseGlow = 40; // base glow intensity
			const depthFade = p.lerp(2.0, 0.3, this.depth / maxDepth); // fade out
			const pulse = baseGlow * depthFade + Math.sin(t + this.depth) * 4; // pulse effect

			// ➕ Glowing trail behind the shine dot
			const trailSteps = 8;
			for (let i = 0; i < trailSteps; i++) {
				const trailProgress = (i / trailSteps) * this.shineProgress;
				const trailX = start.x + Math.cos(this.animatedAngle) * this.length * trailProgress;
				const trailY = start.y + Math.sin(this.animatedAngle) * this.length * trailProgress;

				const alpha = p.lerp(0, 0.6, i / trailSteps); // trail fade-in

				p.drawingContext.shadowBlur = pulse * 0.5;
				p.drawingContext.shadowColor = "rgba(57, 255, 20, 0.8)";
				p.noStroke();
				p.fill(`rgba(57, 255, 20, ${alpha})`);
				p.circle(trailX, trailY, 2.5);
			}

			// ✨ Draw glowing shine dot
			p.drawingContext.shadowBlur = pulse;
			p.drawingContext.shadowColor = "#39FF14";
			p.noStroke();
			// p.fill(255, 255, 100);
			p.fill("#39FF14"); // neon green
			p.circle(shineDotX, shineDotY, 3.5);

			// Reset drawing context
			p.drawingContext.shadowBlur = 0; // Reset shadow
			p.noFill();
		}

		for (const child of this.children) child.draw(p);
	}
}

const circuitSketch = (p: p5) => {
	let root: Branch;
	let lastShineTime = 0;
	const shineInterval = 3000;

	function createTree() {
		return new Branch(p, {
			angle: -Math.PI / 2 + p.random(-0.15, 0.15),
			depth: 0,
			parent: null,
			originX: p.width / 2,
			originY: p.height,
		});
	}

	p.setup = () => {
		p.createCanvas(p.windowWidth, 325);
		treeScale = p.height / 325; // set initial scale
		p.clear();
		// p.colorMode(p.HSL);
		root = createTree();
	};

	p.draw = () => {
		p.clear();
		const now = p.millis();
		root.update(now);
		root.draw(p);

		if (now - lastShineTime > shineInterval) {
			root.resetShine();
			root.triggerShine(now);
			lastShineTime = now;
		}
	};

	p.windowResized = () => {
		p.resizeCanvas(600, 325);
		treeScale = p.height / 400; // recompute scale
		root = createTree();
	};

	p.mousePressed = () => {
		root.resetShine();
		root.triggerShine(p.millis());
		lastShineTime = p.millis(); // update tracker
	};
};

export default circuitSketch;
