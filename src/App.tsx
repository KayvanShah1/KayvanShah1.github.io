import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@/components/theme-provider";
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
			<Education />
			<Contact />
			<Footer />
		</div>
	);
}

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<BrowserRouter>
				<Routes>
					{/* main route */}
					<Route path="/" element={<HomePage />} />

					{/* catch-all redirect */}
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
