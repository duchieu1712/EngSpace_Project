import { Box, Container, Button } from "@mui/material";
import React from "react";
import Course from "../../Components/Course/Course";
import "./CoursesOfUser.scss";
import { NavLink } from "react-router-dom";

const CoursesOfUser = () => {
  const courses = [
    {
      id: "1",
      name: "Toán",
    },
    {
      id: "2",
      name: "Lý",
    },
    {
      id: "2",
      name: "Lý",
    },
    {
      id: "2",
      name: "Lý",
    },
    {
      id: "2",
      name: "Lý",
    },
    {
      id: "2",
      name: "Lý",
    },
    {
      id: "2",
      name: "Lý",
    },
    {
      id: "2",
      name: "Lý",
    },
  ];

  

  return (
    <Box className="courseBackground">
      <Box className="head">
        <Container
          fixed
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h3>Danh sách học phần của bạn</h3>
          <Box>
            <NavLink
              to="/createcourse"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Button variant="contained">Tạo học phần mới</Button>
            </NavLink>
          </Box>
        </Container>
      </Box>
      <Container fixed>
        <Box className="courses">
          {courses.map((item, index) => (
            <Box className="courseItem">
              <Course course={item} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CoursesOfUser;
