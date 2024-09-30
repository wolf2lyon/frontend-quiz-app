import { useNavigate } from "react-router-dom";
const QuizzItem = (props: any) => {
  let backgroundSpan = "";
  let hoverBackgroundItem = "";
  const titleLowerCase = !!props.title ? props.title.toLowerCase() : "";
  const navigate = useNavigate();
  if (props.title === "HTML") {
    backgroundSpan = `bg-[#FFF1E9]`;
    hoverBackgroundItem = `hover:bg-accent hover:opacity-75`;
  }
  if (props.title === "CSS") {
    backgroundSpan = `bg-[#E0FDEF]`;
    hoverBackgroundItem = `hover:bg-success hover:opacity-75`;
  }
  if (props.title === "JavaScript") {
    backgroundSpan = `bg-[#EBF0FF]`;
    hoverBackgroundItem = `hover:bg-secondary hover:opacity-75`;
  }
  if (props.title === "Accessibility") {
    backgroundSpan = `bg-[#F6E7FF]`;
    hoverBackgroundItem = `hover:bg-primary hover:opacity-75`;
  }

  const handleClick = () => {
    navigate(`/quizz/${titleLowerCase}`);
  }

  return (
    <li
      className={`flex items-center gap-3 hover:cursor-pointer  bg-white rounded-xl h-16 p-3 md:h-20 md:gap-8 2xl:min-w-[35.25rem] md:p-5 ${hoverBackgroundItem}`}
      onClick={handleClick}
    >
        <>
          <span
            className={`${backgroundSpan} w-10 h-10 flex items-center justify-center rounded-md md:w-14 md:h-14`}
          >
            <img
              className="bg-transparent w-3/5 md:w-4/5"
              src={props.icon}
              alt={props.title}
            ></img>
          </span>
          <p className="bg-transparent text-current-dark font-medium md:text-[1.75rem]">
            {props.title}
          </p>
        </>
    </li>
  );
};

export default QuizzItem;
