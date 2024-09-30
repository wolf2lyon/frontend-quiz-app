const QuizzScore = (props:any) => {
  return (
    <div className="mt-4">
        <p className="block bg-white text-center font-normal text-current text-lg leading-none md:text-[1.5rem] ">
           <span className="block bg-white font-medium text-[5.5rem] text-current mb-4 md:text-[9rem]">
            {props.score}
           </span>
           out of {props.totalQuestion}
        </p>
    </div>
  )
}

export default QuizzScore