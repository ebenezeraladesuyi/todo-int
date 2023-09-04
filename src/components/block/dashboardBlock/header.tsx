// import React from 'react'


import { ImMenu } from "react-icons/im";
import { 
          AiFillSetting, 
          // AiFillNotification 
        } from "react-icons/ai";
import { CgBell } from "react-icons/cg";


const Header = () => {
  return (
    <div className="w-full h-[65px] shadow-md flex fixed z-40 bg-white justify-center items-center">

      <div className="w-[90%] flex justify-between items-center">
        <h4 className="text-[20px] font-bold">ToDo</h4>

        <div className="text-[19px] font-bold lg:hidden cursor-pointer">
          <ImMenu />
        </div>

        <div className="hidden lg:flex gap-3 items-center">

          <div className="text-[17px] cursor-pointer">
            <AiFillSetting />
          </div>

          <div className="text-[17px] cursor-pointer">
            <CgBell />
          </div>

          <div className="w-[32px] h-[32px] rounded-full  text-white  bg-[#3F5BF6] flex justify-center items-center font-bold">E</div>

        </div>

      </div>

    </div>
  )
}

export default Header;