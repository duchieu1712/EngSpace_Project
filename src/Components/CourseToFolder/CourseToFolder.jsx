import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, IconButton, Divider, Paper } from "@mui/material";
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { getCoursesByUserID } from "../../Redux/Actions/course";
export default function CourseToFolder({ onClose, courseList }) {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoursesByUserID(5));
  }, []);
  const { coursesByUser } = useSelector((state) => state.courseReducer);

  const handleAdd = (course) => {
    alert(course)
  }
  const handleDelete = (course) => {
    alert(course)
  }
  const closeModal = () => {
    onClose();
  };

  return (
    <Box className="createModal">
      <Box className="modalTitle">
        <h4>Thêm học phần vào thư mục</h4>
        <IconButton onClick={closeModal}>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box className="addCourseBody">
        {coursesByUser.map((item, index) => (
          <Paper className="courseItem">
            {item.name}
            {item.set_folders.includes(courseList.id) ? (
              <IconButton color="primary" onClick={() => handleAdd(item.id)}>
                <AddRoundedIcon />
              </IconButton>
            ) : (
              <IconButton color="error" onClick={() => handleDelete(item.id)}>
                <RemoveRoundedIcon />
              </IconButton>
            )}
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
