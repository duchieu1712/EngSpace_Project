import { Box, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Course from "../../Components/Course/Course";
import "./CoursesOfUser.scss";
import { NavLink } from "react-router-dom";
import { getCourseList } from "../../Redux/Actions/course";

const CoursesOfUser = () => {
  const dispatch = useDispatch();
  const { courseList } = useSelector((state) => state.courseReducer);
  useEffect(() => {
    dispatch(getCourseList());
  }, []);

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
          {courseList.map((item, index) => (
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
