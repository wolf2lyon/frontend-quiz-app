
const QuizzList = (props:any) => {
    const render  = !props.childern ? props.render : props.children;
    return (
    <ul className="flex flex-col gap-3 mt-10">
        {props.quizzesInformationStart.map(render)}
    </ul>
  )
}

export default QuizzList