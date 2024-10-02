const QuizzType = ({icon,title,toogleTheme}:{icon:string;title:string;toogleTheme:boolean}) => {
  let backgroundSpan = "";
  if (title === "HTML") {
    backgroundSpan = `bg-[#FFF1E9]`;
  }
  if (title === "CSS") {
    backgroundSpan = `bg-[#E0FDEF]`;
  }
  if (title === "JavaScript") {
    backgroundSpan = `bg-[#EBF0FF]`;
  }
  if (title === "Accessibility") {
    backgroundSpan = `bg-[#F6E7FF]`;
  }
  const styleDarkModeP = !!toogleTheme ? 'text-white' : 'text-current-dark';
  return (
    <div className="flex items-center gap-3 bg-transparent">
      <span className={`${backgroundSpan} w-10 h-10 flex items-center justify-center rounded-md md:w-14 md:h-14 `}>
        <img  className="bg-transparent w-3/5" src={icon} alt={title} />
      </span>
      <p className={`bg-transparent font-medium md:text-3xl ${styleDarkModeP}`}>{title}</p>
    </div>
  );
};

export default QuizzType;
