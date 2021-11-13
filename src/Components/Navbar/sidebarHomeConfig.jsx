import DvrRoundedIcon from '@mui/icons-material/DvrRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const sidebarHomeConfig = [
  { href: "/", icon: <HomeRoundedIcon style={{fontSize:"35px"}} />, title: "Home page" },
  { href: "/topic", icon: <DvrRoundedIcon style={{fontSize:"35px"}}/>, title: "Topic" },
  { href: "/about", icon: <InfoRoundedIcon style={{fontSize:"35px"}}/>, title: "About us" },
  { href: "/faq", icon: <LiveHelpRoundedIcon style={{fontSize:"35px"}}/>, title: "FAQ" },
];

export default sidebarHomeConfig;
