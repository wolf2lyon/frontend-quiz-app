import { Quizz} from "../types/data.type.quizz";
import QuizzThemeHeader from "../QuizzThemeHeader";
import QuizzToggle from "../QuizzToggle";
import QuizzHeader from "../QuizzHeader";
import QuizzList from "../QuizzList";
import QuizzItem from "../QuizzItem";
import AppQuizz from "../AppQuizz";

const QuizzHome = ({
  toogleTheme,
  showOpcionsQuizz,
  changeToogle
}: {
  toogleTheme: boolean;
  showOpcionsQuizz: Quizz[];
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
          render={(quizz: Quizz, index: number) => {
            if(showOpcionsQuizz){
              return (
                <QuizzItem
                  key={index}
                  title={quizz.title}
                  icon={quizz.icon}
                  toogleTheme={toogleTheme}
                />
              )
            }else{
              return <div></div>
            }
          }}
        >
          {(quizz: Quizz, index: number) => {
            if(showOpcionsQuizz){
              return (
                <QuizzItem
                  key={index}
                  title={quizz.title}
                  icon={quizz.icon}
                  toogleTheme={toogleTheme}
                />
              )
            }else{
              return <div></div>
            }
          }}
        </QuizzList>
      )}
      toogleTheme={toogleTheme}
    />
  );
};

export default QuizzHome;
