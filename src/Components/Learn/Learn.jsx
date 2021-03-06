import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import "./Learn.scss";
import Dialog from "@mui/material/Dialog";

export default function Learn({terms}) {
  const [quizList, setQuizList] = useState([]);
  const [options, setOptions] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [result, setResult] = useState(0);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const createQuizsAndOptions = () => {
    let list = terms.sort(() => Math.round(Math.random()) - 0.5);
    // this step is to synchronize the input list for quiz and option
    setQuizList(list);
    createOptions(list);
  };

  const createOptions = (list) => {
    // reset the options before adding new one
    setOptions([]);
    // number of option that would show
    // let numOpts = 4;
    let tempQuiz = [...list];
    // tempQuiz = tempQuiz.sort(() => Math.round(Math.random()) - 0.5)
    let count = 0;
    tempQuiz.map((item, index) => {
      if (item.term !== list[currentQuiz].term) {
        // because it needs 1 space for correct answer
        if (count <= 2) {
          setOptions((arr) => [...arr, item]);
          count++;
        }
      }
    });
    setOptions((arr) => [...arr, list[currentQuiz]]);
    setOptions((arr) => [...arr.sort(() => Math.round(Math.random()) - 0.5)]);
  };

  useEffect(() => {
    createQuizsAndOptions();
    // eslint-disable-next-line
  }, [currentQuiz]);
  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleResult = (optionItem) => {
    setOpen(true);
    if (optionItem === quizList[currentQuiz].term) {
      setCheckAnswer(true);
      setResult(result + 1);
    } else {
      setCheckAnswer(false);
    }
    setTotal(total + 1);
  };
  const handleNext = () => {
    if (currentQuiz < quizList.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    } else {
      setCurrentQuiz(0);
    }
    setOpen(false);
  };
  const handleComplete = () => {
    setOpenDialog(true)
    setOpen(false)
  }

  return (
    <Box className="contentLearn">
      <Box className="define">
        <h6>??i??nh nghi??a</h6>
        <p style={{fontSize:"18px",fontWeight:500}}>{quizList[currentQuiz]?.definition}</p>
      </Box>
      <Box className="options">
        <h6>Cho??n thu????t ng???? ??u??ng</h6>
        {options.map((item, index) => {
          if (item !== undefined) {
            return (
              <Box
                className="optionItem"
                key={index}
                onClick={() => handleResult(item.term)}
              >
                <p>{item?.term}</p>
              </Box>
            );
          }
        })}
      </Box>
      <Collapse in={open}>
        {checkAnswer ? (
          <Alert severity="success">
            Ba??n ??ang la??m r????t t????t !!!
            <Button onClick={handleNext} style={{ marginLeft: "40px" }}>
              C??u ti????p theo
            </Button>
            <Button onClick={() => handleComplete()}>Hoa??n tha??nh</Button>
          </Alert>
        ) : (
          <Alert severity="error">
            Ba??n c????n c???? g????ng nhi????u h??n !!!
            <Button onClick={handleNext}>C??u ti????p theo</Button>
            <Button onClick={() => handleComplete()}>Hoa??n tha??nh</Button>
          </Alert>
        )}
      </Collapse>
      <Dialog open={openDialog} onClose={handleClose}>
        <Box style={{minWidth:"400px", display:"flex",alignItems:"center", justifyContent:"center", minHeight:"150px"}}>
          <h6 style={{marginBottom: 0}}>
            Ba??n tra?? l????i ??u??ng {result} c??u tr??n t????ng s???? {total} c??u
          </h6>
        </Box>
      </Dialog>
    </Box>
  );
}
