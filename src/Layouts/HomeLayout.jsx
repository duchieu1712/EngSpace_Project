import React, { useState,useEffect } from "react";
// import Footer from "../Components/Footer/Footer";
import { useDispatch } from "react-redux";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import sidebarHomeConfig from "../Components/Navbar/sidebarHomeConfig";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import "./LayoutStyle.scss";
import { getTopicList } from "../Redux/Actions/topic";

// const theme = createTheme({
//   typography: {
//     "fontFamily": `"Quicksand", sans-serif`,
//     fontWeight: 500
//    }
// });
const HomeLayout = (props) => {
  const [navOpen, setNavOpen] = useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    dispatch(getTopicList());
    // eslint-disable-next-line
  }, []);
  return (
    // <ThemeProvider theme={theme}>
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
        <Box sx={{ marginTop: "80px" }}>{props.children}</Box>
        {/* <Footer /> */}
      </div>
    // </ThemeProvider>
  );
};

export default HomeLayout;
