import profilePic from "@/assets/img/profile-pics/profile-formal.png";

const About = () => {
	return (
		<section id="about" className="mx-6 my-10 flex flex-col justify-center py-10 sm:px-8 md:mx-4 md:px-16">
			<h1 className="mb-8 text-4xl font-semibold">About Me</h1>

			<div className="flex flex-col-reverse items-center gap-8 md:flex-row">
				<div className="space-y-4 text-lg leading-relaxed text-muted-foreground md:w-3/5">
					<p className="mb-6 font-medium text-foreground">
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

				<div className="flex w-full justify-center md:w-2/5">
					<img
						src={profilePic}
						alt="Kayvan Shah"
						className="h-100 w-full rounded-2xl border border-muted object-cover shadow-lg transition-transform duration-350 hover:scale-110 hover:shadow-xl"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
