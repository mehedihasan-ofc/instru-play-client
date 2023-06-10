import React from 'react';
import { FaMoneyCheckAlt, FaMouse, FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const StudentMenu = () => {
    return (
        <>
            <li className='font-medium text-sm'><NavLink to='/dashboard/student-home'><FaShoppingCart /> Student Home</NavLink></li>
            <li className='font-medium text-sm my-2'><NavLink to='/dashboard/my-selected-classes'><FaShoppingCart /> My Selected Classes</NavLink></li>
            <li className='font-medium text-sm'><NavLink to='/dashboard/my-enrolled-classes'><FaMouse /> My Enrolled Classes</NavLink></li>
            <li className='font-medium text-sm mt-2'><NavLink to='/dashboard/my-payment-history'><FaMoneyCheckAlt /> My Payment History</NavLink></li>
        </>
    );
};

export default StudentMenu;