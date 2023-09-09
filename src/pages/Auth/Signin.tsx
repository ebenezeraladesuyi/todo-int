
import { 
            useMutation, 
            // useQueryClient 
        } from "@tanstack/react-query";
import image from "../../assets/undraw_completed_tasks_vs6q.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { UseAppDispatch } from "../../hooks/Store";
import * as yup from "yup";
import { signin } from "../../utils/Apis";
import Swal from "sweetalert2";
import { User } from "../../hooks/reduxState";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DatasIsaLoading from "../isLoading/DataIsLoading";


const SignIn = () => {

    // const QueryClient = useQueryClient();

    // const [showPassword, setshowPassword] = useState(false);
  
    // const fn = () => [setshowPassword(!showPassword)];

    const dispatch = UseAppDispatch();
    const navigate = useNavigate();


    const validateSchema = yup
            .object({
                email: yup.string().required("input your email"),
                password: yup.string().required("input your password")
            })
            .required();

            type formData = yup.InferType<typeof validateSchema>

    const posting = useMutation({
        mutationKey: ['todo'],
        mutationFn: signin,

        onSuccess: (data: any) => {

            dispatch(User(data))

            // console.log(data)

            if (data.message === "login successful") {
              Swal.fire({
                title: "WELCOME BACK",
                text: "successful Login",
                icon: "success",
              });
              navigate("/dashboard");
            }
            if (data.response.data.message === "incorrect password") {
              Swal.fire({
                icon: "error",
                title: "Incorrect Password or Email",
                text: `Check your Email or Password`,
              });
            }
            if (data.message === "Network Error") {
              Swal.fire({
                icon: "error",
                title: `${data.message}`,
                text: "Please Check Your Internet Connection",
              });
            }
          },

    });

    const {
        handleSubmit,
        formState: {errors},
        register
    } = useForm<formData>({
        resolver: yupResolver(validateSchema),
    })

    const Submit = handleSubmit (async (data) => {
        posting.mutate(data)

        // console.log(data)
    })


    // }


    return (

        <>

            <div className="w-full h-[100vh] flex justify-center items-center ">
                <form onSubmit={Submit} className="w-[300px] h-[360px] md:shadow-lg flex flex-col justify-center items-center gap-[15px] ">
                    {/* <div> */}
                        {/* <div> */}
                            <div className="w-[90px]">
                                <img className="w-full" src={image} />
                            </div>

                            <div className="text-[17px] font-bold text-[#3F5BF6] mb-[20px]">Let's Get You Back In</div>

                            <input className="h-[30px] w-[80%] border-b-[1px] border-gray-400 outline-none" type="text" placeholder="Input Email" 
                            {...register("email")}
                            />
                            <p className="text-[7px]">{errors?.email && errors?.email?.message}</p>

                            <input className="h-[30px] w-[80%] border-b-[1px] border-gray-400 outline-none" type="password" placeholder="Input Password"  
                            {...register("password")}
                            />
                            <p className="text-[7px]">{errors?.password && errors?.password?.message}</p>

                            {
                            posting.isLoading ? (
                                <>
                                    <DatasIsaLoading />
                                </>
                            ) : (

                                <button className="bg-[#3F5BF6] text-white w-[80%] h-[40px] flex justify-center items-center cursor-pointer outline-none"
                                type="submit">Signin</button>
                             )
                             }

                            {/* <button className="bg-[#3F5BF6] text-white w-[80%] h-[40px] flex justify-center items-center cursor-pointer outline-none">Signin</button> */}

                            <div className="text-[11px] font-bold">No Account? <NavLink to="/signup"><span style={{color:"blue", cursor:"pointer"}}>Create one!</span></NavLink>
                            </div>

                            
                    
                </form>
            </div>

        </> 

    )
}

export default SignIn