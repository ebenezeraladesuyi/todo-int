// import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { SigninLayout } from "../layout/signinLayout";
import SignIn from "../pages/Auth/Signin";
import { SignupLayout } from "../layout/signupLayout";
import Signup from "../pages/Auth/Signup";


export const element = createBrowserRouter([
    {
        path: '/',
        element: <SigninLayout />,
        children: [
            {
                index: true,
                element: <SignIn />
            }
        ]
    },
    {
        path: '/signup',
        element: <SignupLayout />,
        children: [
            {
                index: true,
                element: <Signup />
            }
        ]
    },
])