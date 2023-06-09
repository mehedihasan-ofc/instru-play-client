import React from 'react';
import { FaHome, FaMoneyCheckAlt, FaMouse, FaMousePointer, FaOpencart, FaShoppingCart } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar/DashboardNavbar';

const Dashboard = () => {
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

                <ul className="menu p-4 w-80 h-full bg-white text-base-content mt-10">
                    {/* Sidebar content here */}
                    {/* <li><Link to='/dashboard/student-home'><FaMousePointer /> My Selected Classes</Link></li> */}
                    <li><Link to='/dashboard/my-selected-classes'><FaShoppingCart /> My Selected Classes</Link></li>
                    <li className='my-2'><Link to='/dashboard/my-enrolled-classes'><FaMouse /> My Enrolled Classes</Link></li>
                    <li><Link to='/dashboard/my-payment-history'><FaMoneyCheckAlt /> My Payment History</Link></li>

                    <div className="divider"></div>
                    <li><Link to='/'><FaHome /> Home</Link></li>
                    <li><Link to='/instructors'><FaHome /> Instructors</Link></li>
                    <li><Link to='/Classes'><FaHome /> Classes</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;