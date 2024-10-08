import { useNavigate } from "react-router-dom";
const QuizzItem = ({title,icon,toogleTheme}:{
  title:string;
  icon:string;
  toogleTheme:boolean
}) => {
  let backgroundSpan = "";
  let hoverBackgroundItem = "";
  const titleLowerCase = !!title ? title.toLowerCase() : "";
  const navigate = useNavigate();
  if (title === "HTML") {
    backgroundSpan = `bg-[#FFF1E9]`;
    hoverBackgroundItem = `hover:bg-accent hover:opacity-75`;
  }
  if (title === "CSS") {
    backgroundSpan = `bg-[#E0FDEF]`;
    hoverBackgroundItem = `hover:bg-success hover:opacity-75`;
  }
  if (title === "JavaScript") {
    backgroundSpan = `bg-[#EBF0FF]`;
    hoverBackgroundItem = `hover:bg-secondary hover:opacity-75`;
  }
  if (title === "Accessibility") {
    backgroundSpan = `bg-[#F6E7FF]`;
    hoverBackgroundItem = `hover:bg-primary hover:opacity-75`;
  }
  const styleDarkMode = !!toogleTheme ? 'bg-current' : 'bg-white ';
  const styleDarkModeP = !!toogleTheme ? 'text-white' : 'text-current-dark';

  const handleClick = () => {
    navigate(`/quizz/${titleLowerCase}`);
  }

  return (
    <li
      className={`flex items-center gap-3 hover:cursor-pointer rounded-xl h-16 p-3 md:h-20 md:gap-8 2xl:min-w-[35.25rem] md:p-5 ${styleDarkMode} ${hoverBackgroundItem}`}
      onClick={handleClick}
    >
        <>
          <span
            className={`${backgroundSpan} w-10 h-10 flex items-center justify-center rounded-md md:w-14 md:h-14`}
          >
            <img
              className="bg-transparent w-3/5 md:w-4/5"
              src={icon}
              alt={title}
            ></img>
          </span>
          <p className={`bg-transparent font-medium md:text-[1.75rem] ${styleDarkModeP}`}>
            {title}
          </p>
        </>
    </li>
  );
};

export default QuizzItem;
