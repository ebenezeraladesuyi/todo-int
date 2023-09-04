// import React from 'react'

import Good from "./Good"

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col items-center">

      <div className="w-[100%]">
        <Good /> 
      </div>

      <div className="w-[90%] flex justify-between">

        <div className="w-[100%] lg:w-[73%] h-[300px] border-[1px]"></div>

        <div className="hidden lg:block lg:w-[25%] h-[300px] border-[1px]"></div>

      </div>

    </div>
  )
}

export default Dashboard