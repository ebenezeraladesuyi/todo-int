import React from 'react'
import { 
            // AiFillClockCircle, 
            AiFillCalendar 
        } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { CgBell } from "react-icons/cg";
import * as yup from "yup";
import { UseAppDispatch, useAppSelector } from '../../hooks/Store';
import { createTask } from '../../utils/Apis';
import { iUser } from '../../types/interface';
import { setUser } from '../../hooks/reduxState';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import DatasIsaLoading from '../isLoading/DataIsLoading';


const AdddTask = () => {

  const [add, setAdd] = React.useState(false);

  const outAdd = () => {
    setAdd(!add)
  }

  const dispatch = UseAppDispatch()

  const getUser = useAppSelector((state) => state?.currentUser)

  console.log(getUser)

//   target title
// const [title, setTitle] = React.useState("")
// // const [day, setDay] = React.useState("")
// const [begin, setBegin] = React.useState("")
// const [emd, setEnd] = React.useState("")

  const schema = yup
  .object({
      title: yup.string().required(),
      startTime: yup.string().required(),
      endTime: yup.string().required(),
  })
  .required();
  
  type formdata = yup.InferType<typeof schema>;

    const {
        handleSubmit,
        // formState: {errors},
        register,
    } = useForm<formdata>({
        resolver: yupResolver(schema),
    });
  
  const posting = useMutation({
    mutationKey: ['addTask'],
    mutationFn: (data : iUser) => createTask(data, getUser?._id),
  
    
    onSuccess: (data: any) => {
        dispatch(setUser(data))

        console.log(data)
    }
  })

    const Submit = handleSubmit(async (data) => {
        posting.mutate(data)

        // console.log(data)
    })


  return (

    <div>
        { add ?

        null :
    // {/* <div className="w-full h-full pt-[15px] pb-[20px]"> */}

 (   <div className='lg:hidden w-full bg-[#0d0d0d65] backdrop-blur-sm fixed h-screen z-50 top-0 bottom-0 flex flex-col justify-between transition-all ease-in-out'>
            
            <div></div>

        <div className="w-full bg-white flex justify-center items-center rounded-tr-3xl rounded-tl-3xl transition-all ease-in-out">
            <form onSubmit={Submit} className="w-[87%] flex flex-col justify-center items-center">

                <div className='w-full flex justify-between items-center pt-[20px]'>
                      <h5 className='text-[13px] font-bold'>Add Task</h5>
                      <div className='font-bold text-[17px]' onClick={outAdd}>
                          <CgClose />
                      </div>
                </div>

            <div className='w-full pt-[15px] pb-[20px]'>

            <input type="text" className="h-[100px] w-full border-[1px] p-[7px] flex justify-start content-start items-start outline-none" 
                {...register("title")}
            />

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
                    <input type="time" 
                        {...register("startTime")}
                    />
                </div>
                
                <div className="shadow-md w-[30%] h-[35px] flex justify-around items-center outline-none">
                    {/* <div className="text-[12px]">
                        <AiFillCalendar />
                    </div> */}
                    <input type="time" 
                        {...register("endTime")}
                    />
                </div>
            </div>

            <div className="w-full mt-[15px] flex  items-center gap-2">
                <div>
                    <CgBell />
                </div>
                <h6 className="text-gray-400 text-[13px]">10 minutes before</h6>
            </div>

            <div className="w-full mt-[15px] flex justify-between items-center">
                <button onClick={outAdd} className="border-[#3F5BF6] text-[#3F5BF6] border-[1px] h-[35px] w-[47%] text-[13px] font-bold outline-none">Cancel</button>

                    {
                        posting.isLoading ? (
                            <>
                                 <DatasIsaLoading />
                            </>
                    ) : (

                            <button type='submit' className="bg-[#3F5BF6] h-[35px] w-[47%] text-white text-[13px] font-bold cursor-pointer hover:bg-[#0E31F2] outline-none">Add</button>
                        )
                    }
                
            </div>

        </div>

        </form>
        </div>
        

    </div>
  )
    // :
    // null 
    }

    </div>
  )
}

export default AdddTask;