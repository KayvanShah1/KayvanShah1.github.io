import ArtPic from "@/assets/hero-abstract.png";
import { Button } from "./ui/button";
import { FaEnvelope } from "react-icons/fa";
import Typewriter from "./Typewriter";

const Hero = () => {
	return (
		<section
			id="hero"
			className="relative mb-10 flex w-full flex-col items-center justify-center px-6 py-10"
		>
			<div className="m-6">
				<img
					src={ArtPic}
					alt="Some Image"
					className="h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72"
				/>
			</div>

			{/* <div>
				<h1 className="text-6xl font-semibold" id="hero-title">
					<Typewriter speed={100} cursor>
						<>
							Hi, <span className="font-bold text-green-400">Kayvan</span> here.
						</>
					</Typewriter>
				</h1>
			</div>

			<div className="mt-4 text-center text-3xl text-gray-400">
				Code-driven. Product-focused. Business-savvy.
			</div>

			<div className="text-muted-foreground mt-4 max-w-[600px] text-center text-lg">
				I'm a software and ML engineer driven by curiosity and scale - from shaping data
				infrastructure and AI driven systems to building intelligence into real-world
				platforms. I love bridging the gap between raw data, applied machine learning, and
				impactful products.
			</div> */}

			<h1
				className="text-center text-4xl font-semibold sm:text-5xl lg:text-6xl xl:text-7xl"
				id="hero-title"
			>
				<Typewriter speed={100} cursor>
					<>
						Hi, <span className="font-bold text-green-400">Kayvan</span> here.
					</>
				</Typewriter>
			</h1>

			<div
				className="mt-4 text-center text-xl text-gray-400 sm:text-2xl lg:text-3xl"
				id="hero-subtitle"
			>
				Code-driven. Product-focused. Business-savvy.
			</div>

			<div
				className="text-muted-foreground mt-4 max-w-[600px] text-center text-base sm:text-lg lg:text-xl"
				id="hero-description"
			>
				I'm a software and ML engineer driven by curiosity and scale – from shaping data
				infrastructure and AI-driven systems to building intelligence into real-world
				platforms. I love bridging the gap between raw data, applied machine learning, and
				impactful products.
			</div>

			<Button
				variant="outline"
				size="lg"
				className="mt-10 mb-4 gap-2 text-lg text-green-400"
				asChild
			>
				{/* <FaEnvelope size={40} /> Say Hi! */}
				<a href="#contact" className="flex items-center gap-2">
					<FaEnvelope size={20} />
					<span>Say Hi!</span>
				</a>
			</Button>
		</section>
	);
};

export default Hero;
