import PropTypes from "prop-types";
import { alpha, styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from "@mui/icons-material/Menu";
import Hidden from "@mui/material/Hidden";
const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up("md")]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up("md")]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

export default function TopNavbar({ openNavbar }) {
  return (
    <RootStyle>
      <ToolbarStyle>
        <Hidden mdUp>
          <IconButton
            onClick={() => openNavbar()}
            sx={{ mr: 1, color: "text.primary" }}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <AccountCircleIcon/>
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}

TopNavbar.propTypes = {
    openNavbar: PropTypes.func,
};