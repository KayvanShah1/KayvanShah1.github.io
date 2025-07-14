import socialLinks from "@/data/socials";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="border-border text-muted-foreground bg-background right-0 left-0 mx-4 mt-10 border-t text-sm">
			<div className="relative flex max-w-screen-xl flex-col items-center justify-between gap-4 px-20 py-6 md:flex-row md:px-16">
				{/* Left: Copyright */}
				<p className="text-center md:text-left">
					Copyright © {year} Kayvan Shah. All rights reserved.
				</p>
				{/* Right: Social Icons */}
				<div className="flex gap-6">
					{socialLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={link.label}
							className="hover:text-foreground transition"
						>
							{link.icon}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
