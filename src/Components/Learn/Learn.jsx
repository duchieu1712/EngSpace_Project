import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import "./Learn.scss";

export default function Learn() {
  const terms = [
    {
      word: "go",
      define: "đi",
    },
    {
      word: "hi",
      define: "chào",
    },
    {
      word: "bye",
      define: "tạm biệt",
    },
    {
      word: "good",
      define: "tốt",
    },
    {
      word: "eat",
      define: "ăn",
    },
    {
      word: "drink",
      define: "uống",
    },
  ];
  const [quizList, setQuizList] = useState([]);
  const [options, setOptions] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [result, setResult] = useState(0);
  const [open, setOpen] = useState(false);

  const createQuizs = () => {
    setQuizList(terms.sort(() => Math.round(Math.random()) - 0.5));
  };

  const createOptions = () => {
    quizList.map((item, index) => {
      if (index !== currentQuiz && item !== undefined ) {
        setOptions((arr) => [...arr, item]);
      }
    });
    setOptions((arr) => [...arr, quizList[currentQuiz]]);
    setOptions((arr) => [...arr.sort(() => Math.round(Math.random()) - 0.5)]);
  };

  useEffect(() => {
    createQuizs();
  }, []);

  useEffect(() => {
    createOptions();
  }, [quizList]);

  // useEffect(() => {
  //   handleNext()
  // },[currentQuiz])

  const handleResult = (optionItem) => {
    setOpen(true);
    if (optionItem === quizList[currentQuiz].word) {
      setCheckAnswer(true);
      setResult(result + 1);
    } else {
      setCheckAnswer(false);
      console.log("no");
    }
  };
  const handleNext = () => {
    if(currentQuiz < quizList.length){
      setCurrentQuiz(currentQuiz + 1)
    }else{
      setCurrentQuiz(0);
    }
    setOptions([])
    createOptions()
    setOpen(false)
  }

  console.log(quizList);
  console.log("options", options);
  console.log(result);

  return (
    <Box className="contentLearn">
      <Box className="define">
        <h6>Định nghĩa</h6>
        <p>{quizList[currentQuiz]?.define}</p>
      </Box>
      <Box className="options">
        <h6>Chọn thuật ngữ đúng</h6>
        {options.map((item, index) => {
          if (item !== undefined) {
            return (
              <Box
                className="optionItem"
                key={index}
                onClick={() => handleResult(item.word)}
              >
                <p>{item?.word}</p>
              </Box>
            );
          }
        })}
      </Box>
      <Collapse in={open}>
        {checkAnswer ? (
          <Alert severity="success">
            This is a success alert — check it out!<Button onClick={handleNext}>click</Button>
          </Alert>
        ) : (
          <Alert severity="error">
            This is an error alert — check it out!<Button onClick={handleNext}>click</Button>
          </Alert>
        )}
      </Collapse>
    </Box>
  );
}
