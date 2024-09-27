const QuizzThemeHeader = (props: any) => {
  let showType = false;
  let classStyleProgress = "h-[72px] flex justify-between items-center";
  let probar = "esto es una prueba";
  if (typeof props.onShowType === "function") showType = true;
  return (
    <header className={showType ? classStyleProgress  : "h-[72px] flex justify-end pt-7"}>
      {showType && props.onShowType()}
      {props.onShowToggle()}
    </header>
  );
};

export default QuizzThemeHeader;
