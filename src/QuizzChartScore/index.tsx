import React from "react";

const QuizzChartScore = ({toogleTheme,onShowType,onShowScore}:{
  toogleTheme:boolean,onShowType:React.FC,onShowScore:React.FC
}) => {
  const styleDarkMode = !!toogleTheme ? 'bg-current' : 'bg-white ';
  return (
    <div className={`p-8 flex flex-col justify-center items-center rounded-xl 2xl:h-[23rem] 2xl:w-[35.25rem] ${styleDarkMode}`}>
        {onShowType({})}
        {onShowScore({})}
    </div>
  )
}

export default QuizzChartScore