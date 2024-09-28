import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonNextQuizz = ({
  active = false,
  passQuestion,
  countQuestion,
  nextQuestion,
  changeNextQuestion,
  changeSelectOption,
  changeCorrectAnswer,
  changeIsClick,
  changeIsDisabled,
  dataTotalQuestion,
  countTotalCorrectAnswer,
  changeTotalCorrectAnswer,
  selectOption,
  answer,
  title,
}: {
  active: boolean;
  passQuestion: ({number}:{number:number}) => void;
  countQuestion: number;
  nextQuestion: boolean;
  changeNextQuestion: ({boolean}:{boolean:boolean}) => void;
  changeSelectOption: ({string}:{string:string}) => void;
  changeCorrectAnswer: ({boolean}:{boolean:boolean}) => void;
  changeIsClick: ({boolean}:{boolean:boolean}) => void;
  changeIsDisabled: ({boolean}:{boolean:boolean}) => void;
  dataTotalQuestion: number;
  countTotalCorrectAnswer: number;
  changeTotalCorrectAnswer: ({number}:{number:number}) => void;
  selectOption: string;
  answer: string;
  title: string;
}) => {
  const navigate = useNavigate();
  const handleClickNextQuizz = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changeNextQuestion({boolean:!nextQuestion});
    changeSelectOption({string:""});
    changeCorrectAnswer({boolean:false});
    changeIsClick({boolean:false});
    changeIsDisabled({boolean:false});
    if( countQuestion <= dataTotalQuestion){
      passQuestion({number :countQuestion += 1});
    }
    if (answer === selectOption) {
      changeTotalCorrectAnswer({number:countTotalCorrectAnswer += 1});
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
