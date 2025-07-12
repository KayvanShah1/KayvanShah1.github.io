import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "./ui/navigation-menu";

const navItems: { label: string; href: string }[] = [
	{ label: "Home", href: "#home" },
	{ label: "About", href: "#about" },
	{ label: "Experience", href: "#experience" },
	{ label: "Projects", href: "#projects" },
];

const Navbar = () => {
	const [active, setActive] = useState("Home");
	// const [toggle, setToggle] = useState(false);

	return (
		<header className="bg-background/80 fixed top-0 z-50 w-full border-b backdrop-blur">
			<div className="container flex h-16 items-center justify-between px-4">
				{/* Brand */}
				<a href="/" className="text-2xl font-semibold tracking-tight">
					Kayvan Shah
				</a>

				{/* Desktop Nav */}

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
				<ModeToggle />

				{/* Mobile Nav */}
				<Sheet>
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
					<SheetContent side="right" className="flex flex-col gap-6 p-6">
						<div className="text-lg font-semibold">Menu</div>
						<nav className="flex flex-col gap-4">
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
							<ModeToggle />
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
};

export default Navbar;
