const QuizzType = ({icon,title}:{icon:string;title:string}) => {
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
  return (
    <div className="flex items-center gap-3 bg-transparent">
      <span className={`${backgroundSpan} w-10 h-10 flex items-center justify-center rounded-md `}>
        <img  className="bg-transparent w-3/5" src={icon} alt={title} />
      </span>
      <p className="bg-transparent text-current-dark font-medium">{title}</p>
    </div>
  );
};

export default QuizzType;
