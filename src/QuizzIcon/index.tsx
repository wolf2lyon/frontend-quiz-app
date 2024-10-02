const QuizzIcon = ({img,name}:{img:string,name:string}) => {
  return (
    <img className="md:w-6 md:h-6 bg-transparent" src={img} alt={name}>
    </img>
  )
}
export default QuizzIcon