const QuizzQuestion = ({
  count,
  question,
  totalQuestion,
  toogleTheme
  
}: {
  count: number;
  question: string;
  totalQuestion: number;
  toogleTheme:boolean
}) => {
  console.log(count, question, totalQuestion);
  const styleDarkMode = !!toogleTheme ? 'text-white' : 'text-current-dark' ;
  const styleDarkModeP = !!toogleTheme ? 'text-white' : 'text-current-light' ;
  const styleDarkModeProgress = !!toogleTheme ? 'progress-dark-mode' : '';   
  return (
    <div className="mt-3 2xl:w-4/5 2xl:flex 2xl:flex-col 2xl:h-[70%] bg-transparent">
      <p className={`text-sm italic md:text-xl bg-transparent ${styleDarkModeP}`}>
        Question {count} of {totalQuestion}
      </p>
      <h1 className={`font-medium mt-4 mb-6 text-xl leading-[120%] md:text-4xl bg-transparent ${styleDarkMode}`}>
        {question}
      </h1>
      <progress
        className={`w-full 2xl:mt-auto ${styleDarkModeProgress}`}
        id="progress"
        value={count}
        max={10}
      ></progress>
    </div>
  );
};

export default QuizzQuestion