const QuizzQuestion = ({
  count,
  question,
  totalQuestion,
}: {
  count: number;
  question: string;
  totalQuestion: number;
}) => {
  console.log(count, question, totalQuestion);
  return (
    <div className="mt-3 2xl:w-4/5 2xl:flex 2xl:flex-col 2xl:h-[80%]">
      <p className="text-current-light text-sm italic md:text-xl">
        Question {count} of {totalQuestion}
      </p>
      <h1 className="font-medium mt-4 mb-6 text-xl leading-[120%] md:text-4xl">
        {question}
      </h1>
      <progress
        className="w-full 2xl:mt-auto"
        id="progress"
        value={count}
        max={10}
      ></progress>
    </div>
  );
};

export default QuizzQuestion