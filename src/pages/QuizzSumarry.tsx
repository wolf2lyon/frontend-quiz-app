import { useLocation } from "react-router-dom";
import { Quizz } from "../types/data.type.quizz";
import { useEffect, useState } from "react";
import QuizzResult from "../QuizzResult";
import QuizzThemeHeader from "../QuizzThemeHeader";
import QuizzType from "../QuizzType";
import QuizzToggle from "../QuizzToggle";
import QuizzTitleResult from "../QuizzTitleResult";
import QuizzChartScore from "../QuizzChartScore";
import QuizzScore from "../QuizzScore";
import ButtonPlayQuizz from "../ButtonPlayQuizz";
import QuizzConfetti from "../QuizzConfetti";

const QuizzSumarry = ({
  filterDataQuizz,
  toogleTheme,
  changeToogle,
}: {
  filterDataQuizz: (title: string) => Quizz;
  toogleTheme: boolean;
  changeToogle: ({ boolean }: { boolean: boolean }) => void;
}) => {
  const location = useLocation();
  const { state } = location;
  const title = state.title;
  const score = state.score;
  const defaultQuizzSelection: Quizz = {
    title: "",
    icon: "",
    questions: [],
  };
  const totalQuestion = state.totalQuestion;
  const [dataQuizzSelection, setDataQuizzSelection] = useState<Quizz>(
    defaultQuizzSelection
  );
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [hasShownConfetti, setHasShownConfetti] = useState<boolean>(false);

  useEffect(() => {
    const selectedQuizz = filterDataQuizz(title ? title : "");
    setDataQuizzSelection(selectedQuizz);
    console.log(showConfetti);
    if (selectedQuizz && !hasShownConfetti) {
      setShowConfetti(true);
      setHasShownConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 6000);
    }
  }, [title, filterDataQuizz, hasShownConfetti]);

  if (
    JSON.stringify(dataQuizzSelection) === JSON.stringify(defaultQuizzSelection)
  ) {
    console.log(dataQuizzSelection);
    return <div>Cargando...</div>; // Mostrar un mensaje de carga o un spinner
  }

  return (
    <QuizzResult
      showConfetti={showConfetti}
      onShowThemeHeader={() => (
        <QuizzThemeHeader
          onShowType={() => (
            <QuizzType
              icon={dataQuizzSelection.icon.slice(1)}
              title={dataQuizzSelection.title}
            />
          )}
          onShowToggle={() => (
            <QuizzToggle toogle={toogleTheme} changeToogle={changeToogle} />
          )}
        />
      )}
      onShowTitleResult={() => <QuizzTitleResult />}
      onShowChartScore={() => (
        <QuizzChartScore
          onShowType={() => (
            <QuizzType
              icon={dataQuizzSelection.icon.slice(1)}
              title={dataQuizzSelection.title}
            />
          )}
          onShowScore={() => (
            <QuizzScore score={score} totalQuestion={totalQuestion} />
          )}
        />
      )}
      onShowPlayQuizz={() => (<ButtonPlayQuizz />)}
      onShowConfetti={()=> (<QuizzConfetti />)}
    />
  );
};

export default QuizzSumarry;
