import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TopicIcon from "@mui/icons-material/Topic";
import DvrIcon from '@mui/icons-material/Dvr';

const sidebarAdminConfig = [
  { href: "/admin", icon: <DvrIcon />, title: "Dashboard" },
  { href: "/admin/user", icon: <PeopleAltIcon />, title: "User" },
  { href: "/admin/topic", icon: <TopicIcon />, title: "Topic" },
];

export default sidebarAdminConfig;
