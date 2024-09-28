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
    <div className="mt-3">
      <p className="text-current-light text-sm italic">
        Question {count} of {totalQuestion}
      </p>
      <h1 className="font-medium mt-4 mb-6 text-xl leading-[120%]">
        {question}
      </h1>
      <progress
        className="w-full"
        id="progress"
        value={count}
        max={10}
      ></progress>
    </div>
  );
};

export default QuizzQuestion