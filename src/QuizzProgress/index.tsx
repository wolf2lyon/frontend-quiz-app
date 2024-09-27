import { useParams } from "react-router-dom";
import { useQuizz } from "../App/useQuizz";
import QuizzThemeHeader from "../QuizzThemeHeader";
import { QuizzToggle } from "../QuizzToggle";
import QuizzType from "../QuizzType";
import { useEffect, useState } from "react";
import { QuizzQuestion } from "../QuizzQuestion";
import QuizzListItemQuestion from "../QuizzListItemQuestion";
import QuizzItemQuestion from "../QuizzItemQuestion";
import ButtonSubmitQuizz from "../ButtonSubmitQuizz";
import ButtonNextQuizz from "../ButtonNextQuizz/index";
import QuizzMessageError from "../QuizzMessageError";

const QuizzProgress = () => {
  const { title } = useParams<{ title: string }>();
  const {
    filterDataQuizz,
    toogleTheme,
    setToogleTheme,
    totalQuestions,
    verifyOptions,
  } = useQuizz();

  // Estado para manejar la selección de quizz
  const [dataQuizzSelection, setDataQuizzSelection] = useState<any>(undefined);
  const [dataTotalQuestion, setDataTotalQuestion] = useState<number | any>(
    undefined
  );
  const [countQuestion, setCountQuestion] = useState<number>(1);
  const [selectOption, setSelectOption] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<boolean>(false);
  const [nextQuestion, setNextQuestion] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [countTotalCorrectAnswer,setTotalCorrectAnswer] = useState<number>(0);

  useEffect(() => {
    const selectedQuizz = filterDataQuizz(title ? title : "");
    const selectTotalQuestion = totalQuestions(title ? title : "");
    setDataQuizzSelection(selectedQuizz);
    setDataTotalQuestion(selectTotalQuestion);
    console.log(dataQuizzSelection);
  }, [title, filterDataQuizz, totalQuestions]);

  if (dataQuizzSelection === undefined) {
    return <div>Cargando...</div>; // Mostrar un mensaje de carga o un spinner
  }

  return (
    <div className="flex justify-center pb-4">
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
        <QuizzQuestion
          count={countQuestion}
          question={dataQuizzSelection.questions[countQuestion - 1].question}
          totalQuestion={dataTotalQuestion}
        />
        <QuizzListItemQuestion
          options={dataQuizzSelection.questions[countQuestion - 1].options}
          render={(option: string, index: number) => {
            return (
              <QuizzItemQuestion
                option={option}
                key={index}
                id={index}
                selectOption={selectOption}
                setSelectOption={setSelectOption}
                correctAnswer={correctAnswer}
                answer={dataQuizzSelection.questions[countQuestion-1].answer}
                isClick={isClick}
                isDisabled={isDisabled}
                setIsClick={setIsClick}
              />
            );
          }}
        >
          {(option: string, index: number) => {
            return (
              <QuizzItemQuestion
                option={option}
                key={index}
                id={index}
                selectOption={selectOption}
                setSelectOption={setSelectOption}
                correctAnswer={correctAnswer}
                answer={dataQuizzSelection.questions[countQuestion-1].answer}
                isClick={isClick}
                isDisabled={isDisabled}
                setIsClick={setIsClick}
              />
            );
          }}
        </QuizzListItemQuestion>
        <ButtonSubmitQuizz
          verifyOptions={verifyOptions}
          selectOption={selectOption}
          answer={dataQuizzSelection.questions[countQuestion-1].answer}
          setCorrectAnswer={setCorrectAnswer}
          nextQuestion={nextQuestion}
          setNextQuestion={setNextQuestion}
          isClick={isClick}
          setIsClick={setIsClick}
          setIsDisabled={setIsDisabled}
        />
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
          answer={dataQuizzSelection.questions[countQuestion-1].answer}
          title={dataQuizzSelection.title}
        />
        <QuizzMessageError selectOption={selectOption}  isClick={isClick}  />
      </div>
    </div>
  );
};

export default QuizzProgress;
