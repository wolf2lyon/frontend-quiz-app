import { useNavigate } from "react-router-dom";

const ButtonPlayQuizz = () => {
  const navigate = useNavigate();
  const handleReturnClick = () => {
    navigate('/')
  }
  return (
    <button className="bg-primary text-white text-lg font-medium  rounded-xl h-14 flex justify-center items-center mt-3 hover:bg-primary hover:opacity-50 hover:cursor-pointer w-full md:text-[1.75rem] md:h-20 2xl:mt-8 2xl:h-[5.75rem] 2xl:max-w-[35.25rem]" onClick={handleReturnClick}>
      Play Again
    </button>
  );
};

export default ButtonPlayQuizz