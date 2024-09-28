import QuizzProgress from "../QuizzProgress";
import QuizzResult from "../QuizzResult";
import { AppQuiz } from "./App";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useQuizz } from "./useQuizz";

const App = () => {
  const { dataQuizz, showOpcionsQuizz, setToogleTheme, toogleTheme, loading } =
    useQuizz();
  if(loading) return <div>Cargando...</div>
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppQuiz
            dataQuizz={dataQuizz}
            setToogleTheme={setToogleTheme}
            toogleTheme={toogleTheme}
            showOpcionsQuizz={showOpcionsQuizz}
          />
        }
      />
      <Route path="/quizz/:title" element={<QuizzProgress />} />
      <Route path="/quizz/:title/finish-quizz" element={<QuizzResult />} />
    </Routes>
  );
};

export default App;
