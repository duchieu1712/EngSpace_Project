import { Box } from "@mui/material";
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
  
  useEffect(() => {
    createQuizs();
    createOptions();
  }, []);


  const createOptions = () => {
    setOptions((arr) => [...arr, quizList[currentQuiz]]);
    let i = 0;
    // do{
    //   if(i !== currentQuiz){
    //     setOptions((arr) => [...arr,quizList[i]])
    //     i++
    //   }else{
    //     i++
    //   }
    // }while(options.length < 5)
  }

  const createQuizs = () => {
    setQuizList(terms.sort(() => Math.round(Math.random()) - 0.5));
  };

  console.log(quizList);
  console.log(options);
  return (
    <Box>
      {/* <h6>Định nghĩa</h6>
      <button >click</button> */}
    </Box>
  );
}
