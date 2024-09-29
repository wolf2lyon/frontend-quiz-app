const QuizzResult = ({
  showConfetti,
  onShowThemeHeader,
  onShowTitleResult,
  onShowChartScore,
  onShowPlayQuizz,
  onShowConfetti,
}: {
  showConfetti: boolean;
  onShowThemeHeader: React.FC;
  onShowTitleResult: React.FC;
  onShowChartScore: React.FC;
  onShowPlayQuizz: React.FC;
  onShowConfetti: React.FC;
}) => {
  return (
    <div className="flex justify-center pb-4 px-3 2xl:h-screen 2xl:items-center">
      {showConfetti && onShowConfetti({})}
      <div className="w-11/12 2xl:grid 2xl:grid-flow-row 2xl:auto-rows-auto 2xl:grid-cols-2 md:gap-4 2xl:h-[85%] 2xl:w-4/5 2xl:max-w-[1157px]">
        {onShowThemeHeader({})}
        {onShowTitleResult({})}
        <div className="2xl:justify-self-end">
          {onShowChartScore({})}
          {onShowPlayQuizz({})}
        </div>
      </div>
    </div>
  );
};

export default QuizzResult;
