import profilePic from "@/assets/img/profile.jpg";

const About = () => {
	return (
		<section id="about" className="mx-6 my-10 flex flex-col justify-center py-10 sm:px-8 md:mx-4 md:px-16">
			<h1 className="mb-8 text-4xl font-semibold">About Me</h1>

			<div className="flex flex-col-reverse items-center gap-8 md:flex-row">
				{/* Text */}
				<div className="text-muted-foreground space-y-4 text-lg leading-relaxed md:w-3/5">
					<p className="text-foreground mb-6 font-medium">
						Builder first. Not just of pipelines, but of systems that solve real problems.
					</p>
					<p className="">
						I'm drawn to systems — not just ones that process data, but those that drive decisions, power
						products, and adapt as things evolve. I build software that connects the dots between
						infrastructure, intelligence, and end-user impact.
					</p>
					<p className="">
						My work lives at the intersection of engineering and business. I care about how things scale,
						how teams collaborate, and how technical choices ripple into product experience and strategy.
						Whether it's an ML pipeline or a backend service, I aim to make each system resilient,
						transparent, and purposeful.
					</p>
					<p>
						To me, building is as much about alignment as it is execution — bridging technical depth with
						business context, and shaping solutions that actually move the needle.
					</p>
				</div>

				{/* Image */}
				<div className="flex w-full justify-center md:w-2/5">
					<img
						src={profilePic}
						alt="Kayvan Shah"
						className="border-muted h-96 w-96 rounded-2xl border object-cover shadow-lg transition-transform duration-350 hover:scale-110 hover:shadow-xl"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;

// import profilePic from "@/assets/img/profile.jpg";
// import { motion } from "framer-motion";

// const About = () => {
// 	return (
// 		<section id="aboutMe" className="mx-6 my-10 flex flex-col justify-center py-10 sm:px-8 md:mx-4 md:px-16">
// 			{/* Heading with marker highlight */}
// 			<div className="relative mb-2 w-fit">
// 				<h1 className="text-foreground relative z-10 text-4xl font-semibold">About Me</h1>
// 				<span className="bg-primary/30 absolute bottom-1 left-0 -z-10 h-2 w-full rounded-sm" />
// 			</div>

// 			{/* Animated trail subtitle */}
// 			<div className="mb-6 flex items-center gap-3">
// 				<span className="h-3 w-3 animate-pulse rounded-full bg-green-400" />
// 				<p className="text-sm tracking-wider text-green-400 uppercase">
// 					Builder mindset. Business-aware. Systems thinker.
// 				</p>
// 			</div>

// 			{/* Main content layout */}
// 			<div className="flex flex-col-reverse items-center gap-8 md:flex-row">
// 				{/* Text section with vertical accent line */}
// 				<motion.div
// 					initial={{ opacity: 0, x: -30 }}
// 					whileInView={{ opacity: 1, x: 0 }}
// 					transition={{ duration: 0.6, ease: "easeOut" }}
// 					viewport={{ once: true }}
// 					className="border-primary text-muted-foreground space-y-4 border-l-4 pl-6 text-lg leading-relaxed md:w-3/5"
// 				>
// 					<p className="text-foreground font-medium">
// 						Builder first. Not just of pipelines, but of systems that solve real problems.
// 					</p>
// 					<p>
// 						I'm drawn to systems — not just ones that process data, but those that drive decisions, power
// 						products, and adapt as things evolve. I build software that connects the dots between
// 						infrastructure, intelligence, and end-user impact.
// 					</p>
// 					<p>
// 						My work lives at the intersection of engineering and business. I care about how things scale,
// 						how teams collaborate, and how technical choices ripple into product experience and strategy.
// 						Whether it's an ML pipeline or a backend service, I aim to make each system resilient,
// 						transparent, and purposeful.
// 					</p>
// 					<p>
// 						To me, building is as much about alignment as it is execution — bridging technical depth with
// 						business context, and shaping solutions that actually move the needle.
// 					</p>
// 				</motion.div>

// 				{/* Image with subtle hover motion */}
// 				<motion.div
// 					initial={{ opacity: 0, x: 30 }}
// 					whileInView={{ opacity: 1, x: 0 }}
// 					transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
// 					viewport={{ once: true }}
// 					className="flex w-full justify-center md:w-2/5"
// 				>
// 					<img
// 						src={profilePic}
// 						alt="Kayvan Shah"
// 						className="border-muted h-96 w-96 rounded-2xl border object-cover shadow-lg transition-transform duration-300 hover:scale-105"
// 					/>
// 				</motion.div>
// 			</div>
// 		</section>
// 	);
// };

// export default About;
