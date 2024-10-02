import React from "react";

const QuizzProgress = ({
  onShowThemeHeader,
  onShowQuestion,
  onShowListItemQuestion,
  onShowButtonSubmit,
  onShowButtonNext,
  onShowMessageError,
  toogleTheme
}: {
  onShowThemeHeader: React.FC;
  onShowQuestion: React.FC;
  onShowListItemQuestion: React.FC;
  onShowButtonSubmit: React.FC;
  onShowButtonNext: React.FC;
  onShowMessageError: React.FC;
  toogleTheme:boolean
}) => {
  const styleDarkMode = !!toogleTheme  ? 'bg-current-dark' : '' ;
  return (
    <div className={`flex justify-center items-center pb-4 md:mt-9 2xl:mt-0 2xl:pb-4 ${styleDarkMode}`}>
      <div className={`w-4/5 mt-6 2xl:grid 2xl:grid-flow-row 2xl:auto-rows-auto 2xl:grid-cols-2  md:mt-0 md:gap-4 md:gap-y-8 2xl:h-[80%] bg-transparent ${styleDarkMode}`}>
        {onShowThemeHeader({})}
        {onShowQuestion({})}
        <div className="bg-transparent">
          {onShowListItemQuestion({})}
          {onShowButtonSubmit({})}
          {onShowButtonNext({})}
          {onShowMessageError({})}
        </div>
      </div>
    </div>
  );
};

export default QuizzProgress;
