import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaFacebook, FaGoogleScholar, FaKaggle } from "react-icons/fa6";

const socialLinks = [
	{
		icon: <FaGithub className="h-5 w-5" />,
		href: "https://github.com/KayvanShah1", // Replace with your link
		label: "GitHub",
	},
	{
		icon: <FaLinkedin className="h-5 w-5" />,
		href: "https://linkedin.com/in/kayvanshah999", // Replace with your link
		label: "LinkedIn",
	},
	{
		icon: <FaInstagram className="h-5 w-5" />,
		href: "https://instagram.com/kayvanshah", // Replace with your link
		label: "Instagram",
	},
	{
		icon: <FaFacebook className="h-5 w-5" />,
		href: "https://www.facebook.com/kayvan.shah.108", // Replace with your link
		label: "Facebook",
	},
	{
		icon: <FaGoogleScholar className="h-5 w-5" />,
		href: "https://scholar.google.com/citations?user=zNzHN0MAAAAJ&hl=en", // Replace with your link
		label: "Google Scholar",
	},
	{
		icon: <FaKaggle className="h-5 w-5" />,
		href: "https://www.kaggle.com/kayvanshah", // Replace with your link
		label: "Kaggle",
	},
];

export default socialLinks;
