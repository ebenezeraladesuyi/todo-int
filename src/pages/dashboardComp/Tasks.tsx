import React from 'react'
import EditTask from '../mobiles/editTask';

const Tasks = () => {

    const [editt, setEditt] = React.useState(false);

    const openEditt = () => {
        setEditt(!editt)
    }

  return (
    <div className="h-[100%] mt-[15px]">

        <h5 className="text-[14px] font-bold mb-[0px] fixed bg-white z-20 pb-2 w-full h-[30px]">
            My Tasks
        </h5>

        <div className="pt-[30px]">

            <div onClick={openEditt} className="bg-[#f9fafb] flex p-[10px] pr-4 pl-4 justify-between items-center rounded shadow-md mb-[9px] hover:bg-gray-300 cursor-pointer">

                <div className="flex gap-4">
                    <input type="checkbox" />

                    <div>
                        <h4 className="text-[13px] lg:text-[15px] font-bold">Create Wireframe</h4>
                        <h4 className="text-gray-400 text-[12px] lg:text-[13px]">10:30am - 11:30am</h4>
                    </div>
                </div>

                <h4 className="text-[13px] lg:text-[15px] font-bold text-gray-400">Today</h4>
            </div>

            <div className="bg-[#f9fafb] flex p-[10px] pr-4 pl-4 justify-between items-center rounded shadow-md mb-[9px]">

                <div className="flex gap-4">
                    <input type="checkbox" />

                    <div>
                        <h4 className="text-[13px] lg:text-[15px] font-bold">Create Wireframe</h4>
                        <h4 className="text-gray-400 text-[12px] lg:text-[13px]">10:30am - 11:30am</h4>
                    </div>
                </div>

                <h4 className="text-[13px] lg:text-[15px] font-bold text-gray-400">Today</h4>
            </div>

            <div className="bg-[#f9fafb] flex p-[10px] pr-4 pl-4 justify-between items-center rounded shadow-md mb-[9px]">

                <div className="flex gap-4">
                    <input type="checkbox" />

                    <div>
                        <h4 className="text-[13px] lg:text-[15px] font-bold">Create Wireframe</h4>
                        <h4 className="text-gray-400 text-[12px] lg:text-[13px]">10:30am - 11:30am</h4>
                    </div>
                </div>

                <h4 className="text-[13px] lg:text-[15px] font-bold text-gray-400">Today</h4>
            </div>

            <div className="bg-[#f9fafb] flex p-[10px] pr-4 pl-4 justify-between items-center rounded shadow-md mb-[9px]">

                <div className="flex gap-4">
                    <input type="checkbox" />

                    <div>
                        <h4 className="text-[13px] lg:text-[15px] font-bold">Create Wireframe</h4>
                        <h4 className="text-gray-400 text-[12px] lg:text-[13px]">10:30am - 11:30am</h4>
                    </div>
                </div>

                <h4 className="text-[13px] lg:text-[15px] font-bold text-gray-400">Today</h4>
            </div>

            <div className="bg-[#f9fafb] flex p-[10px] pr-4 pl-4 justify-between items-center rounded shadow-md mb-[9px]">

                <div className="flex gap-4">
                    <input type="checkbox" />

                    <div>
                        <h4 className="text-[13px] lg:text-[15px] font-bold">Create Wireframe</h4>
                        <h4 className="text-gray-400 text-[12px] lg:text-[13px]">10:30am - 11:30am</h4>
                    </div>
                </div>

                <h4 className="text-[13px] lg:text-[15px] font-bold text-gray-400">Today</h4>
            </div>

            <div className="bg-[#f9fafb] flex p-[10px] pr-4 pl-4 justify-between items-center rounded shadow-md mb-[9px]">

                <div className="flex gap-4">
                    <input type="checkbox" />

                    <div>
                        <h4 className="text-[13px] lg:text-[15px] font-bold">Create Wireframe</h4>
                        <h4 className="text-gray-400 text-[12px] lg:text-[13px]">10:30am - 11:30am</h4>
                    </div>
                </div>

                <h4 className="text-[13px] lg:text-[15px] font-bold text-gray-400">Today</h4>
            </div>

            <div className="bg-[#f9fafb] flex p-[10px] pr-4 pl-4 justify-between items-center rounded shadow-md mb-[9px]">

                <div className="flex gap-4">
                    <input type="checkbox" />

                    <div>
                        <h4 className="text-[13px] lg:text-[15px] font-bold">Create Wireframe</h4>
                        <h4 className="text-gray-400 text-[12px] lg:text-[13px]">10:30am - 11:30am</h4>
                    </div>
                </div>

                <h4 className="text-[13px] lg:text-[15px] font-bold text-gray-400">Today</h4>
            </div>

        </div>

        { editt ?
            <div className='w-full'>
                <EditTask />
            </div>
        :
            null 
        }

    </div>
  )
}

export default Tasks