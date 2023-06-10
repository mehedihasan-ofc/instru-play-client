import React from 'react';
import { FaTable, FaUsersCog } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <>
            <li className='font-medium text-sm'><NavLink to='/dashboard/admin-home'><FaTable /> Admin Home</NavLink></li>
            <li className='font-medium text-sm my-2'><NavLink to='/dashboard/manage-classes'><FaTable /> Manage Classes</NavLink></li>
            <li className='font-medium text-sm'><NavLink to='/dashboard/manage-users'><FaUsersCog /> Manage Users</NavLink></li>
        </>
    );
};

export default AdminMenu;