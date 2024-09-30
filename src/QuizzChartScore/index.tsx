const QuizzChartScore = (props:any) => {
  return (
    <div className="bg-white p-8 flex flex-col justify-center items-center rounded-xl 2xl:h-[23rem] 2xl:w-[35.25rem] ">
        {props.onShowType()}
        {props.onShowScore()}
    </div>
  )
}

export default QuizzChartScore