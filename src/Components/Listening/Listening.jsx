import React, { useEffect, useState } from "react";
import Speech from "speak-tts";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import MyButton from "../../Utils/Button/MyButton";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";

export default function Listening({ terms }) {
  const speech = new Speech();
  const [currentWord, setCurrentWord] = useState(0);
  const [answer, setAnswer] = useState("");
  const [check, setCheck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    speech.init({
      volume: 1,
      lang: "en-US",
      rate: 1,
      pitch: 1,
      voice: "Google UK English Female",
      splitSentences: true,
    });
    // eslint-disable-next-line
  }, [currentWord]);
  const handleChange = (e) => {
    setAnswer(e.target.value);
  };
  const handleListen = () => {
    speech.speak({
      text: terms[currentWord].term,
      queue: false,
    });
  };
  const handleCheck = () => {
    setOpen(true);
    if (terms[currentWord].term.toLowerCase() === answer.toLowerCase()) {
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
    <div>
      <FormControl sx={{ m: 1, width: "400px", margin: 0 }} variant="outlined">
        <InputLabel>Nhập những gì bạn nghe thấy</InputLabel>
        <OutlinedInput
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" onClick={() => handleListen()}>
                <VolumeUpIcon />
              </IconButton>
            </InputAdornment>
          }
          value={answer}
          onChange={handleChange}
          label="Nhập những gì bạn nghe thấy"
        />
      </FormControl>
      <MyButton style={{display:"block", margin: "10px 0"}} onClick={handleCheck}>Kiểm tra</MyButton>
      <Divider style={{ margin: "20px 0" }} />
      <p style={{ fontSize: "25px", fontWeight: 600 }}>
        {terms[currentWord].definition}
      </p>
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
