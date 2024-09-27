import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
const QuizzConfetti = () => {
 const {width,height} : {width:any;height:any} =useWindowSize();
  return (
      <Confetti
       width={width}
       height={height}
      />
  )
}

export default QuizzConfetti