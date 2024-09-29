import React from "react";

interface QuizzListItemQuestionProps {
  options: string[];
  render: (option: string, index: number) => React.ReactNode | React.JSX.Element; // Tipo para la función render
  children?:  (option: string, index: number) => React.ReactNode | React.JSX.Element; // Para permitir el uso de children si es necesario
}

const QuizzListItemQuestion:React.FC<QuizzListItemQuestionProps> = ({options,render,children}) => {
  const renderFn = !children ? render : children;
  return (
    <ul className="flex flex-col gap-3 mt-10 md:gap-6">
      {options.map((option, index) => renderFn(option, index))}
    </ul>
  );
};

export default QuizzListItemQuestion;
