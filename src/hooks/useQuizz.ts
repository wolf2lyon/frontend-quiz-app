import { useState } from "react";
import useFetch from "./useFetch";
import { Quizz } from "../types/data.type.quizz";
const useQuizz = () => {
  const { dataQuizz, loading, error } = useFetch();
  const [toogleTheme, setToogleTheme] = useState<boolean>(false);
  const [countTotalCorrectAnswer, setTotalCorrectAnswer] = useState<number>(0);

  const showOpcionsQuizz: Quizz[] = dataQuizz?.quizzes?.map((quiz) => ({
    title: quiz.title,
    icon: quiz.icon,
  }));

  const changeTotalCorrectAnswer = ({ number = 0 }: { number?: number }) => {
    setTotalCorrectAnswer(number);
  };
  const filterDataQuizz = (title: string) => {
    // Verifica que dataQuizz y dataQuizz.quizzes existan y sean un array
    if (!dataQuizz || !Array.isArray(dataQuizz.quizzes)) {
      return { title: '', icon: '', questions: [] }; // Retorna un arreglo vacío si no hay datos
    }

    // Busca el quiz que coincide con el título
    const filteredQuiz: Quizz = dataQuizz.quizzes?.find(
      (quiz) => quiz.title.toLowerCase() === title.toLowerCase()
    ) || { title: '', icon: '', questions: [] }; // Valor por defecto
    

    // Si se encuentra un quiz, lo devuelve en un array, de lo contrario, retorna un array vacío
    return filteredQuiz;
  };
  const totalQuestions = (title: string) => {
    const quiz = dataQuizz.quizzes?.find(
      (quiz) => quiz.title.toLowerCase() === title.toLowerCase()
    );
    // Si no se encuentra el quiz o no tiene preguntas, retorna 0
    return quiz?.questions ? quiz.questions.length : 0;
  };

  const verifyOptions = (selectOption: string, answer: string) => {
    console.log(selectOption, answer);
    if (selectOption === answer) return true;
    return false;
  };

  const changeToogle = ({ boolean = false }: { boolean?: boolean }) => {
    setToogleTheme(boolean);
  };

  return {
    dataQuizz,
    showOpcionsQuizz,
    loading,
    toogleTheme,
    setToogleTheme,
    error,
    filterDataQuizz,
    totalQuestions,
    verifyOptions,
    changeTotalCorrectAnswer,
    countTotalCorrectAnswer,
    changeToogle
  };
};

export default useQuizz
