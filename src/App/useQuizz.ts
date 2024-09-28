import { useState } from "react";
import { useFetch } from "./useFetch";
import { Quizz } from "../types/data.type.quizz";
export const useQuizz = () => {
  const { dataQuizz, loading, error } = useFetch();
  const [toogleTheme,setToogleTheme] = useState<boolean>(false);

  const showOpcionsQuizz:Quizz[] = dataQuizz?.quizzes?.map(quiz => (
    {
      title:quiz.title,
      icon:quiz.icon
    }
  ))

  const filterDataQuizz = (title:string) => {
    return dataQuizz.quizzes.find( (quiz) => quiz.title.toLocaleLowerCase() === title?.toLowerCase());
  }
  const totalQuestions = (title:string) => {
    return dataQuizz.quizzes.find( (quiz) => quiz.title.toLowerCase() === title?.toLowerCase())?.question?.length;
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
