import { useQuizz } from "./useQuizz";
import "./App.css";
import { QuizzHeader } from "../QuizzHeader/index";
import { QuizzList } from "../QuizzList";
import QuizzItem from "../QuizzItem";
import QuizzThemeHeader from "../QuizzThemeHeader";
import { QuizzToggle } from "../QuizzToggle";
export const AppQuiz = () => {
  const {
    dataQuizz,
    loading,
    error,
    showOpcionsQuizz,
    setToogleTheme,
    toogleTheme,
  } = useQuizz();
  console.log(dataQuizz.quizzes, loading, error);
  return (
    <div className="flex flex-col items-center">
      <div className="w-4/5 ">
        <QuizzThemeHeader
          onShowToggle={() => (
            <QuizzToggle toogle={toogleTheme} setToogle={setToogleTheme} />
          )}
        ></QuizzThemeHeader>
        <QuizzHeader />
        <QuizzList
          quizzesInformationStart={showOpcionsQuizz}
          render={(quizz: any, index: number) => (
            <QuizzItem
              key={index}
              title={quizz.title}
              icon={quizz.icon}
              dataQuizz={dataQuizz}
            />
          )}
        >
          {(quizz: any, index: number) => {
            return (
              <QuizzItem key={index} title={quizz.title} icon={quizz.icon} />
            );
          }}
        </QuizzList>
      </div>
    </div>
  );
};
