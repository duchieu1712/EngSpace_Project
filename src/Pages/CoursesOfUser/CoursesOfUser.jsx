import {
  Box,
  Container,
  Button,
  MenuItem,
  ListItemIcon,
  Menu,
  Dialog,
} from "@mui/material";
import React, { useState } from "react";
import Course from "../../Components/Course/Course";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./CoursesOfUser.scss";
import { NavLink } from "react-router-dom";
import PersonAdd from "@mui/icons-material/PersonAdd";
import CreateFolderModal from "../../Components/CreateFolderModal/CreateFolderModal";

const CoursesOfUser = () => {
  const courses = [
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
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openModal, setOpenModal] = useState(false);
  const handleToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const createFolder = () => {
    setOpenModal(!openModal);
    handleClose();
  };
  const closeModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <Box className="courseBackground">
      <Container fixed>
        <Box className="head">
          <h3>Danh sách học phần của bạn</h3>
          <Box>
            <Button
              variant="contained"
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleToggle}
            >
              Tạo mới
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <NavLink to="/createcourse" style={{ color: "black" }}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Tạo học phần
                </MenuItem>
              </NavLink>

              <MenuItem onClick={createFolder}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Tạo thư mục
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box className="courses">
          {courses.map((item, index) => (
            <Course course={item} />
          ))}
        </Box>
      </Container>
      <Dialog open={openModal}>
        <CreateFolderModal onClose={closeModal}/>
      </Dialog>
    </Box>
  );
};

export default CoursesOfUser;
