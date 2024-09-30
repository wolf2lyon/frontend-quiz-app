const QuizzTitleResult = () => {
  return (
    <h1 className="font-light text-[2.5rem] text-current flex flex-col leading-none mb-10 mt-8 md:text-[4rem]">
      <span className="w-max">Quiz completed</span>
      <span className="block font-medium leading-none w-max">You scored...</span>
    </h1>
  );
};

export default QuizzTitleResult