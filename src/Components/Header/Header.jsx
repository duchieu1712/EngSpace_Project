import React, { useState, useEffect } from "react";
import { alpha, styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MoreIcon from "@mui/icons-material/MoreVert";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/lab/Autocomplete";
import ListItemIcon from "@mui/material/ListItemIcon";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import CollectionsBookmarkRoundedIcon from "@mui/icons-material/CollectionsBookmarkRounded";
import { Button } from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../Assets/image/logo_engspace.png";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCourseList } from "../../Redux/Actions/course";
import TokenService from "../../Services/services.token";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function Header({ onHandleNav }) {
  const { currentUser } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const { courseList } = useSelector((state) => state.courseReducer);
  useEffect(() => {
    dispatch(getCourseList());
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const history = useHistory();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const signOut = () => {
    TokenService.removeUser();
    window.location.href = "/";
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <NavLink to="/profile" style={{ color: "black", textDecoration: "none" }}>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <PermContactCalendarRoundedIcon />
          </ListItemIcon>
          Profile
        </MenuItem>
      </NavLink>

      <NavLink
        to="/mycourses"
        style={{ color: "black", textDecoration: "none" }}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <CollectionsBookmarkRoundedIcon />
          </ListItemIcon>
          Courses
        </MenuItem>
      </NavLink>

      <NavLink
        to="/myfolders"
        style={{ color: "black", textDecoration: "none" }}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <FolderOpenRoundedIcon />
          </ListItemIcon>
          Folders
        </MenuItem>
      </NavLink>

      <MenuItem onClick={signOut}>
        <ListItemIcon>
          <LogoutRoundedIcon />
        </ListItemIcon>
        Sign out
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {currentUser ? (
        <div>
          <MenuItem>
            <Badge style={{ marginRight: "10px" }}>
              <AccountCircle />
            </Badge>

            <NavLink
              to="/profile"
              style={{ color: "black", textDecoration: "none" }}
            >
              Profile
            </NavLink>
          </MenuItem>
          <MenuItem>
            <Badge style={{ marginRight: "10px" }}>
              <CollectionsBookmarkRoundedIcon />
            </Badge>
            <NavLink
              to="/mycourses"
              style={{ color: "black", textDecoration: "none" }}
            >
              Courses
            </NavLink>
          </MenuItem>
          <MenuItem>
            <Badge style={{ marginRight: "10px" }}>
              <FolderOpenRoundedIcon />
            </Badge>
            <NavLink
              to="/myfolders"
              style={{ color: "black", textDecoration: "none" }}
            >
              Folders
            </NavLink>
          </MenuItem>
          <MenuItem onClick={signOut}>
            <Badge style={{ marginRight: "10px" }}>
              <LogoutRoundedIcon />
            </Badge>
            Sign out
          </MenuItem>
        </div>
      ) : (
        <div>
          <MenuItem>
            <Badge style={{ marginRight: "10px" }}>
              <LoginRoundedIcon />
            </Badge>
            <NavLink
              to="/signin"
              style={{ color: "black", textDecoration: "none" }}
            >
              Sign in
            </NavLink>
          </MenuItem>
          <MenuItem>
            <Badge style={{ marginRight: "10px" }}>
              <LockOpenRoundedIcon />
            </Badge>
            <NavLink
              to="/signup"
              style={{ color: "black", textDecoration: "none" }}
            >
              Sign up
            </NavLink>
          </MenuItem>
        </div>
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ zIndex: 10 }}>
        <Toolbar>
          <IconButton
            edge="start"
            sx={{ mr: 2 }}
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              onHandleNav();
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} style={{ width: "35px", marginRight: "10px" }} />
          <Typography
            style={{ display: { xs: "none", sm: "block" } }}
            variant="h6"
            noWrap
          >
            EngSpace
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <Autocomplete
              onChange={(event, value) => {
                if (value) {
                  history.push(`/coursedetail/${value.id}`);
                }
              }}
              freeSolo
              getOptionLabel={(option) => option.name}
              options={courseList}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  style={{ border: "none", paddingLeft: 50 }}
                />
              )}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {currentUser ? (
              <div>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            ) : (
              <div>
                <NavLink
                  to="/signin"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Button color="inherit">Sign in</Button>
                </NavLink>

                <NavLink
                  to="/signup"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Button color="inherit">Sign up</Button>
                </NavLink>
              </div>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
