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
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import InstructorRoute from "./InstructorRoute";
import StudentHome from "../pages/Dashboard/StudentHome/StudentHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import InstructorHome from "../pages/Dashboard/InstructorHome/InstructorHome";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
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
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: '/dashboard/student-home',
                element: <StudentHome />
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
                path: '/dashboard/admin-home',
                element: <AdminHome />
            },
            {
                path: '/dashboard/manage-classes',
                element: <ManageClasses />
            },
            {
                path: '/dashboard/manage-users',
                element: <ManageUsers />
            },
            // instructor route
            {
                path: '/dashboard/instructor-home',
                element: <InstructorRoute><InstructorHome /></InstructorRoute>
            },
            {
                path: '/dashboard/add-class',
                element: <InstructorRoute><AddClass /></InstructorRoute>
            },
            {
                path: '/dashboard/my-classes',
                element: <InstructorRoute><ManageClasses /></InstructorRoute>
            }
        ]
    }
]);

export default router;