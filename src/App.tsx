import About from "@/components/features/profile/About";
import Contact from "@/components/features/profile/Contact";
import Education from "@/components/features/profile/Education";
import Experience from "@/components/features/profile/Experience";
import Hero from "@/components/features/profile/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ScrollTop } from "@/components/scroll-top";
import { ThemeProvider } from "@/components/theme-provider";
import Projects from "./components/features/profile/Projects";
import Leadership from "./components/features/profile/Leadership";
import Skills from "./components/features/profile/Skills";

function HomePage() {
	return (
		<>
			<Navbar />
			<main className="mx-auto max-w-screen overflow-x-hidden md:max-w-screen-xl">
				<Hero />
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Leadership />
				<Education />
				<Contact />
			</main>
			<Footer />
			<ScrollTop />
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
