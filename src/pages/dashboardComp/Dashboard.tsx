import React from 'react'

import Calender from "./Calender"
import Good from "./Good"
import SlideCalender from "./SlideCalender"
import Tasks from "./Tasks";
import { BiMicrophone } from 'react-icons/bi'
import AdddTask from '../mobiles/AddTask';
// import AddTask from '../mobiles/AddTask';
// import { CgClose } from "react-icons/cg";

const Dashboard = () => {

  const [add, setAdd] = React.useState(false);

  const outAdd = () => {
    setAdd(!add)
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center relative">

      <div className="w-[100%] mt-[65px] fixed bg-white pb-3 z-20">
        <Good /> 
      </div>

      <div className="w-[90%] flex justify-between">

        <div className="w-[100%] lg:w-[68%] h-[300px] ">

          <div className="fixed mt-[145px] bg-white z-10 w-full pb-2">
            <SlideCalender />
          </div>

          <div className="mt-[250px] pb-[40px] lg:pb-[20px]">
            <Tasks />
          </div>

        </div>

        <div className="hidden lg:block lg:w-[27%]  z-10 mt-[140px] mr-[20px]">

          <Calender />

        </div>

      </div>

      <div onClick={outAdd} className="lg:hidden fixed w-full h-[60px] flex justify-center items-center bottom-[0px] bg-white z-20">
        <div className="w-[90%] h-[40px] shadow-md bg-gray-100 border-[1px] rounded pr-2 pl-2 flex justify-between items-center cursor-pointer">

          <h5 className="text-[14px] font-semibold">Input task</h5>

          <div>
            <BiMicrophone style={{color:"#3F5BF6", fontSize:"17px", fontWeight:"700"}} />
          </div>
        </div>
      </div>

      
        { add ? 

                  <div className='w-full'>
                    <AdddTask  />
                  </div>
        :
          null
        }

    </div>
  )
}

export default Dashboard