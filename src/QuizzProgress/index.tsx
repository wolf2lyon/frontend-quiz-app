import React from "react";

const QuizzProgress = ({
  onShowThemeHeader,
  onShowQuestion,
  onShowListItemQuestion,
  onShowButtonSubmit,
  onShowButtonNext,
  onShowMessageError
}: {
  onShowThemeHeader: React.FC;
  onShowQuestion:React.FC;
  onShowListItemQuestion:React.FC;
  onShowButtonSubmit:React.FC;
  onShowButtonNext:React.FC;
  onShowMessageError:React.FC
}) => {

  return (
    <div className="flex justify-center pb-4">
      <div className="w-11/12">
        {onShowThemeHeader({})}
        {onShowQuestion({})}
        {onShowListItemQuestion({})}
        {onShowButtonSubmit({})}
        {onShowButtonNext({})}
        {onShowMessageError({})}
      </div>
    </div>
  );
};

export default QuizzProgress;
