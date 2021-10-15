import React from "react";
import NavSection from "./NavSection";

import { Box, Hidden, Divider, Drawer, Typography } from "@mui/material";

// const currentUser = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : null;

const Navbar = ({ onNavOpen, onNavClose, navConfig, isHome }) => {
  //   const location = useLocation();
  //   useEffect(() => {
  //     if (openMobile && onMobileClose) {
  //       onMobileClose();
  //     }
  //   }, []);

  const content = (
    <Box
      height="100%"
      width="270px"
      display="flex"
      flexDirection="column"
      boxShadow={3}
    >
      <Box display="flex" flexDirection="column" alignItems="center" p={3}>
        <Typography variant="h4">EngSpace</Typography>
        <Typography variant="caption">version 1.0.0</Typography>
      </Box>

      <Divider />

      <NavSection navConfig={navConfig} />

    </Box>
  );

  return (
    <div>
      {isHome ? (
        <Drawer
          anchor="left"
          open={onNavOpen}
          onClose={onNavClose}
          variant="temporary"
        >
          {content}
        </Drawer>
      ) : (
        <div>
          <Hidden mdUp>
            <Drawer
              anchor="left"
              onClose={onNavClose}
              open={onNavOpen} // đóng mở tùy thuộc vào click
              variant="temporary"
              // kiểu temporary có một lớp phủ mờ hiện ra cho đến khi bạn chọn xong thì Drawer mới đóng lại
            >
              {content}
            </Drawer>
          </Hidden>

          <Hidden mdDown>
            <Drawer anchor="left" open variant="persistent">
              {content}
            </Drawer>
          </Hidden>
        </div>
      )}
    </div>
  );
};

export default Navbar;
