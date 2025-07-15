import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "./ui/navigation-menu";

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
			className="bg-background fixed top-0 right-0 left-0 z-50 w-full backdrop-blur"
			id="navbar"
			role="navigation"
		>
			<div className="relative mx-4 flex h-16 max-w-screen-xl items-center justify-between border-b py-3 sm:px-16 md:px-16 lg:px-16">
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
											active === item.label
												? "text-foreground"
												: "text-muted-foreground"
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

					<ModeToggle />
				</div>

				{/* Mobile Nav */}
				<div className="flex items-center justify-between gap-2 md:hidden">
					<ModeToggle />
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="md:hidden"
								aria-label="Open Menu"
							>
								<Menu className="h-5 w-5" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="flex h-1/3 w-1/3 flex-col gap-6 p-6">
							<VisuallyHidden>
								<SheetTitle>Menu</SheetTitle>
								<SheetDescription>
									Navigation menu for mobile users
								</SheetDescription>
							</VisuallyHidden>
							<div className="text-lg font-semibold">Menu</div>

							<nav className="flex flex-col gap-4" aria-label="Mobile navigation">
								{navItems.map((item) => (
									<a
										key={item.label}
										href={item.href}
										onClick={() => setActive(item.label)}
										className={`text-base font-medium transition ${
											active === item.label
												? "text-foreground"
												: "text-muted-foreground"
										} hover:text-foreground`}
									>
										{item.label}
									</a>
								))}
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
