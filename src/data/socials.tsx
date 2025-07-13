import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

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
];

export default socialLinks;
