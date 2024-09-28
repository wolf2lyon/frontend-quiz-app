import React from 'react'

const AppQuizz = ({onShowHeader,onShowThemeHeader,onShowList}:{
    onShowThemeHeader:React.FC,
    onShowHeader:React.FC,
    onShowList:React.FC
  }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="w-4/5 ">
          {onShowThemeHeader({})}
          {onShowHeader({})}
          {onShowList({})}
        </div>
      </div>
    );
  };
  

export default AppQuizz