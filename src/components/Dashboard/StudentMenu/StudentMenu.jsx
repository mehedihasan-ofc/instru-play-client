import React from 'react';
import { FaMoneyCheckAlt, FaMouse, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StudentMenu = () => {
    return (
        <>
            {/* <li><Link to='/dashboard/student-home'><FaMousePointer /> My Selected Classes</Link></li> */}
            <li className='font-medium text-sm'><Link to='/dashboard/my-selected-classes'><FaShoppingCart /> My Selected Classes</Link></li>
            <li className='font-medium text-sm my-2'><Link to='/dashboard/my-enrolled-classes'><FaMouse /> My Enrolled Classes</Link></li>
            <li className='font-medium text-sm'><Link to='/dashboard/my-payment-history'><FaMoneyCheckAlt /> My Payment History</Link></li>
        </>
    );
};

export default StudentMenu;