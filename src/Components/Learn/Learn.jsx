import { Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
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
  const [total, setTotal] = useState(0);

  const createQuizs = () => {
    setQuizList(terms.sort(() => Math.round(Math.random()) - 0.5));
  };

  const createOptions = () => {
    quizList.map((item, index) => {
      if (index !== currentQuiz && item !== undefined && index < 4) {
        // options.push(item);
        setOptions((arr) => [...arr, item]);
      }
    });
    // console.log("randomOption",randomOption);
    // setOptions((arr) => [...arr, randomOption]);
    setOptions((arr) => [...arr, quizList[currentQuiz]]);
    // options.push(quizList[currentQuiz]);
  };

  useEffect(() => {
    createQuizs();
  }, []);

  useEffect(() => {
    createOptions();
  }, [quizList]);

  useEffect(() => {
    setOptions(options.sort(() => Math.round(Math.random()) - 0.5));
  }, [options]);

  const handleOption = (optionItem) => {
    if (optionItem == quizList[currentQuiz].word) {
      console.log("yes");
      setTotal(total + 1);
    } else {
      console.log("no");
    }
  };

  console.log(quizList);
  console.log("options", options);
  console.log(total);

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
                onClick={() => handleOption(item.word)}
              >
                <p>{item?.word}</p>
              </Box>
            );
          }
        })}
      </Box>
    </Box>
  );
}
