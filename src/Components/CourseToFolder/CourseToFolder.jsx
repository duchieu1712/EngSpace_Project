import React, { useEffect, useState } from "react";
import { Box, IconButton, Divider, Paper } from "@mui/material";
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MyButton from "../../Utils/Button/MyButton";
export default function CourseToFolder({ onClose, courseList }) {
  const courses = [
    {
      id: 1,
      name: "Toán",
      folderID: [1],
    },
    {
      id: 2,
      name: "Lý",
      folderID: [1],
    },
    {
      id: 3,
      name: "Hóa",
      folderID: [1],
    },
    {
      id: 4,
      name: "Sinh",
      folderID: [1],
    },
    {
      id: 5,
      name: "Văn",
      folderID: [2, 3],
    },
    {
      id: 6,
      name: "Sử",
      folderID: [2, 3],
    },
  ];
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
        {courses.map((item, index) => (
          <Paper className="courseItem">
            {item.name}
            {item.folderID.includes(courseList.idFolder) ? (
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
