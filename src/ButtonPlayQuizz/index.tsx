import { useNavigate } from "react-router-dom";

const ButtonPlayQuizz = () => {
  const navigate = useNavigate();
  const handleReturnClick = () => {
    navigate('/')
  }
  return (
    <button className="bg-primary text-white text-lg font-medium  rounded-xl h-14 flex justify-center items-center mt-3 hover:bg-primary hover:opacity-50 hover:cursor-pointer w-full" onClick={handleReturnClick}>
      Play Again
    </button>
  );
};

export default ButtonPlayQuizz