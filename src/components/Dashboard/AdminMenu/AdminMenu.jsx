import React from 'react';
import { FaMouse, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <>
            {/* <li><Link to='/dashboard/student-home'><FaMousePointer /> My Selected Classes</Link></li> */}
            <li><Link to='/dashboard/manage-classes'><FaShoppingCart /> Manage Classes</Link></li>
            <li className='my-2'><Link to='/dashboard/manage-users'><FaMouse /> Manage Users</Link></li>
        </>
    );
};

export default AdminMenu;