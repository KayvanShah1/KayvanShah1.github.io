import socialLinks from "@/data/socials";

const copyrightYear = new Date().getFullYear();

const Footer = () => {
	return (
		<footer
			className="right-0 left-0 mx-4 mt-10 border-t border-border bg-background text-sm text-muted-foreground"
			role="contentinfo"
			aria-label="Footer"
			id="footer"
		>
			<div className="relative flex flex-col items-center justify-between gap-4 py-6 sm:px-6 md:px-16">
				<nav className="flex gap-6 md:order-0" aria-label="Social media">
					{socialLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							{...(link.href.startsWith("mailto:") || link.href.startsWith("tel:")
								? {}
								: { target: "_blank", rel: "noopener noreferrer" })}
							aria-label={link.label}
							className="transition hover:text-foreground"
						>
							{link.icon}
						</a>
					))}
				</nav>

				{/* Left: Copyright */}
				<div className="mb-3 w-full items-center text-center md:order-0">
					<p>Copyright © {copyrightYear} Kayvan Shah. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
