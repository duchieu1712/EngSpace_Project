import React from "react";
import NavSection from "./NavSection";

import { Box, Hidden, Divider, Drawer, Typography } from "@mui/material";


const Navbar = ({ onNavOpen, onNavClose, navConfig }) => {

  const content = (
    <Box
      height="100%"
      width="270px"
      display="flex"
      flexDirection="column"
      boxShadow={3}
    >
      <Box display="flex" flexDirection="column" alignItems="center" p={3}>
        <h3 style={{fontWeight: 700}}>EngSpace</h3>
        <Typography variant="caption">version 1.0.0</Typography>
      </Box>

      <Divider />

      <NavSection navConfig={navConfig} />

    </Box>
  );

  return (
    <div>
        <Drawer
          anchor="left"
          open={onNavOpen}
          onClose={onNavClose}
          variant="temporary"
        >
          {content}
        </Drawer>
    </div>
  );
};

export default Navbar;
