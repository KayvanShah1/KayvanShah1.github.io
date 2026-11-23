import profilePic from "@/assets/img/profile-pics/profile-formal.png";

const About = () => {
	return (
		<section id="about" className="mx-6 my-10 flex flex-col justify-center py-10 sm:px-8 md:mx-4 md:px-16">
			<h1 className="mb-8 text-4xl font-semibold">About Me</h1>

			<div className="flex flex-col-reverse items-center gap-8 md:flex-row">
				<div className="space-y-4 text-lg leading-relaxed text-muted-foreground md:w-3/5">
					<p className="text-foreground">
						GridLedger started with a question I couldn’t answer from a chart. I could see how much wind and
						solar power was going unused in Brazil. But if I were paying for a battery, I’d want to know
						when that power was available, how much I could store, and how often I’d get to use it. I
						started modeling different battery sizes to see when the investment might make sense.
					</p>
					<p>
						I write things down while I’m figuring them out. If I can explain how a system works but stumble
						over why someone would pay for it, that’s usually the part I need to understand better.
					</p>
					<p>
						That’s what I like about forward-deployed engineering. I want to be there when someone tries the
						first version on a real piece of work. If they open their spreadsheet to double-check an answer,
						I want to see what they’re checking. They know something about the business that I haven’t
						accounted for yet.
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
