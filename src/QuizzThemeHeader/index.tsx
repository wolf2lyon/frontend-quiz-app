import React from "react";

const QuizzThemeHeader = ({onShowType,onShowToggle}:{
  onShowType?:React.FC;
  onShowToggle:React.FC
}) => {
  let showType = false;
  let classStyleProgress = "h-[72px] flex justify-between items-center";
  if (typeof onShowType === "function") showType = true;
  return (
    <header className={showType ? classStyleProgress  : "h-[72px] flex justify-end pt-7"}>
      {showType && !!onShowType && onShowType({})}
      {onShowToggle({})}
    </header>
  );
};

export default QuizzThemeHeader;
