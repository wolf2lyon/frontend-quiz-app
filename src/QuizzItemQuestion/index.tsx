import iconCorrect from "../assets/images/icon-correct.svg";
import iconError from "../assets/images/icon-error.svg";
const QuizzItemQuestion = (props: any) => {
  const letters = ["A", "B", "C", "D"];
  const letterOption = letters[props.id] || "";
  let styleCorrectAnswer = "";
  let chooseInputStlye = false;
  let chooseInputIncorrectStyle = false;
  const handleChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSelectOption(e.target.value);
    props.setIsClick(false);
  };
  if (props.answer === props.option) chooseInputStlye = true;
  if (props.selectOption === props.option) chooseInputIncorrectStyle = true; 
  console.log(chooseInputStlye, props.correctAnswer);
  if (props.correctAnswer) {styleCorrectAnswer = "label-success"} else {styleCorrectAnswer = 'label-error'}; 
  return (
    <label
      className={`flex min-h-16 p-3 gap-4 bg-white items-center rounded-xl ${
        props.correctAnswer && chooseInputStlye ? styleCorrectAnswer : ""
      } 
      ${
        props.isClick && !props.correctAnswer && chooseInputIncorrectStyle && !!props.selectOption ? styleCorrectAnswer: ""
      }
      `}
    >
      <div className="flex items-center w-full bg-transparent gap-4 text-lg ">
        <input
          id={`option-${props.id}`}
          type="radio"
          name="option"
          value={props.option}
          checked={props.selectOption === props.option}
          className="option hidden"
          onChange={handleChangeOption}
          disabled={props.isDisabled}
        />
        <span
          className={`w-10 h-10 rounded-md flex justify-center items-center font-medium text-current-light ${
            props.correctAnswer && chooseInputStlye ? "span-success" : ""
          }
          ${
            props.isClick && !props.correctAnswer && chooseInputIncorrectStyle && !!props.selectOption ? 'span-error': ""
          }
          `}
        >
          {letterOption}
        </span>
        <p className="flex-1 bg-white">{props.option}</p>
      </div>
      <span
        className={`bg-white block ${
         props.isClick && (props.correctAnswer || !props.correctAnswer)  && (chooseInputStlye || chooseInputIncorrectStyle ) && !!props.selectOption ? "block" : "hidden"
        }  
        `}
      >
        {
          chooseInputStlye ?
          <img className={`bg-white`} src={iconCorrect} alt="icon-correct" />
          :
          <img className={`bg-white`} src={iconError} alt="icon-error" />
        }
      </span>
    </label>
  );
};

export default QuizzItemQuestion;
