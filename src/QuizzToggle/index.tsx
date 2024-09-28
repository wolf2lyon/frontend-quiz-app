import iconMoonDark from "../assets/images/icon-moon-dark.svg";
import iconSunDark from "../assets/images/icon-sun-dark.svg";
import { QuizzIcon } from "../QuizzIcon/index";
export const QuizzToggle = ({
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
    <div className="h-5 flex gap-2">
      <QuizzIcon img={iconSunDark} name="icon-sun-dark" />
      <button
        className="block w-8 h-5 bg-primary rounded-full p-1"
        onClick={handleClick}
      >
        <span
          className={`transition duration-700 block w-3 h-3 bg-white rounded-full translate-x-0 ${
            !!toogle ? "translate-x-full" : ""
          }`}
        ></span>
      </button>
      <QuizzIcon img={iconMoonDark} name="icon-moon-dark" />
    </div>
  );
};
