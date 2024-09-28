import "./App.css";
import { QuizzHeader } from "../QuizzHeader/index";
import { QuizzList } from "../QuizzList";
import QuizzItem from "../QuizzItem";
import QuizzThemeHeader from "../QuizzThemeHeader";
import { QuizzToggle } from "../QuizzToggle";
import { Quizzes,Quizz } from "../types/data.type.quizz";
export const AppQuiz = ({dataQuizz,showOpcionsQuizz,setToogleTheme,toogleTheme}:{
  dataQuizz:Quizzes,
  showOpcionsQuizz:Quizz[],
  setToogleTheme:React.Dispatch<React.SetStateAction<boolean>>; 
  toogleTheme:boolean
}) => {
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
