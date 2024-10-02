import React from 'react'

const AppQuizz = ({onShowHeader,onShowThemeHeader,onShowList,toogleTheme}:{
    onShowThemeHeader:React.FC,
    onShowHeader:React.FC,
    onShowList:React.FC,
    toogleTheme:boolean
  }) => {
    const styleDarkMode = !!toogleTheme  ? 'bg-current-dark' : '' ;
    return (
      <div className={`flex flex-col items-center pb-5 h-screen 2xl:justify-center ${styleDarkMode}`}>[
        <div className={`w-4/5 h-full 2xl:grid 2xl:grid-flow-row 2xl:auto-rows-auto md:gap-4 md:gap-y-8 2xl:h-[80%] ${styleDarkMode}`}>
          {onShowThemeHeader({})}
          {onShowHeader({})}
          {onShowList({})}
        </div>
      </div>
    );
  };
  

export default AppQuizz