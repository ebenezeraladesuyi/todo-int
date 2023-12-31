import React from 'react'
import { 
    // AiFillClockCircle, 
    AiFillCalendar 
} from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { CgBell } from "react-icons/cg";


const LargeEdit = () => {


  const [addEdit, setEditLarge] = React.useState(false);

  const showEditLarge = () => {
    setEditLarge(!addEdit)
  }


  return (
    <div>

        { addEdit ? 
        
            null

            :

            <div className=" hidden lg:block w-[351px] h-[333px] rounded-lg bg-white shadow-md transition-all ease-in-out">

        {/* <div className='lg:hidden w-full bg-[#0d0d0d65] backdrop-blur-sm absolute h-screen z-50 top-0 flex flex-col justify-between transition-all ease-in-out'> */}
                    
                    

                <div className="w-full  bg-white flex justify-center items-center">
                        <div className="w-[87%] flex flex-col justify-center items-center">

                        <div className='w-full flex justify-between items-center pt-[20px]'>
                            <h5 className='text-[13px] font-bold'>Edit Task</h5>
                            <div className='font-bold text-[17px]cursor-pointer' onClick={showEditLarge}>
                                <CgClose />
                            </div>
                        </div>

                <div className='w-full pt-[15px] pb-[20px]'>

                    <input type="text" className="h-[100px] w-full border-[1px] p-[7px] flex justify-start content-start items-start outline-none" />

                    <div className="w-full mt-[15px] flex justify-between items-center">
                        <div className="shadow-md w-[30%] h-[35px] flex justify-around items-center">
                            <div className="text-[12px]">
                                <AiFillCalendar />
                            </div>
                            <h6 className="text-[12px]">Today</h6>
                        </div>
                        
                        <div className="shadow-md w-[30%] h-[35px] flex justify-around items-center outline-none">
                            {/* <div className="text-[12px]">
                                <AiFillCalendar />
                            </div> */}
                            <input type="time" />
                        </div>
                        
                        <div className="shadow-md w-[30%] h-[35px] flex justify-around items-center outline-none">
                            {/* <div className="text-[12px]">
                                <AiFillCalendar />
                            </div> */}
                            <input type="time" />
                        </div>
                    </div>

                    <div className="w-full mt-[15px] flex  items-center gap-2">
                        <div>
                            <CgBell />
                        </div>
                        <h6 className="text-gray-400 text-[13px]">10 minutes before</h6>
                    </div>

                    <div className="w-full mt-[15px] flex justify-between items-center">
                        <button onClick={showEditLarge} className="border-[#3F5BF6] text-[#3F5BF6] border-[1px] h-[35px] w-[47%] text-[13px] font-bold outline-none">Cancel</button>
                        <button className="bg-[#3F5BF6] h-[35px] w-[47%] text-white text-[13px] font-bold cursor-pointer hover:bg-[#0E31F2] outline-none">Save</button>
                    </div>

                </div>

                </div>
                </div>
                

            </div>

            // : null
        }
  
    </div>
  )
}

export default LargeEdit