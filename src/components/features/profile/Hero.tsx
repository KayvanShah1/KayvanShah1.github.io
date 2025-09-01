import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import P5Canvas from "@/components/P5Canvas";
import circuitTreeSmoothGrowth from "@/components/sketches/circuitTreeSmoothGrowth";
import Typewriter from "@/components/Typewriter";
import { MdWavingHand } from "react-icons/md";

const Hero = () => {
	return (
		<section id="hero" className="relative mb-10 flex w-full flex-col items-center justify-center px-6 py-10">
			<ScrollProgress className="top-16 z-50 w-full bg-gradient-to-r from-green-400 via-teal-400 to-green-400" />
			<P5Canvas sketch={circuitTreeSmoothGrowth} className="mt-20 mb-10 w-fit items-center" />

			<h1 className="text-center text-4xl font-semibold sm:text-5xl lg:text-6xl xl:text-7xl" id="hero-title">
				<Typewriter speed={100} cursor>
					<>
						Hi, <span className="font-bold text-green-400">Kayvan</span> here.
					</>
				</Typewriter>
			</h1>

			<div className="mt-4 text-center text-xl text-gray-400 sm:text-2xl lg:text-3xl" id="hero-subtitle">
				Code-driven. Product-focused. Business-savvy.
			</div>

			<div
				className="text-muted-foreground mt-4 max-w-[600px] text-center text-base sm:text-lg lg:text-xl"
				id="hero-description"
			>
				I'm a software and ML engineer driven by curiosity and scale – from shaping data infrastructure and
				AI-driven systems to building intelligence into real-world platforms. I love bridging the gap between
				raw data, applied machine learning, and impactful products.
			</div>

			<a href="#contact">
				<ShimmerButton
					className="mt-10 inline-flex items-center gap-2 text-green-400 shadow-2xl"
					shimmerColor="oklch(79.2% 0.209 151.711)"
					shimmerSize="0.15em"
					shimmerDuration="3s"
				>
					<MdWavingHand size={20} className="text-green-400" />
					<span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-green-400 lg:text-lg">
						Say Hi!
					</span>
				</ShimmerButton>
			</a>
		</section>
	);
};

export default Hero;
