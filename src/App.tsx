import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="no-scrollbar min-h-screen flex-col overflow-x-hidden">
				<Navbar />
				<Hero />
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
