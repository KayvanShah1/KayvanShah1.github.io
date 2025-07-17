import type p5 from "p5";

const maxDepth = 6;
const maxBranchesPerNode = 3;
const shineSpeed = 130; // pixels per second
const treeScale = 0.92;
const growthDelay = 375; // ms per level
const childDelay = 120; // ms delay between child creation
const growthDuration = 1800; // ms for full branch growth
let swayDirection = { x: 0, y: 0 };
let swayStartTime = 0;
const swayDecayDuration = 3000; // ms

interface BranchOptions {
	angle: number;
	depth: number;
	parent: Branch | null;
	originX?: number;
	originY?: number;
}

interface Position {
	x: number;
	y: number;
	angle: number;
}

class Branch {
	baseAngle: number;
	animatedAngle: number;
	depth: number;
	length: number;
	lengthProgress = 0;
	children: Branch[] = [];
	parent: Branch | null;
	shineProgress = -1;
	shineStartTime: number | null = null;
	originX?: number;
	originY?: number;
	createdTime: number;

	constructor(p: p5, opts: BranchOptions, createdTime: number) {
		this.baseAngle = opts.angle;
		this.animatedAngle = this.baseAngle;
		this.depth = opts.depth;
		this.parent = opts.parent;
		this.originX = opts.originX;
		this.originY = opts.originY;
		this.createdTime = createdTime;
		this.length = p.random(20, 70) * treeScale;
	}

	triggerShine(startTime: number) {
		this.shineProgress = 0;
		this.shineStartTime = startTime;
	}

	update(p: p5, now: number) {
		const t = now / 1000;
		const elapsedSinceCreated = now - this.createdTime;
		this.lengthProgress = p.constrain(elapsedSinceCreated / growthDuration, 0, 1);

		if (this.depth >= 2) {
			const swayFactor = 1 / Math.sqrt(this.depth + 1);
			let swayOffset = Math.sin(t + this.depth) * 0.055 * swayFactor;

			// External sway influence
			const swayElapsed = now - swayStartTime;
			if (swayElapsed < swayDecayDuration) {
				const decayFactor = 1 - swayElapsed / swayDecayDuration;

				// one way
				const directionalInfluence = swayDirection.x * 0.00075; // tweak this factor
				const oscillation = Math.sin(t * 2 + this.depth) * 0.003;
				swayOffset += (directionalInfluence + oscillation) * decayFactor;
			}

			this.animatedAngle = this.baseAngle + swayOffset;
		} else {
			this.animatedAngle = this.baseAngle;
		}

		// Grow children after delay
		if (this.children.length === 0 && this.depth < maxDepth) {
			if (elapsedSinceCreated >= this.depth * growthDelay) {
				this.growChildren(p);
			}
		}

		// Shine logic
		if (this.shineProgress >= 0 && this.shineProgress < 1) {
			const shineElapsed = (now - (this.shineStartTime ?? now)) / 1000;
			this.shineProgress = Math.min(1, (shineElapsed * shineSpeed) / (this.length * this.lengthProgress || 1));
			if (this.shineProgress === 1) {
				for (const child of this.children) {
					if (child.shineProgress < 0) child.triggerShine(now);
				}
			}
		}

		for (const child of this.children) child.update(p, now);
	}

	growChildren(p: p5) {
		const shouldBranch = this.depth < 2 || p.random() < 0.92;
		if (!shouldBranch) return;

		const childAngles: number[] = [];

		if (this.depth <= 1) {
			const numChildren = p.int(p.random(2, maxBranchesPerNode + 1));
			const spread = p.PI / 3;
			for (let i = 0; i < numChildren; i++) {
				const offset = (i / (numChildren - 1) - 0.5) * spread;
				const angle = this.baseAngle + offset + p.random(-0.2, 0.2);
				childAngles.push(angle);
			}
		} else {
			const numChildren = p.int(p.random(1, maxBranchesPerNode + 1));
			for (let i = 0; i < numChildren; i++) {
				childAngles.push(this.baseAngle + p.random(-p.PI / 3.5, p.PI / 3.5));
			}
		}

		// Staggered creation
		for (let i = 0; i < childAngles.length; i++) {
			const angle = childAngles[i];
			const delay = childDelay * i;
			const childTime = this.createdTime + delay;

			this.children.push(
				new Branch(
					p,
					{
						angle,
						depth: this.depth + 1,
						parent: this,
						originX: this.getEndPosition().x,
						originY: this.getEndPosition().y,
					},
					childTime
				)
			);
		}
	}

