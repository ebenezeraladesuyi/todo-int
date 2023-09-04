// import React from 'react'

import Button from "../../components/static/Button";

const Good = () => {
  return (
    <div className="w-full h-[90px] flex justify-center items-center">
        <div className="w-[90%] flex justify-between items-center">
            <div>
                <h4 className="text-[18px] font-bold lg:text-[20px]">Good Morning Ebenezer!</h4>
                <h5 className="text-gray-400 text-[14px] lg:text-[16px]">You got some task to do.</h5>
            </div>

            <div className="hidden lg:block">
                <Button buttonText="Create New Task" />
            </div>
        </div>

    </div>
  )
}

export default Good;