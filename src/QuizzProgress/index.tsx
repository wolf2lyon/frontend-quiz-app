import React from "react";

const QuizzProgress = ({
  onShowThemeHeader,
  onShowQuestion,
  onShowListItemQuestion,
  onShowButtonSubmit,
  onShowButtonNext,
  onShowMessageError,
}: {
  onShowThemeHeader: React.FC;
  onShowQuestion: React.FC;
  onShowListItemQuestion: React.FC;
  onShowButtonSubmit: React.FC;
  onShowButtonNext: React.FC;
  onShowMessageError: React.FC;
}) => {
  return (
    <div className="flex justify-center items-center pb-4 md:mt-9 2xl:h-screen 2xl:mt-0 2xl:pb-4">
      <div className="w-11/12 2xl:grid 2xl:grid-flow-row 2xl:auto-rows-auto 2xl:grid-cols-2 md:gap-4 md:gap-y-8 2xl:h-[80%]">
        {onShowThemeHeader({})}
        {onShowQuestion({})}
        <div>
          {onShowListItemQuestion({})}
          {onShowButtonSubmit({})}
          {onShowButtonNext({})}
        </div>
        {onShowMessageError({})}
      </div>
    </div>
  );
};

export default QuizzProgress;
