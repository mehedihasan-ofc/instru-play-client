import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layouts/Dashboard";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import MyPaymentHistory from "../pages/Dashboard/MyPaymentHistory/MyPaymentHistory";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/',
                element: <MySelectedClasses />
            },
            {
                path: '/dashboard/my-selected-classes',
                element: <MySelectedClasses />
            },
            {
                path: '/dashboard/my-enrolled-classes',
                element: <MyEnrolledClasses />
            },
            {
                path: '/dashboard/my-payment-history',
                element: <MyPaymentHistory />
            },
            // admin route
            {
                path: '/dashboard/manage-classes',
                element: <ManageClasses />
            },
            {
                path: '/dashboard/manage-users',
                element: <ManageUsers />
            }
        ]
    }
]);

export default router;