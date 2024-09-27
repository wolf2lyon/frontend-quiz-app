const QuizzChartScore = (props:any) => {
  return (
    <div className="bg-white p-8 flex flex-col justify-center items-center rounded-xl">
        {props.onShowType()}
        {props.onShowScore()}
    </div>
  )
}

export default QuizzChartScore