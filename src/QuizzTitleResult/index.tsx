const QuizzTitleResult = ({toogleTheme}:{toogleTheme:boolean}) => {
  const styleDarkMode = !!toogleTheme ? 'text-white' : 'text-current' ;
  return (
    <h1 className={`font-light text-[2.5rem] flex flex-col leading-none mb-10 mt-8 md:text-[4rem] bg-transparent ${styleDarkMode}`}>
      <span className="w-max bg-transparent">Quiz completed</span>
      <span className="block font-medium leading-none w-max bg-transparent">You scored...</span>
    </h1>
  );
};

export default QuizzTitleResult