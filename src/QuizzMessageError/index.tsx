import IconError from '../assets/images/icon-error.svg';
const QuizzMessageError = ({selectOption,isClick}:{selectOption:string,isClick:boolean}) => {
  console.log(selectOption,isClick)
  if(!selectOption && isClick)
  return (
    <div className='flex justify-center items-center text-accent font-normal text-lg mt-3 bg-transparent'>
        <span className='bg-transparent'>
            <img className='md:w-[2.625rem] bg-transparent' src={IconError} alt="icon-error" />
        </span>
        <p className='md:text-2xl md:font-normal bg-transparent'>
            Please select an aswer
        </p>
    </div>
)
};

export default QuizzMessageError;
