import iconMoonDark from "../assets/images/icon-moon-dark.svg";
import iconSunDark from "../assets/images/icon-sun-dark.svg";
import iconSunLight from "../assets/images/icon-sun-light.svg";
import iconMoonLight from "../assets/images/icon-moon-light.svg";
import QuizzIcon from "../QuizzIcon";
const QuizzToggle = ({
  toogle,
  changeToogle,
}: {
  toogle: boolean;
  changeToogle: ({ boolean }: { boolean: boolean }) => void;
}) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changeToogle({boolean:!toogle});
    if(!toogle){
      document.documentElement.classList.add('dark-mode');
    }else{
      document.documentElement.classList.remove('dark-mode');
    }

  };
  return (
    <div className="h-5 flex gap-2 md:h-7 md:self-center md:items-center bg-transparent">

       {!!toogle ? <QuizzIcon img={iconSunLight} name="icon-sun-dark" />  :  <QuizzIcon img={iconSunDark} name="icon-sun-dark" />}

      <button
        className="block w-8 h-5 bg-primary rounded-full p-1 md:h-7 md:w-12"
        onClick={handleClick}
      >
        <span
          className={`transition duration-500 block w-3 h-3 bg-white rounded-full translate-x-0 md:w-5 md:h-5 ${
            !!toogle ? "translate-x-full" : ""
          }`}
        ></span>
      </button>
      {!!toogle ? <QuizzIcon img={iconMoonLight} name="icon-moon-dark" />  : <QuizzIcon img={iconMoonDark} name="icon-moon-dark" />}
    </div>
  );
};
export default QuizzToggle