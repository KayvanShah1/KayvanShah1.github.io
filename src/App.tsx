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

				<main className="container mt-10 flex-1 px-24 pt-20">
					{/* This is where you place the main sections like About, Projects, etc. */}

					<section id="home">Home Section</section>
					<section id="about">About Section</section>
					<section id="experience">Experience Section</section>
					<section id="projects">Projects Section</section>
				</main>

				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
