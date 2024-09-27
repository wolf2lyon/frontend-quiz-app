const ButtonSubmitQuizz = (props: any) => {
  const handleVerifyOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.setIsClick(true);
    if (!!props.selectOption) {
      const newAnswer = props.verifyOptions(props.selectOption, props.answer);
      props.setCorrectAnswer(newAnswer);
      props.setNextQuestion(!props.nextQuestion);
      props.setIsDisabled(true);
    }
  };
  return (
    <button
      className={`${
        props.nextQuestion
          ? "hidden"
          : "bg-primary text-white text-lg font-medium  rounded-xl h-14 flex justify-center items-center mt-3 hover:bg-primary hover:opacity-50 hover:cursor-pointer w-full"
      }`}
      onClick={handleVerifyOption}
    >
      Submit Answer
    </button>
  );
};

export default ButtonSubmitQuizz;
