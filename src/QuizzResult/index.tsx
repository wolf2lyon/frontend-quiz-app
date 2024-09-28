const QuizzResult = ({
  showConfetti,
  onShowThemeHeader,
  onShowTitleResult,
  onShowChartScore,
  onShowPlayQuizz,
  onShowConfetti
}: {
  showConfetti:boolean;
  onShowThemeHeader:React.FC;
  onShowTitleResult:React.FC;
  onShowChartScore:React.FC;
  onShowPlayQuizz:React.FC;
  onShowConfetti:React.FC;

}) => {

  return (
    <div className="flex justify-center pb-4 px-3">
      {showConfetti && onShowConfetti({})}
      <div className="w-11/12">
        {onShowThemeHeader({})}
        {onShowTitleResult({})}
        {onShowChartScore({})}
        {onShowPlayQuizz({})}
      </div>
    </div>
  );
};

export default QuizzResult;
