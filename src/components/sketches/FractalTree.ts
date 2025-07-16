// sketches/fractalTreeSketch.ts
import p5 from "p5";

const fractalTreeSketch = (p: p5) => {
	let angle: number;

	const branch = (len: number) => {
		p.line(0, 0, 0, -len);
		p.translate(0, -len);
		if (len > 4) {
			p.push();
			p.rotate(angle);
			branch(len * 0.67);
			p.pop();

			p.push();
			p.rotate(-angle);
			branch(len * 0.67);
			p.pop();
		}
	};

	p.setup = () => {
		p.createCanvas(400, 400);
		p.stroke(255);
		p.angleMode(p.RADIANS);
	};

	p.draw = () => {
		p.clear(); // transparent background
		angle = p.map(p.sin(p.frameCount * 0.01), -1, 1, p.PI / 2, p.PI / 16); // animated angle
		p.translate(p.width / 2, p.height);
		branch(100);
	};
};

export default fractalTreeSketch;
