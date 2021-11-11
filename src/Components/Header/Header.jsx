import React, { useState } from "react";
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
import SubdirectoryArrowLeftIcon from "@mui/icons-material/SubdirectoryArrowLeft";
import CreateIcon from "@mui/icons-material/Create";
import MoreIcon from "@mui/icons-material/MoreVert";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/lab/Autocomplete";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/image/logo_engspace.png";
import "./Header.scss";

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

const fakeData = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
];
export default function Header({ onHandleNav }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [test, setTest] = useState(true);

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
            <PersonAdd fontSize="small" />
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
            <PersonAdd fontSize="small" />
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
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Folders
        </MenuItem>
      </NavLink>


      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
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
      {test ? (
        <div>
          <MenuItem>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <NavLink
              to="/profile"
              style={{ color: "black", textDecoration: "none" }}
            >
              Profile
            </NavLink>
          </MenuItem>
          <MenuItem>
            <IconButton color="inherit">
              <Badge>
                <SubdirectoryArrowLeftIcon />
              </Badge>
            </IconButton>
            <NavLink
              to="/mycourses"
              style={{ color: "black", textDecoration: "none" }}
            >
              courses
            </NavLink>
          </MenuItem>
          <MenuItem>
            <IconButton color="inherit">
              <Badge>
                <SubdirectoryArrowLeftIcon />
              </Badge>
            </IconButton>
            <NavLink
              to="/myfolders"
              style={{ color: "black", textDecoration: "none" }}
            >
              Folders
            </NavLink>
          </MenuItem>
          <MenuItem>
            <IconButton color="inherit">
              <Badge>
                <SubdirectoryArrowLeftIcon />
              </Badge>
            </IconButton>
            <p>Sign out</p>
          </MenuItem>
        </div>
      ) : (
        <div>
          <MenuItem>
            <IconButton color="inherit">
              <Badge>
                <SubdirectoryArrowLeftIcon />
              </Badge>
            </IconButton>
            <NavLink
              to="/signin"
              style={{ color: "black", textDecoration: "none" }}
            >
              Sign in
            </NavLink>
          </MenuItem>
          <MenuItem>
            <IconButton color="inherit">
              <Badge>
                <CreateIcon />
              </Badge>
            </IconButton>
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
            sx={{ display: { xs: "none", sm: "block" } }}
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
              freeSolo
              sx={{ width: 300 }}
              options={fakeData}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
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
            {test ? (
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
