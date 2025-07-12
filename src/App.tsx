import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="overflow-x-hidden text-neutral-300 antialiased">
				<div>Welcome to My App</div>
				<div className="container mx-auto px-8">
					<Navbar />
					<Footer />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
