import { useLocation } from "react-router-dom";
import { useQuizz } from "../App/useQuizz";
import { useEffect, useState } from "react";
import QuizzThemeHeader from "../QuizzThemeHeader";
import QuizzType from "../QuizzType";
import { QuizzToggle } from "../QuizzToggle";
import { QuizzTitleResult } from "../QuizzTitleResult/index";
import QuizzChartScore from "../QuizzChartScore";
import QuizzScore from "../QuizzScore";
import { ButtonPlayQuizz } from "../ButtonPlayQuizz";
import QuizzConfetti from "../QuizzConfetti";
const QuizzResult = () => {
  const location = useLocation();
  const { state } = location;
  const title = state.title;
  const score = state.score;
  const totalQuestion = state.totalQuestion;
  const { filterDataQuizz, toogleTheme, setToogleTheme } = useQuizz();
  const [dataQuizzSelection, setDataQuizzSelection] = useState<any>(undefined);
  const [showConfetti,setShowConfetti] = useState<boolean>(false);
  const [hasShownConfetti, setHasShownConfetti] = useState<boolean>(false);

  useEffect(() => {
    const selectedQuizz = filterDataQuizz(title ? title : "");
    setDataQuizzSelection(selectedQuizz);
    console.log(showConfetti);
     if(selectedQuizz && !hasShownConfetti){
       setShowConfetti(true)
       setHasShownConfetti(true);
       setTimeout(()=> {
         setShowConfetti(false);
       },6000)
     }
  }, [title, filterDataQuizz,hasShownConfetti]);

  if (dataQuizzSelection === undefined) {
    return <div>Cargando...</div>; // Mostrar un mensaje de carga o un spinner
  }

  return (
    <div className="flex justify-center pb-4 px-3">
      {showConfetti && <QuizzConfetti/>}
      <div className="w-11/12">
        <QuizzThemeHeader
          onShowType={() => (
            <QuizzType
              icon={dataQuizzSelection.icon.slice(1)}
              title={dataQuizzSelection.title}
            />
          )}
          onShowToggle={() => (
            <QuizzToggle toogle={toogleTheme} setToogle={setToogleTheme} />
          )}
        />
        <QuizzTitleResult />
        <QuizzChartScore
          onShowType={() => (
            <QuizzType
              icon={dataQuizzSelection.icon.slice(1)}
              title={dataQuizzSelection.title}
            />
          )
        }
        onShowScore={() => (
            <QuizzScore
            score={score}
            totalQuestion = {totalQuestion}
            />  
        )}
        />
        <ButtonPlayQuizz/>
      </div>
    </div>
  );
};

export default QuizzResult;
