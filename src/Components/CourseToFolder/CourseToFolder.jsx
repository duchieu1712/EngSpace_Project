import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, IconButton, Divider, Paper } from "@mui/material";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { getCoursesByUserID } from "../../Redux/Actions/course";
import {
  addCourseToFolder,
  deleteCourseFolder,
} from "../../Redux/Actions/folder";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CourseToFolder({ user, onClose, courseList }) {
  const { coursesByUser } = useSelector((state) => state.courseReducer);
  const [alertAdd, setAlertAdd] = useState(false);
  const [alertDel, setAlertDel] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoursesByUserID(user));
    // eslint-disable-next-line
  }, [coursesByUser]);
  

  const handleAdd = (courseID) => {
    dispatch(
      addCourseToFolder({
        folder_id: courseList.id,
        set_id: courseID,
      })
    );
    setAlertAdd(true)
  };
  const handleDelete = (courseID) => {
    dispatch(
      deleteCourseFolder({
        folder_id: courseList.id,
        set_id: courseID,
      })
    );
    setAlertDel(true)
  };
  const closeModal = () => {
    onClose();
    window.location.reload();
    setAlertDel(false)
    setAlertAdd(false)
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
              <IconButton color="error" onClick={() => handleDelete(item.id)}>
              <RemoveRoundedIcon />
            </IconButton>
            ) : (
              <IconButton color="primary" onClick={() => handleAdd(item.id)}>
              <AddRoundedIcon />
            </IconButton>
            )}
          </Paper>
        ))}
      </Box>
      <Snackbar open={alertAdd} autoHideDuration={6000} onClose={closeModal}>
        <Alert onClose={closeModal} severity="success" sx={{ width: '100%' }}>
          Thêm học phần thành công!!!
        </Alert>
      </Snackbar>
      <Snackbar open={alertDel} autoHideDuration={6000} onClose={closeModal}>
        <Alert onClose={closeModal} severity="error" sx={{ width: '100%' }}>
          Xóa học phần thành công!!!
        </Alert>
      </Snackbar>
    </Box>
  );
}
