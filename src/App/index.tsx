import QuizzResult from "../QuizzResult";
import { Route, Routes } from "react-router-dom";
import { useQuizz } from "./useQuizz";
import QuizzHome from "../pages/QuizzHome";
import QuizzNavigator from "../pages/QuizzNavigator";

const App = () => {
  const {
    dataQuizz,
    showOpcionsQuizz,
    setToogleTheme,
    toogleTheme,
    loading,
    filterDataQuizz,
    totalQuestions,
    verifyOptions,
    changeTotalCorrectAnswer,
    countTotalCorrectAnswer
  } = useQuizz();
  if (loading) return <div>Cargando...</div>;
  return (
    <Routes>
      <Route
        path="/"
        element={
          <QuizzHome
            dataQuizz={dataQuizz}
            showOpcionsQuizz={showOpcionsQuizz}
            toogleTheme={toogleTheme}
            setToogleTheme={setToogleTheme}
          />
        }
      />
      <Route
        path="/quizz/:title"
        element={
          <QuizzNavigator
            filterDataQuizz={filterDataQuizz}
            toogleTheme={toogleTheme}
            setToogleTheme={setToogleTheme}
            totalQuestions={totalQuestions}
            verifyOptions={verifyOptions}
            changeTotalCorrectAnswer={changeTotalCorrectAnswer}
            countTotalCorrectAnswer={countTotalCorrectAnswer}
          />
        }
      />
      <Route path="/quizz/:title/finish-quizz" element={<QuizzResult />} />
    </Routes>
  );
};

export default App;
