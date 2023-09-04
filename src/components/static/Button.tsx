// import React from 'react'

export interface buttonProps {
    buttonText : string;
}

const Button:React.FC<buttonProps> = ({buttonText}) => {
  return (
    <div>

        <button className="bg-[#3F5BF6] hover:bg-[#0E31F2] p-[10px] gap-1 cursor-pointer rounded text-white flex justify-around items-center text-[14px] font-bold">+ {buttonText}</button>

    </div>
  )
}

export default Button