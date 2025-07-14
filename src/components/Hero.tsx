import ArtPic from "@/assets/hero-abstract.png";
import { Button } from "./ui/button";
import { FaEnvelope } from "react-icons/fa";
import Typewriter from "./Typewriter";

const Hero = () => {
	return (
		<div className="relative container flex h-screen w-full flex-col items-center justify-center px-10">
			<div className="mb-6">
				<img src={ArtPic} alt="Some Image" className="h-64 w-64" />
			</div>

			<div>
				<h1 className="text-6xl font-semibold">
					<Typewriter speed={100} cursor>
						<>
							Hi, <span className="font-bold text-green-400">Kayvan</span> here.
						</>
					</Typewriter>
					{/* Hi, <span className="font-bold text-green-400">Kayvan</span> here. */}
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
			</div>

			<Button variant="outline" size="lg" className="my-4 gap-2 text-lg text-green-400">
				<FaEnvelope size={40} /> Say Hi!
			</Button>
		</div>
	);
};

export default Hero;
