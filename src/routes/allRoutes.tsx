import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { SigninLayout } from "../layout/signinLayout";
// import SignIn from "../pages/Auth/Signin";
import { SignupLayout } from "../layout/signupLayout";
import Dashboard from "../pages/dashboardComp/Dashboard";
// import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
// import Signup from "../pages/Auth/Signup";

const SignIn = lazy(() => import("../pages/Auth/Signin"));
const Signup = lazy(() => import("../pages/Auth/Signup"));
const DashboardLayout = lazy(() => import ("../layout/dashboardLayout/DashboardLayout"))
 

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
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            }
        ]
    },
])