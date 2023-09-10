import React from 'react'
import { 
            AiFillClockCircle, 
            AiFillCalendar 
        } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import EditTask from '../mobiles/EdittTask';


const PreviewwTask = () => {

  const [edit, setEdit] = React.useState(false);

  const outEdit = () => {
    setEdit(!edit)
  }

  const [show, setShow] = React.useState(false);

  const showEdit = () => {
    setShow(!show)
  }


  return (

    <div>
        { edit ?

        null :
    // {/* <div className="w-full h-full pt-[15px] pb-[20px]"> */}

 (   <div className='lg:hidden w-full bg-[#0d0d0d65] backdrop-blur-sm absolute h-screen z-50 top-0 flex flex-col justify-between transition-all ease-in-out ml-[-17px]'>
            
            <div></div>

        <div className="w-full h-[75%] bg-white flex justify-center items-start rounded-tr-3xl rounded-tl-3xl">
                <div className="w-[87%] flex flex-col justify-center items-center">

                <div className='w-full flex justify-between items-center pt-[25px]'>
                      <h5></h5>
                      <div className='font-bold text-[17px]' onClick={outEdit}>
                          <CgClose />
                      </div>
                </div>

        <div className='w-full pt-[15px] pb-[20px]'>

            <h5 className='text-[14px] font-bold text-[#3F5BF6]'>Create Wireframe</h5>

            <div className="w-full mt-[15px] flex  items-center outline-none">
                <div className='flex items-center gap-3'>
                    <div>
                        <AiFillCalendar />
                    </div>
                    <h5 className='font-bold text-[13px]'>07 September, 2023</h5>
                </div>
            </div>

            <div className="w-full mt-[15px] flex items-center outline-none">
                <div className='flex items-center gap-3'>
                    <div>
                        <AiFillClockCircle />
                    </div>
                    <h5 className='font-bold text-[14px]'>8:00 - 10:00 AM</h5>
                </div>
            </div>

            <div className="w-full mt-[15px] flex justify-between items-center">
                <button className="border-[#3F5BF6] text-[#3F5BF6] border-[1px] h-[35px] w-[47%] text-[13px] font-bold outline-none">Delete</button>
                <button className="bg-[#3F5BF6] h-[35px] w-[47%] text-white text-[13px] font-bold cursor-pointer hover:bg-[#0E31F2] outline-none " onClick={showEdit}>Edit</button>
            </div>

        </div>

        </div>
        </div>
        

    </div>
  )
    // :
    // null 
    }

    { show ? 
        <div>
            <EditTask />
        </div>
    :
    null
    }

    </div>
  )
}

export default PreviewwTask;