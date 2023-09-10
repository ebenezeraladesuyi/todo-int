import React from 'react'
import { 
    AiFillClockCircle, 
    AiFillCalendar 
} from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import LargeEdit from './LargeEdit';
// import { CgBell } from "react-icons/cg";


const LargePreview = () => {


  const [previewLarge, setPreviewLarge] = React.useState(false);

  const showPreviewLarge = () => {
    setPreviewLarge(!previewLarge)
  }

  

  const [largeShow, setLargeShow] = React.useState(false);

  const showLargeEdit = () => {
    setLargeShow(!largeShow)
  }


  return (
    <div>

        { previewLarge ? 
        
            null

            :

            <div className=" hidden lg:block w-[351px] h-[333px] rounded-lg bg-white shadow-md transition-all ease-in-out">

        {/* <div className='lg:hidden w-full bg-[#0d0d0d65] backdrop-blur-sm absolute h-screen z-50 top-0 flex flex-col justify-between transition-all ease-in-out'> */}
                    
                    

                <div className="w-full  bg-white flex justify-center items-center">
                        <div className="w-[87%] flex flex-col justify-center items-center">

                        <div className='w-full flex justify-between items-center pt-[20px]'>
                            <div></div>
                            <div className='font-bold text-[17px]cursor-pointer' onClick={showPreviewLarge}>
                                <CgClose />
                            </div>
                        </div>

                <div className='w-full pt-[15px] pb-[20px]'>

                    <div className="w-full mt-[15px] ">

                        <h5 className='text-[16px] font-bold text-[#3F5BF6]'>Create Wireframe</h5>

                        <div className="w-full mt-[15px] flex items-center outline-none">
                            <div className='flex items-center gap-3'>
                                <div>
                                    <AiFillCalendar />
                                </div>
                                <h5 className='font-bold text-[14px]'>07 September, 2023</h5>
                            </div>
                        </div>

                        <div className="w-full mt-[15px] flex items-center outline-none">
                            <div className='flex items-center gap-3'>
                                <AiFillClockCircle />
                                <h5 className='font-bold text-[14px]'>8:00 - 10:00 AM</h5>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-[15px] flex justify-between items-center">
                        <button className="border-[#3F5BF6] text-[#3F5BF6] border-[1px] h-[35px] w-[47%] text-[13px] font-bold outline-none">Delete</button>
                        <button className="bg-[#3F5BF6] h-[35px] w-[47%] text-white text-[13px] font-bold cursor-pointer hover:bg-[#0E31F2] outline-none" onClick={showLargeEdit}>Edit</button>
                    </div>

                </div>

                </div>
                </div>
                

            </div>

            // : null
        }
        

    { largeShow ? 
        <div className='absolute z-30 top-0'>
            <LargeEdit />
        </div>
    :
    null
    }
  
    </div>
  )
}

export default LargePreview;