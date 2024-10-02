
const QuizzList = (props:any) => {
    const render  = !props.childern ? props.render : props.children;
    const styleDarkMode = !!props.toogleTheme ? 'bg-current-dark' : 'bg-transparent ';
    return (
    <ul className={`flex flex-col gap-3 mt-10 2xl:mt-0 2xl:col-start-3 ${styleDarkMode}`}>
        {props.quizzesInformationStart.map(render)}
    </ul>
  )
}

export default QuizzList