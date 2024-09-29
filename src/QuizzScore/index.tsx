const QuizzScore = (props:any) => {
  return (
    <div className="mt-4">
        <p className="block bg-white text-center font-normal text-current text-lg leading-none md:text-[24px] ">
           <span className="block bg-white font-medium text-[88px] text-current mb-4 md:text-[144px]">
            {props.score}
           </span>
           out of {props.totalQuestion}
        </p>
    </div>
  )
}

export default QuizzScore