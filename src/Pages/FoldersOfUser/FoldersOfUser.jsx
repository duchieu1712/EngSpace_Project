import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Container,
  Button,
  IconButton,
  Tooltip,
  Dialog,
} from "@mui/material";
import Course from "../../Components/Course/Course";
import "./FoldersOfUser.scss";
import FolderModal from "../../Components/FolderModal/FolderModal";
import CourseToFolder from "../../Components/CourseToFolder/CourseToFolder";
export default function FoldersOfUser() {
  const folders = [
    {
      idFolder: 1,
      nameFolder: "Khoa học",
      description: "Học phần liên quan đến khoa học",
      courseList: [
        {
          id: 1,
          name: "Toán",
        },
        {
          id: 2,
          name: "Lý",
          folderID:1
        },
        {
          id: 3,
          name: "Hóa",
          folderID:"1"
        },
        {
          id: 4,
          name: "Sinh",
          folderID:"1"
        },
      ],
    },
    {
      idFolder: 2,
      nameFolder: "Xã hội",
      description: "Học phần liên quan đến xã hội",
      courseList: [
        {
          id: 5,
          name: "Văn",
          folderID:"2"
        },
        {
          id: 6,
          name: "Sử",
          folderID:"2"
        },
      ],
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [openAddCourse, setOpenAddFolder] = useState(false);
  const [folderSelect, setFolderSelect] = useState({});
  const [coursesOfFolder, setCoursesOfFolder] = useState([])
  const [isUpdate, setIsUpdate] = useState(false);
  
  const createFolder = () => {
    setOpenModal(!openModal);
  };
  const addCourse = (folder) => {
    setOpenAddFolder(!openAddCourse);
    setCoursesOfFolder(folder)
  };
  const updateFolder = (folder) => {
    setOpenModal(!openModal);
    setIsUpdate(!isUpdate);
    setFolderSelect(folder);
  };
  const closeModal = () => {
    setOpenModal(!openModal);
    setFolderSelect({});
    setIsUpdate(false);
  };
  const closeModalCourse = () => {
    setOpenAddFolder(false);
  };

  return (
    <Box className="folderBackground">
      <Box className="head">
        <Container
          fixed
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h3>Danh sách thư mục của bạn</h3>
          <Box>
            <Button variant="contained" onClick={createFolder}>
              Tạo thư mục mới
            </Button>
          </Box>
        </Container>
      </Box>
      <Container fixed>
        {folders.map((item, index) => (
          <Box className="folderItem">
            <Box className="folderTitle">
              <Box>
                <h4>{item.nameFolder}</h4>
                <h6>{item.courseList.length} học phần</h6>
                <p>{item.description}</p>
              </Box>
              <Box className="folderOptions">
                <Tooltip title="Thêm học phần">
                  <IconButton onClick={() => addCourse(item)}>
                    <AddIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Sửa thư mục">
                  <IconButton onClick={() => updateFolder(item)}>
                    <AddIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Xóa thư mục">
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            <Box className="coursesFolder">
              {item.courseList.map((course, courseIndex) => (
                <Box style={{ marginRight: "30px" }}>
                  <Course course={course} />
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Container>
      <Dialog open={openModal}>
        <FolderModal
          onClose={closeModal}
          folderSelected={folderSelect}
          isUpdate={isUpdate}
        />
      </Dialog>
      <Dialog open={openAddCourse}>
        <CourseToFolder onClose={closeModalCourse} courseList={coursesOfFolder}/>
      </Dialog>
    </Box>
  );
}
