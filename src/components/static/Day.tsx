import React from 'react'

export interface iDay {
    day: string;
    date: string;
}

const Day:React.FC<iDay> = ({day, date}) => {
  return (
    <div>
        
        <div className="w-[55px] h-[70px] md:w-[70px] shadow-md border-[1px] flex flex-col justify-center items-center rounded-md cursor-pointer hover:bg-gray-200 text-[13px] md:text-[15px]">
            <h5 className="font-bold">{day}</h5>
            <h5 className="font-bold">{date}</h5>
        </div>
    </div>
  )
}

export default Day;