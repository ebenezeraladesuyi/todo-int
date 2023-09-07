
import image from "../../assets/undraw_completed_tasks_vs6q.svg";
import { NavLink } from "react-router-dom";


const SignIn = () => {


    return (

        <>

            <div className="w-full h-[100vh] flex justify-center items-center">
                <div className="w-[300px] h-[330px] md:shadow-lg flex flex-col justify-center items-center gap-[15px]">
                    {/* <div> */}
                        {/* <div> */}
                            <div className="w-[90px]">
                                <img className="w-full" src={image} />
                            </div>

                            <div className="text-[17px] font-bold text-[#3F5BF6] mb-[20px]">Let's Get You Back In</div>

                            <input className="h-[30px] w-[80%] border-b-[1px] border-gray-400" type="text" placeholder="Input Email" />

                            <input className="h-[30px] w-[80%] border-b-[1px] border-gray-400" type="text" placeholder="Input Password" />

                            <button className="bg-[#3F5BF6] text-white w-[80%] h-[40px] flex justify-center items-center cursor-pointer">Signin</button>

                            <div className="text-[11px] font-bold">No Account? <NavLink to="/signup"><span style={{color:"blue", cursor:"pointer"}}>Create one!</span></NavLink>
                            </div>

                            {/* <div className="text-[11px] text-bold text-[#3F5BF6]">Can't access your account?</div> */}

                            {/* <div className="flex gap-3">
                                <button className="bg-[#3F5BF6] text-white w-[100px] h-[40px] flex justify-center items-center">Back</button>
                                <button className="bg-[#3F5BF6] text-white w-[100px] h-[40px] flex justify-center items-center">Next</button>
                            </div> */}
                        {/* </div> */}
                    {/* </div> */}

                    {/* <Bottom>
                        <Key>
                            <KeyLogo src="" />
                            <Option>Sign-in options</Option>
                        </Key>
                    </Bottom> */}
                </div>
            </div>

        </> 

    )
}

export default SignIn