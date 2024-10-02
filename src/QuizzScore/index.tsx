const QuizzScore = (props:any) => {
  const styleDarkMode = !!props.toogleTheme ? 'bg-transparent text-white' : 'bg-white text-current';
  return (
    <div className="mt-4 bg-transparent">
        <p className={`block text-center font-normal text-current text-lg leading-none md:text-[1.5rem] ${styleDarkMode}`}>
           <span className={`block font-medium text-[5.5rem] text-current mb-4 md:text-[9rem] ${styleDarkMode}`}>
            {props.score}
           </span>
           out of {props.totalQuestion}
        </p>
    </div>
  )
}

export default QuizzScore