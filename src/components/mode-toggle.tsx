import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const isDark = resolvedTheme === "dark";

	const toggle = () => {
		const next = isDark ? "light" : "dark";
		setTheme(next);
	};

	return (
		<Button
			variant="outline"
			size="icon"
			className="relative rounded-full"
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
