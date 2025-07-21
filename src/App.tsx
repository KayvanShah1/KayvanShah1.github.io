import { ThemeProvider } from "@/components/theme-provider";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function HomePage() {
	return (
		<div className="no-scrollbar min-h-screen flex-col overflow-x-hidden">
			<Navbar />
			<Hero />
			<About />
			<Education />
			<Contact />
			<Footer />
		</div>
	);
}

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<HomePage />
		</ThemeProvider>
	);
}

export default App;
