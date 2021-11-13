import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import MyButton from "../../Utils/Button/MyButton";
import Button from "@mui/material/Button";

export default function Writing({ terms }) {
  const [currentWord, setCurrentWord] = useState(0);
  const [check, setCheck] = useState(false);
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const handleChange = (e) => {
    setAnswer(e.target.value);
  };
  const handleCheck = () => {
    setOpen(true);
    if (terms[currentWord].term.toLowerCase().trim().includes(answer)) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };
  const handleNext = () => {
    setOpen(false);
    setCurrentWord(currentWord + 1);
    setAnswer("");
  };
  return (
    <div style={{ width: "100%" }}>
      <h6>{terms[currentWord]?.definition}</h6>
      <Divider style={{ margin: "20px 0" }} />
      <Box>
        <TextField
          label="Nhập tiếng Anh"
          value={answer}
          onChange={(e) => handleChange(e)}
        />
        <MyButton onClick={() => handleCheck()}>Kiểm tra</MyButton>
      </Box>

      <Collapse in={open}>
        {check ? (
          <Alert severity="success">
            This is a success alert — check it out!
            <Button onClick={() => handleNext()} style={{ marginLeft: "40px" }}>
              Câu tiếp theo
            </Button>
          </Alert>
        ) : (
          <Alert severity="error">
            This is an error alert — check it out!
            <Button onClick={() => handleNext()} style={{ marginLeft: "40px" }}>
              Câu tiếp theo
            </Button>
          </Alert>
        )}
      </Collapse>
    </div>
  );
}
