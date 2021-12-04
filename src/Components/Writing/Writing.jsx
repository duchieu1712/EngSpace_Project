import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
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
    if (terms[currentWord].term.toLowerCase().trim().includes(answer.toLowerCase().trim())) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };
  const handleNext = () => {
    if(currentWord < terms.length - 1){
      setCurrentWord(currentWord + 1);
    }else{
      setCurrentWord(0)
    }
    setOpen(false);
    setAnswer("");
  };
  return (
    <div style={{ width: "100%" }}>
      <p style={{fontSize:'25px', fontWeight:600}}>{terms[currentWord]?.definition}</p>
      <Divider style={{ margin: "20px 0" }} />

      <TextField
        label="Nhập tiếng Anh"
        value={answer}
        onChange={(e) => handleChange(e)}
        style={{display:"block", marginBottom:"20px"}}
      />
      <MyButton style={{margin:0}} onClick={() => handleCheck()}>Kiểm tra</MyButton>

      <Collapse in={open}>
        {check ? (
          <Alert severity="success">
            Bạn đang làm rất tốt !!!
            <Button onClick={() => handleNext()} style={{ marginLeft: "40px" }}>
              Câu tiếp theo
            </Button>
          </Alert>
        ) : (
          <Alert severity="error">
            Bạn cần cố gắng nhiều hơn !!!
            <Button onClick={() => handleNext()} style={{ marginLeft: "40px" }}>
              Câu tiếp theo
            </Button>
          </Alert>
        )}
      </Collapse>
    </div>
  );
}
