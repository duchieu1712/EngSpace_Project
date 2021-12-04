import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

const sidebarHomeConfig = [
  { href: "/", icon: <CottageRoundedIcon style={{fontSize:"35px"}} />, title: "Home page" },
  { href: "/topic", icon: <LocalOfferRoundedIcon style={{fontSize:"35px"}}/>, title: "Topic" },
  { href: "/forum", icon: <ForumRoundedIcon style={{fontSize:"35px"}}/>, title: "Forum" },
  { href: "/about", icon: <InfoRoundedIcon style={{fontSize:"35px"}}/>, title: "About us" },
  { href: "/faq", icon: <LiveHelpRoundedIcon style={{fontSize:"35px"}}/>, title: "FAQ" },

];

export default sidebarHomeConfig;
