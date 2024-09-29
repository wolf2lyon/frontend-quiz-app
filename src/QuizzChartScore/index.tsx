const QuizzChartScore = (props:any) => {
  return (
    <div className="bg-white p-8 flex flex-col justify-center items-center rounded-xl 2xl:h-[368px] 2xl:w-[564px] ">
        {props.onShowType()}
        {props.onShowScore()}
    </div>
  )
}

export default QuizzChartScore