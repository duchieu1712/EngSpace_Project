import { Box, Button, Divider, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MyButton from "../../Utils/Button/MyButton";
import "./FolderModal.scss";
export default function FolderModal({ onClose, folderSelected, isUpdate }) {
  const [folder, setFolder] = useState({
    name: folderSelected.nameFolder || "",
    description: folderSelected.description || "",
  });
  const handleClose = () => {
    onClose();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFolder((obj) => ({ ...obj, [name]: value }));
  };
  const handleSubmit = () => {
    if(isUpdate){
      console.log(folderSelected.idFolder, folder);
    }else {
      console.log(folder);
    }
  }

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
        <MyButton onClick={handleSubmit}>{isUpdate ? "Cập nhật" : "Thêm"}</MyButton>
      </Box>
    </Box>
  );
}
