import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import InfoIcon from "@mui/icons-material/Info";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import HomeIcon from "@mui/icons-material/Home";

const sidebarHomeConfig = [
  { href: "/", icon: <HomeIcon />, title: "Home page" },
  { href: "/topic", icon: <FormatListBulletedIcon />, title: "Topic" },
  { href: "/about", icon: <InfoIcon />, title: "About us" },
  { href: "/faq", icon: <LiveHelpIcon />, title: "FAQ" },
];

export default sidebarHomeConfig;
