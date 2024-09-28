import QuizzThemeHeader from "../QuizzThemeHeader";
import { QuizzToggle } from "../QuizzToggle";
import { QuizzHeader } from "../QuizzHeader";
import { QuizzList } from "../QuizzList";
import QuizzItem from "../QuizzItem";
import AppQuizz from "../AppQuizz";
import { Quizz, Quizzes } from "../types/data.type.quizz";

const QuizzHome = ({
  toogleTheme,
  setToogleTheme,
  showOpcionsQuizz,
  dataQuizz,
}: {
  toogleTheme: boolean;
  setToogleTheme: React.Dispatch<React.SetStateAction<boolean>>;
  showOpcionsQuizz: Quizz[];
  dataQuizz: Quizzes;
}) => {
  return (
    <AppQuizz
      onShowThemeHeader={() => (
        <QuizzThemeHeader
          onShowToggle={() => (
            <QuizzToggle toogle={toogleTheme} setToogle={setToogleTheme} />
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
