import { useState } from "react";
import { useFetch } from "./useFetch";

export const useQuizz = () => {
  const { dataQuizz, loading, error } = useFetch();
  const [toogleTheme,setToogleTheme] = useState(false);

  const showOpcionsQuizz = dataQuizz.quizzes.map(quiz => (
    {
      title:quiz.title,
      icon:quiz.icon
    }
  ))

  const filterDataQuizz = (title:string) => {
    return dataQuizz.quizzes.find( (quiz:any) => quiz.title.toLowerCase() === title?.toLowerCase());
  }
  const totalQuestions = (title:string) => {
    return dataQuizz.quizzes.find( (quiz:any) => quiz.title.toLowerCase() === title?.toLowerCase())?.questions.length;
  }

  const verifyOptions = (selectOption:any, answer:string) => {
    console.log(selectOption,answer)
    if(selectOption === answer) return true;
    return false;
  }


  return {
    dataQuizz,
    showOpcionsQuizz,
    loading,
    toogleTheme,
    setToogleTheme,
    error,
    filterDataQuizz,
    totalQuestions,
    verifyOptions
  }
};
