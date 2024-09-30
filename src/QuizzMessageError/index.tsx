import IconError from '../assets/images/icon-error.svg';
const QuizzMessageError = (props:any) => {
  console.log(props.selectOption,props.isClick)
  if(!props.selectOption && props.isClick)
  return (
    <div className='flex justify-center items-center text-accent font-normal text-lg mt-3'>
        <span>
            <img className='md:w-[2.625rem]' src={IconError} alt="icon-error" />
        </span>
        <p className='md:text-2xl md:font-normal'>
            Please select an aswer
        </p>
    </div>
)
};

export default QuizzMessageError;
