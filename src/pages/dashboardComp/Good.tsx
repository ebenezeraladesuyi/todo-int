import React from 'react'

import Button from "../../components/static/Button";
import LargeAdd from "../largeScreen/LargeAdd";



const Good = () => {

    const [largeScreenAdd, setLargeScreenAdd] = React.useState(false);

    const showLargeScreenAdd = () => {
        setLargeScreenAdd(!largeScreenAdd)
    }


  return (
    <div className="w-full h-[70px] flex justify-center items-center ">
        <div className="w-[90%] flex justify-between items-center relative">
            <div>
                <h4 className="text-[18px] font-bold lg:text-[20px]">Good Morning Ebenezer!</h4>
                <h5 className="text-gray-400 text-[14px] lg:text-[16px]">You got some task to do.</h5>
            </div>

            <div className="hidden lg:block" onClick={showLargeScreenAdd}>
                <Button buttonText="Create New Task" />
            </div>

            { largeScreenAdd ? 
                <div className='hidden lg:block absolute top-[83px] right-0 z-50 mr-[2px]'>
                    <LargeAdd />
                </div>
            :
                null
            }

        </div>


    </div>
  )
}

export default Good;