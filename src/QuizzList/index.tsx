import { Quizz } from "../types/data.type.quizz";

const QuizzList = ({
  quizzesInformationStart,
  toogleTheme,
  render,
  children
}: {
  quizzesInformationStart: Quizz[];
  toogleTheme:boolean;
  render: (quizz: Quizz, index: number) => React.ReactNode | React.JSX.Element;
  children?:  (quizz: Quizz, index: number) => React.ReactNode | React.JSX.Element; 
}) => {
  const renderFn = !children ? render : children;
  const styleDarkMode = !!toogleTheme
    ? "bg-current-dark"
    : "bg-transparent ";
  return (
    <ul
      className={`flex flex-col gap-3 mt-10 2xl:mt-0 2xl:col-start-3 ${styleDarkMode}`}
    >
      {quizzesInformationStart.map((quizz,index) => renderFn(quizz,index))}
    </ul>
  );
};

export default QuizzList;
