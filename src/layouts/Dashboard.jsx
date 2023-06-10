import React from 'react';
import { FaAccusoft, FaHome, FaUsers } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar/DashboardNavbar';
import AdminMenu from '../components/Dashboard/AdminMenu/AdminMenu';
import InstructorMenu from '../components/Dashboard/InstructorMenu/InstructorMenu';
import StudentMenu from '../components/Dashboard/StudentMenu/StudentMenu';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import LoaderSpinner from '../pages/Shared/LoaderSpinner/LoaderSpinner';

const Dashboard = () => {

    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading] = useInstructor();

    // if(isAdminLoading || isInstructorLoading) {
    //     return <LoaderSpinner />
    // }

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-[#F4F7FE] flex flex-col items-center">
                {/* Page content here */}

                <DashboardNavbar />

                <Outlet />

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side shadow-sm">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 h-full bg-white text-base-content">
                    {/* Sidebar content here */}

                    {isAdmin ? <AdminMenu /> : isInstructor ? <InstructorMenu /> : <StudentMenu />}

                    <div className="divider"></div>
                    <li className='font-medium text-sm'><Link to='/'><FaHome /> Home</Link></li>
                    <li className='font-medium text-sm my-2'><Link to='/instructors'><FaUsers /> Instructors</Link></li>
                    <li className='font-medium text-sm'><Link to='/Classes'><FaAccusoft /> Classes</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;