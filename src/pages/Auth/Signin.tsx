
import { 
            useMutation, 
            useQueryClient 
        } from "@tanstack/react-query";
import image from "../../assets/undraw_completed_tasks_vs6q.svg";
import { 
            NavLink, 
            useNavigate 
        } from "react-router-dom";
import { UseAppDispatch } from "../../hooks/Store";
import * as yup from "yup";
// import { signin } from "../../utils/Apis";
import Swal from "sweetalert2";
import { setUser } from "../../hooks/reduxState";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useFormik } from 'formik';
import axios from "axios";
import DatasIsaLoading from "../isLoading/DataIsLoading";


const url = "https://todo-int-be.onrender.com/user"


const SignIn = () => {

    const QueryClient = useQueryClient();

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

            // type formData = yup.InferType<typeof validateSchema>
    const posting = useMutation(
        // mutationFn: signin,
    (formData: { email: string; password: string }) => axios.post(`${url}/signin`, formData),
    {
        onSuccess: (data: any) => {
            
        dispatch(setUser(data.data));
        // console.log(data)
        QueryClient.invalidateQueries(['iStandUser']);

        if (data.data) {
            Swal.fire({
              title: "WELCOME BACK",
              text: "It's so cool to see you!",
              timer: 3000,
              icon: "success",
              timerProgressBar: true,
              // willClose: () => {
              //   window.location.reload();
              // },
            });
            navigate("/dashboard", { replace: true });
          } else if (data.message === "Request failed with status code 400") {
            Swal.fire({
              icon: "error",
              title: `${data.message}`,
              text: "User does not exist",
            }) 
        }
    }
    }
    )

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      posting.mutate(values);
    //   console.log(values)
    },
  });


    return (

        <>

            <div className="w-full h-[100vh] flex justify-center items-center ">
                <form onSubmit={formik.handleSubmit} className="w-[300px] h-[360px] md:shadow-lg flex flex-col justify-center items-center gap-[15px] ">
                    {/* <div> */}
                        {/* <div> */}
                            <div className="w-[90px]">
                                <img className="w-full" src={image} />
                            </div>

                            <div className="text-[17px] font-bold text-[#3F5BF6] mb-[20px]">Let's Get You Back In</div>

                            <input className="h-[30px] w-[80%] border-b-[1px] border-gray-400 outline-none" type="text" placeholder="Input Email" 
                            {...formik.getFieldProps("email")}
                            />
                            <p className="text-[7px]"> {formik.touched.email && formik.errors.email} </p>

                            <input className="h-[30px] w-[80%] border-b-[1px] border-gray-400 outline-none" type="password" placeholder="Input Password"  
                            {...formik.getFieldProps("password")}
                            />
                            <p className="text-[7px]">{formik.touched.password && formik.errors.password}</p>

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