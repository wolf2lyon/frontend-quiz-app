import React from 'react'

const AppQuizz = ({onShowHeader,onShowThemeHeader,onShowList}:{
    onShowThemeHeader:React.FC,
    onShowHeader:React.FC,
    onShowList:React.FC
  }) => {
    return (
      <div className="flex flex-col items-center pb-5 2xl:h-screen 2xl:justify-center">
        <div className="w-4/5 2xl:grid 2xl:grid-flow-row 2xl:auto-rows-auto md:gap-4 md:gap-y-8 2xl:h-[80%]">
          {onShowThemeHeader({})}
          {onShowHeader({})}
          {onShowList({})}
        </div>
      </div>
    );
  };
  

export default AppQuizz