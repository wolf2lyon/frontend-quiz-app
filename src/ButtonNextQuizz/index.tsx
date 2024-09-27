import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonNextQuizz = ({
  active = false,
  passQuestion,
  countQuestion,
  nextQuestion,
  setNextQuestion,
  setSelectOption,
  setCorrectAnswer,
  setIsClick,
  setIsDisabled,
  dataTotalQuestion,
  countTotalCorrectAnswer,
  setTotalCorrectAnswer,
  selectOption,
  answer,
  title,
}: {
  active: boolean;
  passQuestion: any;
  countQuestion: number;
  nextQuestion: any;
  setNextQuestion: any;
  setSelectOption: any;
  setCorrectAnswer: any;
  setIsClick: any;
  setIsDisabled: any;
  dataTotalQuestion: any;
  countTotalCorrectAnswer: any;
  setTotalCorrectAnswer: any;
  selectOption: any;
  answer: any;
  title: any;
}) => {
  const navigate = useNavigate();
  const handleClickNextQuizz = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setNextQuestion(!nextQuestion);
    setSelectOption("");
    setCorrectAnswer(false);
    setIsClick(false);
    setIsDisabled(false);
    if( countQuestion <= dataTotalQuestion){
      passQuestion((countQuestion += 1));
    }
    if (answer === selectOption) {
      setTotalCorrectAnswer((countTotalCorrectAnswer += 1));
    }
    console.log(countTotalCorrectAnswer, answer, selectOption);
    if (countQuestion > dataTotalQuestion) {
      const dataResultQuizz = {
        score: countTotalCorrectAnswer,
        totalQuestion: dataTotalQuestion,
        title: title,
      };
      navigate(`/quizz/${title.toLowerCase()}/finish-quizz`, { state: dataResultQuizz });
    }
    console.log(countQuestion,dataTotalQuestion,countQuestion>=dataTotalQuestion)
  };
  if (active)
    return (
      <button
        className="w-full bg-primary text-white text-lg font-medium  rounded-xl h-14 flex justify-center items-center mt-3 hover:bg-primary hover:opacity-50 hover:cursor-pointer"
        onClick={handleClickNextQuizz}
      >
        Next Question
      </button>
    );
};

export default ButtonNextQuizz;
