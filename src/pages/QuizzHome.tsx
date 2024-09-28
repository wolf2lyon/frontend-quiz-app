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
      onShowHeader={() => <QuizzHeader />}
      onShowList={() => (
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
          {(quizz: Quizz, index: number) => {
            return (
              <QuizzItem key={index} title={quizz.title} icon={quizz.icon} />
            );
          }}
        </QuizzList>
      )}
    />
  );
};

export default QuizzHome;
