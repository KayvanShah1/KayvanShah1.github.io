import { ThemeProvider } from "@/components/theme-provider";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function HomePage() {
	return (
		<>
			<Navbar />
			<main className="max-w-screen overflow-x-hidden">
				<Hero />
				<About />
				<Experience />
				<Education />
				<Contact />
			</main>
			<Footer />
		</>
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
