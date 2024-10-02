import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Quizz } from "../types/data.type.quizz";
import QuizzProgress from "../QuizzProgress";
import QuizzThemeHeader from "../QuizzThemeHeader";
import QuizzType from "../QuizzType";
import QuizzToggle from "../QuizzToggle";
import QuizzQuestion from "../QuizzQuestion";
import QuizzListItemQuestion from "../QuizzListItemQuestion";
import QuizzItemQuestion from "../QuizzItemQuestion";
import QuizzMessageError from "../QuizzMessageError";
import ButtonNextQuizz from "../ButtonNextQuizz";
import ButtonSubmitQuizz from "../ButtonSubmitQuizz";

const QuizzNavigator = ({
  filterDataQuizz,
  toogleTheme,
  totalQuestions,
  verifyOptions,
  changeTotalCorrectAnswer,
  countTotalCorrectAnswer,
  changeToogle
}: {
  filterDataQuizz: (title: string) => Quizz;
  toogleTheme: boolean;
  totalQuestions: (title: string) => number;
  verifyOptions: (selectOption: string, answer: string) => boolean;
  changeTotalCorrectAnswer: ({ number }: { number?: number }) => void;
  countTotalCorrectAnswer: number;
  changeToogle: ({ boolean}: { boolean?: boolean }) => void;
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

  const changeCountQuestion = ({ number = 0 }: { number?: number }) => {
    setCountQuestion(number);
  };
  const changeSelectOption = ({ string = "" }: { string?: string }) => {
    setSelectOption(string);
  };
  const changeCorrectAnswer = ({ boolean = false }: { boolean?: boolean }) => {
    setCorrectAnswer(boolean);
  };
  const changeNextQuestion = ({ boolean = false }: { boolean?: boolean }) => {
    setNextQuestion(boolean);
  };
  const changeIsClick = ({ boolean = false }: { boolean?: boolean }) => {
    setIsClick(boolean);
  };
  const changeIsDisabled = ({ boolean = false }: { boolean?: boolean }) => {
    setIsDisabled(boolean);
  };
  

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
              toogleTheme={toogleTheme}
            />
          )}
          onShowToggle={() => (
            <QuizzToggle toogle={toogleTheme} changeToogle={changeToogle} />
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
            toogleTheme={toogleTheme}
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
                    changeSelectOption={changeSelectOption}
                    correctAnswer={correctAnswer}
                    answer={
                      dataQuizzSelection.questions[countQuestion - 1].answer
                    }
                    isClick={isClick}
                    isDisabled={isDisabled}
                    changeIsClick={changeIsClick}
                    toogleTheme={toogleTheme}
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
                    changeSelectOption={changeSelectOption}
                    correctAnswer={correctAnswer}
                    answer={
                      dataQuizzSelection.questions[countQuestion - 1].answer
                    }
                    isClick={isClick}
                    isDisabled={isDisabled}
                    changeIsClick={changeIsClick}
                    toogleTheme={toogleTheme}
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
            changeCorrectAnswer={changeCorrectAnswer}
            nextQuestion={nextQuestion}
            changeNextQuestion={changeNextQuestion}
            changeIsClick={changeIsClick}
            changeIsDisabled={changeIsDisabled}
            toogleTheme={toogleTheme}
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
            passQuestion={changeCountQuestion}
            countQuestion={countQuestion}
            nextQuestion={nextQuestion}
            changeNextQuestion={changeNextQuestion}
            changeSelectOption={changeSelectOption}
            changeCorrectAnswer={changeCorrectAnswer}
            changeIsClick={changeIsClick}
            changeIsDisabled={changeIsDisabled}
            dataTotalQuestion={dataTotalQuestion}
            countTotalCorrectAnswer={countTotalCorrectAnswer}
            changeTotalCorrectAnswer={changeTotalCorrectAnswer}
            selectOption={selectOption}
            answer={dataQuizzSelection.questions[countQuestion - 1].answer}
            title={dataQuizzSelection.title}
            toogleTheme={toogleTheme}
          />
        ) : (
          <div>No hay preguntas para seguir</div>
        )
      }
      onShowMessageError={() => (
        <QuizzMessageError selectOption={selectOption} isClick={isClick} />
      )}
      toogleTheme={toogleTheme}
      
    />
  );
};

export default QuizzNavigator;
