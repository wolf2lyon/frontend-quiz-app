const QuizzChartScore = (props:any) => {
  const styleDarkMode = !!props.toogleTheme ? 'bg-current' : 'bg-white ';
  return (
    <div className={`p-8 flex flex-col justify-center items-center rounded-xl 2xl:h-[23rem] 2xl:w-[35.25rem] ${styleDarkMode}`}>
        {props.onShowType()}
        {props.onShowScore()}
    </div>
  )
}

export default QuizzChartScore