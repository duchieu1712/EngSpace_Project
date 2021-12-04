import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Container,
  IconButton,
  Tooltip,
  Dialog,
} from "@mui/material";
import Course from "../../Components/Course/Course";
import "./FoldersOfUser.scss";
import FolderModal from "../../Components/FolderModal/FolderModal";
import CourseToFolder from "../../Components/CourseToFolder/CourseToFolder";
import { getFolderByUserID, deleteFolder } from "../../Redux/Actions/folder";
import Loading from "../../Components/Loading/Loading";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import MyButton from "../../Utils/Button/MyButton";

export default function FoldersOfUser() {
  const { folderByUser, loading } = useSelector((state) => state.folderReducer);
  const {currentUser} = useSelector(state => state.userReducer)
  const [openModal, setOpenModal] = useState(false);
  const [openAddCourse, setOpenAddFolder] = useState(false);
  const [folderSelect, setFolderSelect] = useState({});
  const [coursesOfFolder, setCoursesOfFolder] = useState([])
  const [isUpdate, setIsUpdate] = useState(false);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFolderByUserID(currentUser.id));
    // eslint-disable-next-line
  }, []);

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
  const handleDeleteFolder = (folderID) => {
    dispatch(deleteFolder(folderID))
    window.location.reload()
  }
  const closeModal = () => {
    setOpenModal(!openModal);
    setFolderSelect({});
    setIsUpdate(false);
  };
  const closeModalCourse = () => {
    setOpenAddFolder(false);
  };

  if(loading){
    return <Loading/>
  }
  return (
    <Box className="folderBackground">
      <Box className="head">
        <Container
          fixed
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h4>Danh sách thư mục của bạn</h4>
          <Box>
            <MyButton variant="contained" onClick={createFolder}>
              Tạo thư mục mới
            </MyButton>
          </Box>
        </Container>
      </Box>
      <Container fixed>
        {folderByUser.map((item, index) => (
          <Box className="folderItem">
            <Box className="folderTitle">
              <Box>
                <h5 style={{fontWeight:600}}>{item.name}</h5>
                <h6>{item.sets.length} học phần</h6>
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
                    <EditRoundedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Xóa thư mục">
                  <IconButton onClick={() => handleDeleteFolder(item.id)}>
                    <DeleteRoundedIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            <Box className="coursesFolder">
              {item.sets.map((course, courseIndex) => (           
                  <Course course={course} />
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
          user = {currentUser.username}
        />
      </Dialog>
      <Dialog open={openAddCourse}>
        <CourseToFolder user={currentUser.id} onClose={closeModalCourse} courseList={coursesOfFolder}/>
      </Dialog>
    </Box>
  );
}
