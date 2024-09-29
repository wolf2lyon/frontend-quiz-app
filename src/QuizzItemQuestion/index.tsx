import iconCorrect from "../assets/images/icon-correct.svg";
import iconError from "../assets/images/icon-error.svg";
const QuizzItemQuestion = ({
  answer,
  id,
  option,
  selectOption,
  changeSelectOption,
  correctAnswer,
  isClick,
  isDisabled,
  changeIsClick,
}: {
  answer: string;
  id: number;
  option: string;
  changeSelectOption: ({ string }: { string: string }) => void;
  selectOption: string;
  correctAnswer: boolean;
  isClick: boolean;
  isDisabled: boolean;
  changeIsClick: ({ boolean }: { boolean: boolean }) => void;
}) => {
  const letters = ["A", "B", "C", "D"];
  const letterOption = letters[id] || "";
  let styleCorrectAnswer = "";
  let chooseInputStlye = false;
  let chooseInputIncorrectStyle = false;
  const handleChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeSelectOption({ string: e.target.value });
    changeIsClick({ boolean: false });
  };
  if (answer === option) chooseInputStlye = true;
  if (selectOption === option) chooseInputIncorrectStyle = true;
  console.log(chooseInputStlye, correctAnswer);
  if (correctAnswer) {
    styleCorrectAnswer = "label-success";
  } else {
    styleCorrectAnswer = "label-error";
  }
  return (
    <label
      className={`flex min-h-16 p-3 gap-4 bg-white items-center rounded-xl md:p-5 ${
        correctAnswer && chooseInputStlye ? styleCorrectAnswer : ""
      } 
      ${
        isClick && !correctAnswer && chooseInputIncorrectStyle && !!selectOption
          ? styleCorrectAnswer
          : ""
      }
      `}
    >
      <div className="flex items-center w-full bg-transparent gap-4 text-lg ">
        <input
          id={`option-${id}`}
          type="radio"
          name="option"
          value={option}
          checked={selectOption === option}
          className="option hidden"
          onChange={handleChangeOption}
          disabled={isDisabled}
        />
        <span
          className={`w-10 h-10 rounded-md flex justify-center items-center font-medium text-current-light md:font-medium md:text-3xl ${
            correctAnswer && chooseInputStlye ? "span-success" : ""
          }
          ${
            isClick &&
            !correctAnswer &&
            chooseInputIncorrectStyle &&
            !!selectOption
              ? "span-error"
              : ""
          }
          `}
        >
          {letterOption}
        </span>
        <p className="flex-1 bg-white md:text-3xl md:font-medium">{option}</p>
      </div>
      <span
        className={`bg-white block ${
          isClick &&
          (correctAnswer || !correctAnswer) &&
          (chooseInputStlye || chooseInputIncorrectStyle) &&
          !!selectOption
            ? "block"
            : "hidden"
        }  
        `}
      >
        {chooseInputStlye ? (
          <img className={`bg-white md:w-[42px]`} src={iconCorrect} alt="icon-correct" />
        ) : (
          <img className={`bg-white md:w-[42px]`} src={iconError} alt="icon-error" />
        )}
      </span>
    </label>
  );
};

export default QuizzItemQuestion;
