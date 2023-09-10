
import { useMutation } from "@tanstack/react-query";
import image from "../../assets/undraw_completed_tasks_vs6q.svg";
import { 
            NavLink, useNavigate, 
            // useNavigate 
        } from "react-router-dom";
import * as yup from "yup";
import { signup } from "../../utils/Apis";
import { setUser } from "../../hooks/reduxState";
import Swal from "sweetalert2";
import { UseAppDispatch } from "../../hooks/Store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DatasIsaLoading from "../isLoading/DataIsLoading";


const Signup = () => {

    const dispatch = UseAppDispatch();
    const navigate = useNavigate();

    const schema = yup
        .object({
            userName: yup.string().required("input a username"),
            email: yup.string().required("input a valid email"),
            password: yup.string().min(7).required("create a password"),
        })
        .required();

        type formdata = yup.InferType<typeof schema>;

        const posting = useMutation({
            mutationKey: ['todo'],
            mutationFn: signup,

            
            onSuccess: (data: any) => {
                dispatch(setUser(data.data))

                // console.log(data)

                if (data.message === "new user created") {
                  Swal.fire({
                    title: "Account Created",
                    text: "Now let's plan your schedule",
                    icon: "success",
                  });
                  navigate("/dashboard");
                }
                if (data.message
                    === "Request failed with status code 500") {
                  Swal.fire({
                    icon: "error",
                    title: "Error Signup",
                    text: `Email Already Exist`,
                  });
                }
                if (data.message === "Network Error") {
                  Swal.fire({
                    icon: "error",
                    title: `${data.message}`,
                    text: "Please Check Your Internet Connection",
                  });
                }
            }
        })

        const {
            handleSubmit,
            formState: {errors},
            register,
        } = useForm<formdata>({
            resolver: yupResolver(schema),
        });

        const Submit = handleSubmit(async (data) => {
            posting.mutate(data)

            // console.log(data)
        })


    return (

        <>

            <div className="w-[100%] h-[100vh] flex justify-center items-center" >
                {/* <form action=""></form> */}
                <form action="" className="w-[300px] h-[440px] md:shadow-lg flex flex-col justify-center items-center gap-[15px]" onSubmit={Submit}>
                    {/* <div> */}
                        {/* <div> */}
                            <div className="w-[90px]">
                                <img className="w-full" src={image} />
                            </div>

                            <div className="text-[17px] font-bold text-[#3F5BF6] ">Get Started</div>

                            <input className="h-[30px] w-[80%] border-b-[1px] border-gray-400 outline-none" type="text" placeholder="Username" 
                            {...register("userName")}
                            />
                            <p className="text-[7px]">{errors?.userName && errors?.userName?.message}</p>

                            <input className="h-[30px] w-[80%] border-b-[1px] border-gray-400 outline-none" type="text" placeholder="Email" 
                            {...register("email")}
                            />
                            <p className="text-[7px]">{errors?.email && errors?.email?.message}</p>

                            <input className="h-[30px] w-[80%] border-b-[1px] border-gray-400 outline-none" type="text" placeholder="Password" 
                            {...register("password")}
                            />
                            <p className="text-[7px]">{errors?.password && errors?.password?.message}</p>

                            {
                            posting.isLoading ? (
                                <>
                                    <DatasIsaLoading />
                                </>
                            ) : (

                                <button className="bg-[#3F5BF6] text-white w-[80%] h-[40px] flex justify-center items-center cursor-pointer outline-none" type="submit">Signup</button>
                            )
                            }

                            <div className="text-[11px] font-bold">Have an Account? <NavLink to="/"><span style={{color:"blue", cursor:"pointer"}}>Signin!</span></NavLink>
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
                </form>
            </div>

        </> 

    )
}

export default Signup