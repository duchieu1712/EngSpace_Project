import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import sidebarHomeConfig from "../Components/Navbar/sidebarHomeConfig";
import { Box } from "@mui/material";
import "./LayoutStyle.scss";
const HomeLayout = (props) => {
  const [navOpen, setNavOpen] = useState(false);
  const handleOpen = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div className="homeLayout">
      <Header
        onHandleNav={() => {
          handleOpen();
        }}
      />
      <Navbar
        isHome={true}
        onNavOpen={navOpen}
        onNavClose={() => {
          handleOpen();
        }}
        navConfig={sidebarHomeConfig}
      />
      <Box sx={{marginTop:"60px"}}>{props.children}</Box>
      <Footer />
    </div>
  );
};

export default HomeLayout;
