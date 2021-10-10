import { Box, Divider, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./CreateFolderModal.scss";
export default function CreateFolderModal({ onClose }) {
  const [folder, setFolder] = useState({ name: "", description: "" });
  const handleClose = () => {
    onClose();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFolder((obj) => ({ ...obj, [name]: value }));
  };
  console.log(folder);
  return (
    <Box className="createModal">
      <Box className="modalTitle">
        <h4>Tạo thư mục</h4>
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
          onChange={(e) => handleChange(e)}
        />
        <TextField
          label="Mô tả"
          name="description"
          style={{ width: "45%" }}
          onChange={(e) => handleChange(e)}
        />
      </Box>
    </Box>
  );
}
