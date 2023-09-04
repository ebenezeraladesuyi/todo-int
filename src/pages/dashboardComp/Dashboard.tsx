// import React from 'react'

import Calender from "./Calender"
import Good from "./Good"
import SlideCalender from "./SlideCalender"
import Tasks from "./Tasks";
import { BiMicrophone } from 'react-icons/bi'

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center relative">

      <div className="w-[100%] mt-[65px] fixed bg-white z-20">
        <Good /> 
      </div>

      <div className="w-[90%] flex justify-between">

        <div className="w-[100%] lg:w-[73%] h-[300px] ">

          <div className="fixed mt-[130px] bg-white z-20 w-full">
            <SlideCalender />
          </div>

          <div className="mt-[220px]">
            <Tasks />
          </div>

        </div>

        <div className="hidden lg:block lg:w-[25%] h-[300px] border-[1px]">

          <Calender />

        </div>

      </div>

      <div className="lg:hidden fixed w-full h-[60px] flex justify-center items-center bottom-[0px] bg-white z-40">
        <div className="w-[90%] h-[40px] shadow-md bg-gray-100 border-[1px] rounded pr-2 pl-2 flex justify-between items-center cursor-pointer">

          <h5 className="text-[14px] font-semibold">Input task</h5>

          <div>
            <BiMicrophone style={{color:"#3F5BF6", fontSize:"17px", fontWeight:"700"}} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard