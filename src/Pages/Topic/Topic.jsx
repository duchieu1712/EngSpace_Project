import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../../Utils/TabPanel/TabPanel";
import Course from "../../Components/Course/Course";
import Slider from "react-slick";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import "./Topic.scss";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Topic = () => {
  const topics = [
    {
      id: "123",
      name: "Khoa học",
      courses: [
        {
          id: "1",
          name: "Toán",
          terms: [
            { id: "1", name: "hello", descrip: "chào" },
            { id: "2", name: "bye", descrip: "tạm biệt" },
          ],
        },
        {
          id: "2",
          name: "Lý",
          terms: [
            { id: "1", name: "hello", descrip: "chào" },
            { id: "2", name: "bye", descrip: "tạm biệt" },
          ],
        },
        {
          id: "2",
          name: "Lý",
          terms: [
            { id: "1", name: "hello", descrip: "chào" },
            { id: "2", name: "bye", descrip: "tạm biệt" },
          ],
        },
        {
          id: "2",
          name: "Lý",
          terms: [
            { id: "1", name: "hello", descrip: "chào" },
            { id: "2", name: "bye", descrip: "tạm biệt" },
          ],
        },
        {
          id: "2",
          name: "Lý",
          terms: [
            { id: "1", name: "hello", descrip: "chào" },
            { id: "2", name: "bye", descrip: "tạm biệt" },
          ],
        },
        {
          id: "2",
          name: "Lý",
          terms: [
            { id: "1", name: "hello", descrip: "chào" },
            { id: "2", name: "bye", descrip: "tạm biệt" },
          ],
        },
        {
          id: "2",
          name: "Lý",
          terms: [
            { id: "1", name: "hello", descrip: "chào" },
            { id: "2", name: "bye", descrip: "tạm biệt" },
          ],
        },
        {
          id: "2",
          name: "Lý",
          terms: [
            { id: "1", name: "hello", descrip: "chào" },
            { id: "2", name: "bye", descrip: "tạm biệt" },
          ],
        },
      ],
    },
    {
      id: "12",
      name: "Xã hội",
      courses: [
        {
          id: "1",
          name: "Văn",
          terms: [
            { id: "1", name: "hello", descrip: "chào" },
            { id: "2", name: "bye", descrip: "tạm biệt" },
          ],
        },
        {
          id: "2",
          name: "Sử",
          terms: [
            { id: "1", name: "hello", descrip: "chào" },
            { id: "2", name: "bye", descrip: "tạm biệt" },
          ],
        },
        {
          id: "2",
          name: "Sử",
          terms: [
            { id: "1", name: "hello", descrip: "chào" },
            { id: "2", name: "bye", descrip: "tạm biệt" },
          ],
        },
        {
          id: "2",
          name: "Sử",
          terms: [
            { id: "1", name: "hello", descrip: "chào" },
            { id: "2", name: "bye", descrip: "tạm biệt" },
          ],
        },
        {
          id: "2",
          name: "Sử",
          terms: [
            { id: "1", name: "hello", descrip: "chào" },
            { id: "2", name: "bye", descrip: "tạm biệt" },
          ],
        },
      ],
    },
  ];

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    rows: 1,
    slidesToScroll: 4,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  return (
    <Box sx={{ width: "100%", marginTop: "80px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {topics.map((topic, index) => (
            <Tab label={topic.name} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {topics.map((topic, index) => (
        <TabPanel value={value} index={index}>
          <Slider {...settings}>
            {topic.courses.map((course) => (
              <Course course={course} />
            ))}
          </Slider>
        </TabPanel>
      ))}
    </Box>
  );
};

export default Topic;
