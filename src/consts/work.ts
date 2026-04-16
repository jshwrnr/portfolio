import deelLogo from "../assets/work/deel.jpg";
import superLogo from "../assets/work/super.jpg";
import lifesliceLogo from "../assets/work/lifeslice.png";
import cryptoFightersLogo from "../assets/work/cryptofighters.svg";
import designByAyeletLogo from "../assets/work/designbyayelet.svg";
import inboxZeroLogo from "../assets/work/inbox-zero.png";
import mixflowLogo from "../assets/work/mixflow.svg";

export const experience: Project[] = [
  {
    title: "Inbox Zero",
    logo: inboxZeroLogo.src,
    website: "https://getinboxzero.com",
    subtitle: "Full-stack Developer",
    start: 2025,
    end: 2026,
  },
  {
    title: "Super",
    logo: superLogo.src,
    website: "https://super.so",
    subtitle: "Full-stack Developer",
    start: 2021,
    end: 2025,
  },
  {
    title: "Deel",
    logo: deelLogo.src,
    website: "https://deel.com",
    subtitle: "Lead Frontend Developer",
    start: 2018,
    end: 2020,
  },
  {
    title: "Lifeslice",
    logo: lifesliceLogo.src,
    website:
      "https://web.archive.org/web/20181130032312/https://www.lifeslice.io",
    subtitle: "Frontend Developer",
    start: 2017,
    end: 2018,
  },
];

export const projects: Project[] = [
  {
    title: "mixflow",
    logo: mixflowLogo.src, 
    website: "https://mixflow.app",
    subtitle: "Distraction free mixes",
    start: 2026,
  },
  {
    title: "Design by Ayelet",
    logo: designByAyeletLogo.src,
    website: "https://designbyayelet.com",
    subtitle: "Creating confident businesses for daring dreamers",
    start: 2024,
  },
  {
    title: "CryptoFighters",
    logo: cryptoFightersLogo.src,
    website: "https://cryptofighters.io",
    subtitle: "Collect, battle, and level up unique NFT fighters",
    start: 2017,
    end: 2018,
  },
];