	resetShine() {
		this.shineProgress = -1;
		this.shineStartTime = null;
		for (const child of this.children) child.resetShine();
	}

	getStartPosition(): Position {
		if (!this.parent) {
			return {
				x: this.originX ?? 300,
				y: this.originY ?? 325,
				angle: this.animatedAngle,
			};
		}
		const parentEnd = this.parent.getEndPosition();
		return { x: parentEnd.x, y: parentEnd.y, angle: this.animatedAngle };
	}

	getEndPosition() {
		const { x, y } = this.getStartPosition();
		const len = this.length * this.lengthProgress;
		return {
			x: x + Math.cos(this.animatedAngle) * len,
			y: y + Math.sin(this.animatedAngle) * len,
		};
	}

	draw(p: p5) {
		if (this.lengthProgress < 0.05) return;

		const start = this.getStartPosition();
		const end = this.getEndPosition();

		const maxWeight = 3.5,
			minWeight = 0.5;
		const t = this.depth / maxDepth;
		p.strokeWeight(p.lerp(maxWeight, minWeight, t));
		p.stroke(120);
		p.line(start.x, start.y, end.x, end.y);

		// Shine trail
		if (this.shineProgress >= 0 && this.shineProgress < 1) {
			const baseLen = this.length * this.lengthProgress;
			const shineDotX = start.x + Math.cos(this.animatedAngle) * baseLen * this.shineProgress;
			const shineDotY = start.y + Math.sin(this.animatedAngle) * baseLen * this.shineProgress;
			const pulse = 40 * p.lerp(2.0, 0.3, this.depth / maxDepth) + Math.sin(p.millis() / 100 + this.depth) * 4;

			for (let i = 0; i < 8; i++) {
				const progress = (i / 8) * this.shineProgress;
				const trailX = start.x + Math.cos(this.animatedAngle) * baseLen * progress;
				const trailY = start.y + Math.sin(this.animatedAngle) * baseLen * progress;
				const alpha = p.lerp(0, 0.6, i / 8);

				p.drawingContext.shadowBlur = pulse * 0.5;
				p.drawingContext.shadowColor = "rgba(57, 255, 20, 0.8)";
				p.noStroke();
				p.fill(`rgba(57, 255, 20, ${alpha})`);
				p.circle(trailX, trailY, 2.5);
			}

			p.drawingContext.shadowBlur = pulse;
			p.drawingContext.shadowColor = "#39FF14";
			p.noStroke();
			p.fill("#39FF14");
			p.circle(shineDotX, shineDotY, 3.5);
			p.drawingContext.shadowBlur = 0;
			p.noFill();
		}

		for (const child of this.children) child.draw(p);
	}
}

const circuitTreeWithGrowthSmoothSketch = (p: p5) => {
	let root: Branch;
	let lastShineTime = 0;
	const shineInterval = 3000;

	const createTree = () =>
		new Branch(
			p,
			{
				angle: -Math.PI / 2 + p.random(-0.15, 0.15),
				depth: 0,
				parent: null,
				originX: p.width / 2,
				originY: p.height,
			},
			p.millis()
		);

	p.setup = () => {
		p.createCanvas(600, 325);
		p.clear();
		root = createTree();
	};

	p.draw = () => {
		p.clear();
		const now = p.millis();
		root.update(p, now);
		root.draw(p);

		if (now - lastShineTime > shineInterval) {
			root.resetShine();
			root.triggerShine(now);
			lastShineTime = now;
		}
	};

	p.windowResized = () => {
		p.resizeCanvas(600, 325);
		root = createTree();
	};

	function applyDirectionalSway(x: number, y: number) {
		const dx = x - p.width / 2;
		const dy = y - p.height;
		swayDirection = { x: dx, y: dy };
		swayStartTime = p.millis();
	}

	p.mousePressed = () => {
		applyDirectionalSway(p.mouseX, p.mouseY);
		root.resetShine();
		root.triggerShine(p.millis());
		lastShineTime = p.millis();
	};
};

export default circuitTreeWithGrowthSmoothSketch;
