const ButtonSubmitQuizz = ({
  changeNextQuestion,
  nextQuestion,
  changeIsClick,
  changeIsDisabled,
  selectOption,
  answer,
  verifyOptions,
  changeCorrectAnswer,
}: {
  changeNextQuestion: ({ boolean }: { boolean: boolean }) => void;
  nextQuestion: boolean;
  changeIsClick: ({ boolean }: { boolean: boolean }) => void;
  changeIsDisabled: ({ boolean }: { boolean: boolean }) => void;
  selectOption: string;
  answer: string;
  verifyOptions: (selectOption: string, answer: string) => boolean;
  changeCorrectAnswer: ({ boolean }: { boolean: boolean }) => void;
}) => {
  const handleVerifyOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changeIsClick({ boolean: true });
    if (!!selectOption) {
      const newAnswer = verifyOptions(selectOption, answer);
      changeCorrectAnswer({ boolean: newAnswer });
      changeNextQuestion({ boolean: !nextQuestion });
      changeIsDisabled({ boolean: true });
    }
  };
  return (
    <button
      className={`${
        nextQuestion
          ? "hidden"
          : "bg-primary text-white text-lg font-medium  rounded-xl h-14 flex justify-center items-center mt-3 hover:bg-primary hover:opacity-50 hover:cursor-pointer w-full md:mt-8 md:h-24 md:font-medium md:text-3xl 2xl:rounded-3xl"
      }`}
      onClick={handleVerifyOption}
    >
      Submit Answer
    </button>
  );
};

export default ButtonSubmitQuizz;
