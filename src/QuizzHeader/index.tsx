
const QuizzHeader = ({toogleTheme}:{toogleTheme:boolean}) => {
  const styleDarkModeH1 = !!toogleTheme  ? 'text-white' : 'text-current-dark' ;
  const styleDarkModeP = !!toogleTheme  ? 'text-secondary' : 'text-current-light' ;
  return (
    <div className="2xl:col-start-1 2xl:col-end-3 2xl:justify-self-end 2xl:mr-[8.9375rem] bg-transparent">
        <h1 className={`flex flex-col text-4xl font-light md:text-[4rem] md:leading-[4.5rem] bg-transparent ${styleDarkModeH1}`}>Welcome to the <span className={`font-medium md:text-[4rem] bg-transparent ${styleDarkModeH1}`}>Frontend Quiz</span></h1>
        <p className={`italic text-sm font-normal mt-2 md:text-[1.25rem] 2xl:mt-8 bg-transparent ${styleDarkModeP}`}>Pick a subject to get s tarted.</p>   
    </div>
  )
}
export default QuizzHeader