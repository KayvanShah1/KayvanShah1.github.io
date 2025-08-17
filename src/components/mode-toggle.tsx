import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
	const { setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		setMounted(true);
		try {
			const stored = localStorage.getItem("theme");
			if (stored === "light") setIsDark(false);
			else if (stored === "dark") setIsDark(true);
			else
				setIsDark(
					window.matchMedia("(prefers-color-scheme: dark)").matches ||
						document.documentElement.classList.contains("dark")
				);
		} catch {
			setIsDark(document.documentElement.classList.contains("dark"));
		}
	}, []);

	if (!mounted) return null;

	const toggle = () => {
		const next = isDark ? "light" : "dark";
		setTheme(next);
		setIsDark((d) => !d); // ensure instant icon flip
	};

	return (
		<Button
			variant="outline"
			size="icon"
			className="relative"
			onClick={toggle}
			aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
			title={`Switch to ${isDark ? "light" : "dark"} mode`}
		>
			<Sun
				className={`h-[1.2rem] w-[1.2rem] transition-all ${
					isDark ? "scale-0 -rotate-90" : "scale-100 rotate-0"
				}`}
			/>
			<Moon
				className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
					isDark ? "scale-100 rotate-0" : "scale-0 rotate-90"
				}`}
			/>
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
