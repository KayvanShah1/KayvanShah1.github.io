import socialLinks from "@/data/socials";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer
			className="border-border text-muted-foreground bg-background right-0 left-0 mx-4 my-10 border-t text-sm"
			role="contentinfo"
			aria-label="Footer"
			id="footer"
		>
			<div className="relative flex max-w-screen-xl flex-col items-center justify-between gap-4 py-6 sm:px-6 md:flex-row md:px-16">
				{/* Left: Copyright */}
				<div className="order-2 w-full text-center md:order-none md:text-left">
					{/* Copyright © {year} Kayvan Shah. All rights reserved. */}
					{/* <p>Built and designed by Kayvan Shah</p> */}
					<p>Copyright © {year} Kayvan Shah. All rights reserved.</p>
				</div>

				{/* Right: Social Icons */}
				<nav className="order-1 flex gap-6 md:order-none" aria-label="Social media">
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
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
