import { Route, Routes } from "react-router-dom";
import useQuizz from "../hooks/useQuizz";
import QuizzHome from "../pages/QuizzHome";
import QuizzNavigator from "../pages/QuizzNavigator";
import QuizzSumarry from "../pages/QuizzSumarry";

const App = () => {
  const {
    showOpcionsQuizz,
    toogleTheme,
    loading,
    filterDataQuizz,
    totalQuestions,
    verifyOptions,
    changeTotalCorrectAnswer,
    countTotalCorrectAnswer,
    changeToogle,
  } = useQuizz();
  if (loading) return <div>Cargando...</div>;
  return (
    <Routes>
      <Route
        path="/"
        element={
          <QuizzHome
            showOpcionsQuizz={showOpcionsQuizz}
            toogleTheme={toogleTheme}
            changeToogle={changeToogle}
            changeTotalCorrectAnswer={changeTotalCorrectAnswer}
          />
        }
      />
      <Route
        path="/quizz/:title"
        element={
          <QuizzNavigator
            filterDataQuizz={filterDataQuizz}
            toogleTheme={toogleTheme}
            changeToogle={changeToogle}
            totalQuestions={totalQuestions}
            verifyOptions={verifyOptions}
            changeTotalCorrectAnswer={changeTotalCorrectAnswer}
            countTotalCorrectAnswer={countTotalCorrectAnswer}
          />
        }
      />
      <Route
        path="/quizz/:title/finish-quizz"
        element={
          <QuizzSumarry
            filterDataQuizz={filterDataQuizz}
            toogleTheme={toogleTheme}
            changeToogle={changeToogle}
          />
        }
      />
    </Routes>
  );
};

export default App;
