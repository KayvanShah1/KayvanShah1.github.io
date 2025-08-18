import { CommandPalette } from "@/components/CommandPalette";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const navItems: { label: string; href: string }[] = [
	{ label: "Home", href: "#hero" },
	{ label: "About", href: "#about" },
	{ label: "Experience", href: "#experience" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact", href: "#contact" },
];

const Navbar = () => {
	const [active, setActive] = useState("Home");
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = entry.target.getAttribute("id");
						if (id) {
							setActive(id.charAt(0).toUpperCase() + id.slice(1));
						}
					}
				});
			},
			{ rootMargin: "-50% 0px -50% 0px", threshold: 0.1 }
		);

		navItems.forEach(({ href }) => {
			const section = document.querySelector(href);
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<header
			className="bg-background sticky inset-0 top-0 z-50 w-full overflow-x-hidden"
			id="navbar"
			role="navigation"
		>
			<div className="relative mx-4 flex h-16 items-center justify-between border-b py-3 sm:px-16 md:px-16 lg:px-16">
				{/* Brand */}
				<a href="/" className="text-xl font-semibold tracking-tight">
					Kayvan Shah
				</a>

				{/* Desktop Nav */}
				<div className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
					<NavigationMenu>
						<NavigationMenuList>
							{navItems.map((item) => (
								<NavigationMenuItem key={item.label}>
									<NavigationMenuLink
										href={item.href}
										className={`text-sm font-medium transition-colors ${
											active === item.label ? "text-foreground" : "text-muted-foreground"
										} hover:text-foreground`}
										onClick={() => setActive(item.label)}
									>
										{item.label}
									</NavigationMenuLink>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>

					<div className="bg-border h-6 w-px self-center" />
					<CommandPalette />
					<ModeToggle />
				</div>

				{/* Mobile Nav using NavigationMenu */}
				<div className="bg-background flex items-center justify-between gap-2 md:hidden">
					<ModeToggle />
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setIsOpen((prev) => !prev)}
						aria-label={isOpen ? "Close Menu" : "Open Menu"}
					>
						{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</Button>
				</div>

				{isOpen && (
					<NavigationMenu className="bg-background border-border absolute top-16 right-0 z-40 origin-top transform rounded-xl border px-4 py-2 shadow-md transition-all duration-300 ease-in-out md:hidden">
						<NavigationMenuList className="flex flex-col items-center gap-1">
							{navItems.map((item, index) => (
								<React.Fragment key={item.label}>
									<NavigationMenuItem key={item.label}>
										<NavigationMenuLink
											href={item.href}
											className={`text-base font-medium transition-colors ${
												active === item.label ? "text-foreground" : "text-muted-foreground"
											} hover:text-foreground`}
											onClick={() => {
												setActive(item.label);
												setIsOpen(false);
											}}
										>
											{item.label}
										</NavigationMenuLink>
									</NavigationMenuItem>
									{index != navItems.length - 1 && (
										// <div className="bg-border mt-1 h-px min-w-full self-stretch" />
										<Separator />
									)}
								</React.Fragment>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				)}
			</div>
		</header>
	);
};

export default Navbar;
