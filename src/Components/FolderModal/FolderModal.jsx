import { Box, Divider, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MyButton from "../../Utils/Button/MyButton";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./FolderModal.scss";
import { useDispatch } from "react-redux";
import { addFolder, updateFolder } from "../../Redux/Actions/folder";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function FolderModal({
  onClose,
  folderSelected,
  isUpdate,
  user,
}) {
  const [folder, setFolder] = useState({
    is_public: true,
    user: {
      username: user,
    },
    name: folderSelected.name || "",
    description: folderSelected.description || "",
  });
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
    onClose();
    window.location.reload()
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFolder((obj) => ({ ...obj, [name]: value }));
  };
  const handleSubmit = () => {
    if (isUpdate) {
      dispatch(updateFolder(folderSelected.id, folder));
      setOpen(true);
    } else {
      dispatch(addFolder(folder));
      setOpen(true);
    }
  };

  return (
    <Box className="createModal">
      <Box className="modalTitle">
        <h4>{isUpdate ? "Sửa thư mục" : "Thêm thư mục"}</h4>
        <IconButton onClick={handleClose}>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box className="modalBody">
        <TextField
          label="Tên thư mục"
          name="name"
          style={{ width: "45%" }}
          value={folder.name}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          label="Mô tả"
          name="description"
          value={folder.description}
          style={{ width: "45%" }}
          onChange={(e) => handleChange(e)}
        />
      </Box>
      <Box style={{ width: "100%", textAlign: "right" }}>
        <MyButton onClick={handleSubmit}>
          {isUpdate ? "Cập nhật" : "Thêm"}
        </MyButton>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {isUpdate ? (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Cập nhật thư mục thành công!!!
          </Alert>
        ) : (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Thêm thư mục thành công!!!
          </Alert>
        )}
      </Snackbar>
    </Box>
  );
}
