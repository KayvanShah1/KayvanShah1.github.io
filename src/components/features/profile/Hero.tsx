import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Typewriter from "@/components/Typewriter";
import { MdWavingHand } from "react-icons/md";
import { HeroTree } from "./HeroTree";
// import { Meteors } from "@/components/magicui/meteors";

const Hero = () => {
	return (
		<section id="hero" className="relative mb-10 flex w-full flex-col items-center justify-center px-6 py-10">
			{/* <Meteors number={30} /> */}
			<ScrollProgress className="top-16 z-50 w-full bg-linear-to-r from-green-400 via-teal-400 to-green-400" />
			<HeroTree />

			<h1 className="text-center text-4xl font-semibold sm:text-5xl lg:text-6xl xl:text-7xl" id="hero-title">
				<Typewriter speed={100} cursor>
					<>
						Hi, <span className="font-bold text-green-400">Kayvan</span> here.
					</>
				</Typewriter>
			</h1>

			<div className="mt-4 text-center text-xl text-gray-400 sm:text-2xl lg:text-3xl" id="hero-subtitle">
				What would someone do differently with better information?
			</div>

			<div
				className="mt-4 max-w-150 text-center text-base text-muted-foreground sm:text-lg lg:text-xl"
				id="hero-description"
			>
				I’m a data and AI engineer. I like sitting down with the people doing the work and figuring out how they
				make a call today. What do they trust in the data? Where are they still guessing? Those questions shape
				what I build, whether that’s a data pipeline they can rely on or an AI tool that helps them work through
				a decision.
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
