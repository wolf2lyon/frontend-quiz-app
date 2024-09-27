const QuizzType = (props: any) => {
  let backgroundSpan = "";
  if (props.title === "HTML") {
    backgroundSpan = `bg-[#FFF1E9]`;
  }
  if (props.title === "CSS") {
    backgroundSpan = `bg-[#E0FDEF]`;
  }
  if (props.title === "JavaScript") {
    backgroundSpan = `bg-[#EBF0FF]`;
  }
  if (props.title === "Accessibility") {
    backgroundSpan = `bg-[#F6E7FF]`;
  }
  return (
    <div className="flex items-center gap-3 bg-transparent">
      <span className={`${backgroundSpan} w-10 h-10 flex items-center justify-center rounded-md `}>
        <img  className="bg-transparent w-3/5" src={props.icon} alt={props.title} />
      </span>
      <p className="bg-transparent text-current-dark font-medium">{props.title}</p>
    </div>
  );
};

export default QuizzType;
