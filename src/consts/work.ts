import deelLogo from "../assets/work/deel.jpg";
import superLogo from "../assets/work/super.jpg";
import lifesliceLogo from "../assets/work/lifeslice.png";
import cryptoFightersLogo from "../assets/work/cryptofighters.svg";
import designByAyeletLogo from "../assets/work/designbyayelet.png";
import inboxZeroLogo from "../assets/work/inbox-zero.png";

export const experience: Project[] = [
  {
    title: "Inbox Zero",
    logo: inboxZeroLogo.src,
    website: "",
    role: "Full-stack Developer",
    start: 2025,
    end: 2026,
  },
  {
    title: "Super",
    logo: superLogo.src,
    website: "https://super.so",
    role: "Full-stack Developer",
    start: 2021,
    end: 2025,
  },
  {
    title: "Deel",
    logo: deelLogo.src,
    website: "https://deel.com",
    role: "Lead Frontend Developer",
    start: 2018,
    end: 2020,
  },
  {
    title: "Lifeslice",
    logo: lifesliceLogo.src,
    website:
      "https://web.archive.org/web/20181130032312/https://www.lifeslice.io",
    role: "Frontend Developer",
    start: 2017,
    end: 2018,
  },
];

export const projects: Project[] = [
  {
    title: "Design by Ayelet",
    logo: designByAyeletLogo.src,
    bg: "rgb(255, 240, 240)",
    website: "https://designbyayelet.com",
    role: "Full-stack Developer",
    start: 2024,
  },
  {
    title: "CryptoFighters",
    logo: cryptoFightersLogo.src,
    website: "https://cryptofighters.io",
    role: "Frontend Developer",
    start: 2017,
    end: 2018,
  },
];
