import type p5 from "p5";

const maxDepth = 5;
const maxBranchesPerNode = 3;
const shineSpeed = 130;
const treeScale = 1.0;
const growthDelay = 200;
const childDelay = 115;
const growthDuration = 800;
const forestSize = 3;
const treeSpacing = 300;
const shineInterval = 3000;
const treeStagger = 700; // Time between each tree's creation (ms)

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
	children: Branch[] = [];
	parent: Branch | null;
	shineProgress: number = -1;
	shineStartTime: number | null = null;
	originX?: number;
	originY?: number;
	createdTime: number;
	lengthProgress: number;

	constructor(p: p5, opts: BranchOptions, createdTime: number) {
		this.baseAngle = opts.angle;
		this.animatedAngle = this.baseAngle;
		this.depth = opts.depth;
		this.parent = opts.parent;
		this.originX = opts.originX;
		this.originY = opts.originY;
		this.createdTime = createdTime;
		this.length = p.random(20, 70) * treeScale;
		this.lengthProgress = 0;
	}

	triggerShine(startTime: number) {
		this.shineProgress = 0;
		this.shineStartTime = startTime;
	}

	update(p: p5, now: number) {
		const t = now / 1000;
		const timeSinceCreated = now - this.createdTime;
		this.lengthProgress = p.constrain(timeSinceCreated / growthDuration, 0, 1);

		if (this.depth >= 2) {
			const swayFactor = 1 / Math.sqrt(this.depth + 1);
			this.animatedAngle = this.baseAngle + Math.sin(t + this.depth) * 0.15 * swayFactor;
		} else {
			this.animatedAngle = this.baseAngle;
		}

		if (this.children.length === 0 && this.depth < maxDepth) {
			const timeSinceRoot = now - this.createdTime;
			if (timeSinceRoot >= this.depth * growthDelay) {
				this.growChildren(p);
			}
		}

		if (this.shineProgress >= 0 && this.shineProgress < 1) {
			const elapsed = (now - (this.shineStartTime ?? now)) / 1000;
			this.shineProgress = Math.min(1, (elapsed * shineSpeed) / this.length);
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

		for (let i = 0; i < childAngles.length; i++) {
			const angle = childAngles[i];
			const delay = childDelay * i;
			const childCreationTime = this.createdTime + delay;

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
					childCreationTime
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
		return {
			x: x + Math.cos(this.animatedAngle) * this.length,
			y: y + Math.sin(this.animatedAngle) * this.length,
		};
	}

	draw(p: p5) {
		const start = this.getStartPosition();
		const end = this.getEndPosition();

		const maxWeight = 3.5,
			minWeight = 0.5;
		const t = this.depth / maxDepth;
		p.strokeWeight(p.lerp(maxWeight, minWeight, t));
		p.stroke(120);
		p.line(start.x, start.y, end.x, end.y);

		if (this.shineProgress >= 0 && this.shineProgress < 1) {
			const shineDotX = start.x + Math.cos(this.animatedAngle) * this.length * this.shineProgress;
			const shineDotY = start.y + Math.sin(this.animatedAngle) * this.length * this.shineProgress;
			const pulse = 40 * p.lerp(2.0, 0.3, this.depth / maxDepth) + Math.sin(p.millis() / 100 + this.depth) * 4;

			for (let i = 0; i < 8; i++) {
				const trailProgress = (i / 8) * this.shineProgress;
				const trailX = start.x + Math.cos(this.animatedAngle) * this.length * trailProgress;
				const trailY = start.y + Math.sin(this.animatedAngle) * this.length * trailProgress;
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

const forestSketch = (p: p5) => {
	const trees: Branch[] = [];
	let lastShineTime = 0;

	p.setup = () => {
		p.createCanvas(p.windowWidth, 325);
		p.clear();

		for (let i = 0; i < forestSize; i++) {
			const delay = treeStagger * i;
			const baseX = p.width / 2 - ((forestSize - 1) * treeSpacing) / 2 + i * treeSpacing;
			const creationTime = p.millis() + delay;

			trees.push(
				new Branch(
					p,
					{
						angle: -Math.PI / 2 + p.random(-0.15, 0.15),
						depth: 0,
						parent: null,
						originX: baseX,
						originY: p.height,
					},
					creationTime
				)
			);
		}
	};

	p.draw = () => {
		p.clear();
		const now = p.millis();
		for (const tree of trees) {
			tree.update(p, now);
			tree.draw(p);
		}

		if (now - lastShineTime > shineInterval) {
			for (const tree of trees) {
				tree.resetShine();
				tree.triggerShine(now);
			}
			lastShineTime = now;
		}
	};

	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, 325);
		trees.length = 0;
		p.setup();
	};

	p.mousePressed = () => {
		const now = p.millis();
		for (const tree of trees) {
			tree.resetShine();
			tree.triggerShine(now);
		}
		lastShineTime = now;
	};
};

export default forestSketch;
