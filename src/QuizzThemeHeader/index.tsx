import React from "react";

const QuizzThemeHeader = ({onShowType,onShowToggle}:{
  onShowType?:React.FC;
  onShowToggle:React.FC
}) => {
  let showType = false;
  let classStyleProgress = "h-[4.5rem] flex justify-between items-center 2xl:col-span-3 2xl:self-center bg-transparent";
  if (typeof onShowType === "function") showType = true;
  return (
    <header className={showType ? classStyleProgress  : "h-[4.5rem] flex justify-end pt-7 md:col-span-3 md:self-center bg-transparent"}>
      {showType && !!onShowType && onShowType({})}
      {onShowToggle({})}
    </header>
  );
};

export default QuizzThemeHeader;
