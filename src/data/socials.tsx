import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import { FaGoogleScholar, FaKaggle } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const socialLinks = [
	{
		icon: <FaGithub className="h-5 w-5" />,
		svg: FaGithub,
		href: "https://github.com/KayvanShah1", // Replace with your link
		label: "GitHub",
		username: "KayvanShah1",
	},
	{
		icon: <FaLinkedin className="h-5 w-5" />,
		svg: FaLinkedin,
		href: "https://linkedin.com/in/kayvanshah999", // Replace with your link
		label: "LinkedIn",
		username: "kayvanshah999",
	},
	{
		icon: <FaMedium className="h-5 w-5" />,
		svg: FaMedium,
		href: "https://medium.com/@KayvanShah1", // Replace with your link
		label: "Medium",
		username: "@KayvanShah1",
	},
	{
		icon: <FaGoogleScholar className="h-5 w-5" />,
		svg: FaGoogleScholar,
		href: "https://scholar.google.com/citations?user=zNzHN0MAAAAJ&hl=en", // Replace with your link
		label: "Google Scholar",
	},
	{
		icon: <FaKaggle className="h-5 w-5" />,
		svg: FaKaggle,
		href: "https://www.kaggle.com/kayvanshah", // Replace with your link
		label: "Kaggle",
		username: "kayvanshah",
	},
	{
		icon: <HiMail className="h-5 w-5" />,
		svg: HiMail,
		href: "mailto:kayvan.taiyo@gmail.com", // Replace with your link
		label: "Email",
	},
];

export default socialLinks;
