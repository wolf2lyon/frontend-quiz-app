const QuizzResult = ({
  showConfetti,
  onShowThemeHeader,
  onShowTitleResult,
  onShowChartScore,
  onShowPlayQuizz,
  onShowConfetti,
  toogleTheme
}: {
  showConfetti: boolean;
  onShowThemeHeader: React.FC;
  onShowTitleResult: React.FC;
  onShowChartScore: React.FC;
  onShowPlayQuizz: React.FC;
  onShowConfetti: React.FC;
  toogleTheme:boolean
}) => {
  console.log(toogleTheme)
  const styleDarkMode = !!toogleTheme  ? 'bg-current-dark' : '' ;
  return (
    <div className={`flex justify-center pb-4 px-3 2xl:items-center 2xl:h-screen ${styleDarkMode}`}>
      {showConfetti && onShowConfetti({})}
      <div className="w-11/12 2xl:grid 2xl:grid-flow-row 2xl:auto-rows-auto 2xl:grid-cols-2 md:gap-4 2xl:h-[85%] 2xl:w-4/5 2xl:max-w-[72.3125rem] bg-transparent">
        {onShowThemeHeader({})}
        {onShowTitleResult({})}
        <div className="2xl:justify-self-end bg-transparent">
          {onShowChartScore({})}
          {onShowPlayQuizz({})}
        </div>
      </div>
    </div>
  );
};

export default QuizzResult;
