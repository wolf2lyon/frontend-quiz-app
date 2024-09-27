import QuizzProgress from "../QuizzProgress";
import QuizzResult from "../QuizzResult";
import { AppQuiz } from "./App";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppQuiz />} />
        <Route path="/quizz/:title" element={<QuizzProgress />}/>
        <Route path="/quizz/:title/finish-quizz" element={<QuizzResult />} />
      </Routes>
    </Router>
  );
};

export default App;
