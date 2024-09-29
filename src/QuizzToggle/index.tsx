import iconMoonDark from "../assets/images/icon-moon-dark.svg";
import iconSunDark from "../assets/images/icon-sun-dark.svg";
import QuizzIcon from "../QuizzIcon";
const QuizzToggle = ({
  toogle,
  changeToogle,
}: {
  toogle: boolean;
  changeToogle: ({ boolean }: { boolean: boolean }) => void;
}) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    changeToogle({boolean:!toogle});
    e.preventDefault();
  };
  return (
    <div className="h-5 flex gap-2 md:h-7 md:self-center md:items-center">

        <QuizzIcon img={iconSunDark} name="icon-sun-dark" />

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
      <QuizzIcon img={iconMoonDark} name="icon-moon-dark" />
    </div>
  );
};
export default QuizzToggle