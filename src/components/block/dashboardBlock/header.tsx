// import React from 'react'
// import { ImMenu } from "react-icons/im";
import { BiLogOutCircle } from "react-icons/bi"
import { 
          AiFillSetting, 
          // AiFillNotification 
        } from "react-icons/ai";
import { CgBell } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../hooks/reduxState';
import { UseAppDispatch, useAppSelector } from '../../../hooks/Store';
import { useQuery } from '@tanstack/react-query';
import { getOneUser } from '../../../utils/Apis';
import DatasIsaLoading from '../../../pages/isLoading/DataIsLoading';


const Header = () => {

  // const [show, setShow] = React.useState(false)

  // const showLogout = () => {
  //   setShow(!show)
  // }

  const dispatch = UseAppDispatch();
  const navigate = useNavigate();

  const getUser = useAppSelector((state) => state?.currentUser);

  const data = useQuery({
    queryKey: ['to-do'],
    queryFn: () => getOneUser(getUser?._id)
  })

  // console.log(getUser?.email)



  return (
    <div className="w-full h-[65px] shadow-md flex fixed z-40 bg-white justify-center items-center ">

      <div className="w-[90%] flex justify-between items-center">
        <h4 className="text-[20px] font-bold">ToDo</h4>

        {/* <div onClick={showLogout} className="text-[19px] font-bold lg:hidden cursor-pointer">
          <ImMenu />
        </div> */}

        <div className="hidden lg:flex gap-3 items-center">

          <div className="text-[17px] cursor-pointer">
            <AiFillSetting />
          </div>

          <div className="text-[17px] cursor-pointer">
            <CgBell />
          </div>

          <div className="w-[32px] h-[32px] rounded-full  text-white  bg-[#3F5BF6] flex justify-center items-center font-bold">
            {data.isLoading ? (
                <DatasIsaLoading />
              ) : (
                // user?.email?.charAt(0).toUpperCase()
                getUser?.email?.charAt(0).toUpperCase()
              )}
            </div>

          { getUser ?
            <div className='text-[19px] cursor-pointer'
              onClick={() => {
              dispatch(logout());
              navigate("/")}}
            >
              <BiLogOutCircle />
            </div>
          : 
          null}

        </div>

        
          { getUser ?
              <div className="lg:hidden w-[90px] h-[40px] bg-[#3F5BF6] cursor-pointer z-50 rounded flex justify-around items-center transition-all ease-in-out">
                <div className='text-white ml-[7px]'>
                  <BiLogOutCircle />
                </div>
                <h5 className='text-[14px] font-bold text-white mr-[7px]'
                          onClick={() => {
                          dispatch(logout());
                          navigate("/")}}
                        >Logout</h5>
              </div>
            :
            null
          }
        

      </div>

    </div>
  )
}

export default Header;