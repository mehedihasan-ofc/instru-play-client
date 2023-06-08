import React from 'react';
import { FaMoneyCheckAlt, FaMouse, FaMousePointer } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}

                <Outlet />

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {/* <li><Link to='/dashboard/student-home'><FaMousePointer /> My Selected Classes</Link></li> */}
                    <li><Link to='/dashboard/my-selected-classes'><FaMousePointer /> My Selected Classes</Link></li>
                    <li><Link to='/dashboard/my-enrolled-classes'><FaMouse /> My Enrolled Classes</Link></li>
                    <li><Link to='/dashboard/my-payment-history'><FaMoneyCheckAlt /> My Payment History</Link></li>

                    <div className="divider"></div>
                    <li><Link to='/'><FaMoneyCheckAlt /> Home</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;