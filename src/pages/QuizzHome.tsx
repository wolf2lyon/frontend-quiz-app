import { Quizz, Quizzes } from "../types/data.type.quizz";
import QuizzThemeHeader from "../QuizzThemeHeader";
import QuizzToggle from "../QuizzToggle";
import QuizzHeader from "../QuizzHeader";
import QuizzList from "../QuizzList";
import QuizzItem from "../QuizzItem";
import AppQuizz from "../AppQuizz";

const QuizzHome = ({
  toogleTheme,
  showOpcionsQuizz,
  dataQuizz,
  changeToogle
}: {
  toogleTheme: boolean;
  showOpcionsQuizz: Quizz[];
  dataQuizz: Quizzes;
  changeToogle: ({ boolean}: { boolean?: boolean }) => void;
}) => {
  return (
    <AppQuizz
      onShowThemeHeader={() => (
        <QuizzThemeHeader
          onShowToggle={() => (
            <QuizzToggle toogle={toogleTheme} changeToogle={changeToogle} />
          )}
        />
      )}
      onShowHeader={() => <QuizzHeader toogleTheme={toogleTheme}/>}
      onShowList={() => (
        <QuizzList
          quizzesInformationStart={showOpcionsQuizz}
          toogleTheme={toogleTheme}
          render={(quizz: any, index: number) => (
            <QuizzItem
              key={index}
              title={quizz.title}
              icon={quizz.icon}
              dataQuizz={dataQuizz}
              toogleTheme={toogleTheme}
            />
          )}
        >
          {(quizz: Quizz, index: number) => {
            return (
              <QuizzItem key={index} title={quizz.title} icon={quizz.icon} toogleTheme={toogleTheme} />
            );
          }}
        </QuizzList>
      )}
      toogleTheme={toogleTheme}
    />
  );
};

export default QuizzHome;
