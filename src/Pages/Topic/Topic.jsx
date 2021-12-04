import React from "react";
import { useSelector } from "react-redux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../../Utils/TabPanel/TabPanel";
import Course from "../../Components/Course/Course";
import Slider from "react-slick";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import "./Topic.scss";
import Loading from "../../Components/Loading/Loading";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Topic = () => {
  const { topicList, loading } = useSelector((state) => state.topicReducer);
  const { courseList } = useSelector((state) => state.courseReducer);


  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    rows: 1,
    slidesToScroll: 3,
    initialSlide: 0,
    swipe: false,
    nextArrow: <KeyboardArrowRightRoundedIcon />,
    prevArrow: <KeyboardArrowLeftRoundedIcon />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if(loading){
    return <Loading/>
  }
  return (
    <Box className="topicsContent container">
      <h4>Danh sách các chủ đề</h4>
      <Box className="listTopic">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {topicList.map((topic, index) => (
            <Tab label={topic.name} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {topicList.map((topic, index) => (
        <TabPanel value={value} index={index}>
          <Slider {...settings}>
            {courseList.map((course,idx) => {
              if (course.topic === topic.id) {
                return <Course course={course} />;
              }
            })}
          </Slider>
        </TabPanel>
      ))}
    </Box>
  );
};

export default Topic;
