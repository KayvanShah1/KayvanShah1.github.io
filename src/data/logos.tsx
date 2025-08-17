import climateConnectLogo from "@/assets/img/companies/ccd-logo.svg";
import lisusLogo from "@/assets/img/companies/lisus-logo.svg";
import taiyoLogo from "@/assets/img/companies/taiyo-logo.svg";
import uscIsiLogo from "@/assets/img/companies/usc-isi-logo.png";
import uscViterbiLogo from "@/assets/img/companies/usc-viterbi-logo-gray-blk.png";

type Logo = {
	src: string;
	alt: string;
};

const Logos: Logo[] = [
	{
		src: uscIsiLogo,
		alt: "USC Information Sciences Institute",
	},
	{
		src: lisusLogo,
		alt: "Lisus",
	},
	{
		src: taiyoLogo,
		alt: "Taiyō.AI",
	},
	{
		src: climateConnectLogo,
		alt: "Climate Connect Digital",
	},
	{
		src: uscViterbiLogo,
		alt: "USC Viterbi School of Engineering",
	},
];

export { Logos };
