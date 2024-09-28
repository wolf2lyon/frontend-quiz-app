import QuizzProgress from "../QuizzProgress";
import QuizzThemeHeader from "../QuizzThemeHeader";
import QuizzType from "../QuizzType";
import { QuizzToggle } from "../QuizzToggle";
import { QuizzQuestion } from "../QuizzQuestion";
import QuizzListItemQuestion from "../QuizzListItemQuestion";
import QuizzItemQuestion from "../QuizzItemQuestion";
import QuizzMessageError from "../QuizzMessageError";
import ButtonNextQuizz from "../ButtonNextQuizz";
import ButtonSubmitQuizz from "../ButtonSubmitQuizz";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Quizz } from "../types/data.type.quizz";
const QuizzNavigator = ({
  filterDataQuizz,
  toogleTheme,
  setToogleTheme,
  totalQuestions,
  verifyOptions,
}: {
  filterDataQuizz: (title: string) => Quizz;
  toogleTheme: boolean;
  setToogleTheme: React.Dispatch<React.SetStateAction<boolean>>;
  totalQuestions: (title: string) => number;
  verifyOptions: (selectOption: string, answer: string) => boolean;
}) => {
  const { title } = useParams<{ title: string }>();
  const defaultQuizzSelection: Quizz = {
    title: "",
    icon: "",
    questions: [],
  };
  const [dataQuizzSelection, setDataQuizzSelection] = useState<Quizz>(
    defaultQuizzSelection
  );
  const [dataTotalQuestion, setDataTotalQuestion] = useState<number>(0);
  const [countQuestion, setCountQuestion] = useState<number>(1);
  const [selectOption, setSelectOption] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<boolean>(false);
  const [nextQuestion, setNextQuestion] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [countTotalCorrectAnswer, setTotalCorrectAnswer] = useState<number>(0);

  useEffect(() => {
    const selectedQuizz: Quizz = filterDataQuizz(title ? title : "");
    const selectTotalQuestion = totalQuestions(title ? title : "");
    console.log(selectedQuizz);
    setDataQuizzSelection(selectedQuizz);
    setDataTotalQuestion(selectTotalQuestion);
    console.log(dataQuizzSelection);
  }, [title, filterDataQuizz, totalQuestions]);

  if (
    JSON.stringify(dataQuizzSelection) === JSON.stringify(defaultQuizzSelection)
  ) {
    console.log(dataQuizzSelection);
    return <div>Cargando...</div>; // Mostrar un mensaje de carga o un spinner
  }
  if (
    JSON.stringify(dataQuizzSelection) != JSON.stringify(defaultQuizzSelection)
  ) {
    console.log(dataQuizzSelection);
  }

  return (
    <QuizzProgress
      onShowThemeHeader={() => (
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
      )}
      onShowQuestion={() =>
        dataQuizzSelection.questions &&
        dataQuizzSelection.questions[countQuestion - 1] ? (
          <QuizzQuestion
            count={countQuestion}
            question={dataQuizzSelection.questions[countQuestion - 1].question}
            totalQuestion={dataTotalQuestion}
          />
        ) : (
          <div>No hay Preguntas...</div>
        )
      }
      onShowListItemQuestion={() =>
        dataQuizzSelection.questions ? (
          <QuizzListItemQuestion
            options={dataQuizzSelection.questions[countQuestion - 1].options}
            render={(option: string, index: number) => {
              if (dataQuizzSelection.questions) {
                return (
                  <QuizzItemQuestion
                    option={option}
                    key={index}
                    id={index}
                    selectOption={selectOption}
                    setSelectOption={setSelectOption}
                    correctAnswer={correctAnswer}
                    answer={
                      dataQuizzSelection.questions[countQuestion - 1].answer
                    }
                    isClick={isClick}
                    isDisabled={isDisabled}
                    setIsClick={setIsClick}
                  />
                );
              } else {
                return <div></div>;
              }
            }}
          >
            {(option: string, index: number) => {
              if (dataQuizzSelection.questions) {
                return (
                  <QuizzItemQuestion
                    option={option}
                    key={index}
                    id={index}
                    selectOption={selectOption}
                    setSelectOption={setSelectOption}
                    correctAnswer={correctAnswer}
                    answer={
                      dataQuizzSelection.questions[countQuestion - 1].answer
                    }
                    isClick={isClick}
                    isDisabled={isDisabled}
                    setIsClick={setIsClick}
                  />
                );
              } else {
                return <div></div>;
              }
            }}
          </QuizzListItemQuestion>
        ) : (
          <div>No hay Opciones....</div>
        )
      }
      onShowButtonSubmit={() =>
        dataQuizzSelection.questions &&
        dataQuizzSelection.questions[countQuestion - 1].answer ? (
          <ButtonSubmitQuizz
            verifyOptions={verifyOptions}
            selectOption={selectOption}
            answer={dataQuizzSelection.questions[countQuestion - 1].answer}
            setCorrectAnswer={setCorrectAnswer}
            nextQuestion={nextQuestion}
            setNextQuestion={setNextQuestion}
            isClick={isClick}
            setIsClick={setIsClick}
            setIsDisabled={setIsDisabled}
          />
        ) : (
          <div>No hay Preguntas para poder verificar</div>
        )
      }
      onShowButtonNext={() =>
        dataQuizzSelection.questions &&
        dataQuizzSelection.questions[countQuestion - 1].answer ? (
          <ButtonNextQuizz
            active={nextQuestion}
            passQuestion={setCountQuestion}
            countQuestion={countQuestion}
            nextQuestion={nextQuestion}
            setNextQuestion={setNextQuestion}
            setSelectOption={setSelectOption}
            setCorrectAnswer={setCorrectAnswer}
            setIsClick={setIsClick}
            setIsDisabled={setIsDisabled}
            dataTotalQuestion={dataTotalQuestion}
            countTotalCorrectAnswer={countTotalCorrectAnswer}
            setTotalCorrectAnswer={setTotalCorrectAnswer}
            selectOption={selectOption}
            answer={dataQuizzSelection.questions[countQuestion - 1].answer}
            title={dataQuizzSelection.title}
          />
        ) : (
          <div>No hay preguntas para seguir</div>
        )
      }
      onShowMessageError={() => (
        <QuizzMessageError selectOption={selectOption} isClick={isClick} />
      )}
    />
  );
};

export default QuizzNavigator;
