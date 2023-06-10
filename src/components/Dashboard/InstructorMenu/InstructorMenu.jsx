import React from 'react';
import { FaFolderPlus, FaMouse } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const InstructorMenu = () => {
    return (
        <>
            <li className='font-medium text-sm'><NavLink to='/dashboard/instructor-home'><FaFolderPlus /> Instructor Home</NavLink></li>
            <li className='font-medium text-sm'><NavLink to='/dashboard/add-class'><FaFolderPlus /> Add a Class</NavLink></li>
            <li className='font-medium text-sm my-2'><NavLink to='/dashboard/my-classes'><FaMouse /> My Classes</NavLink></li>
        </>
    );
};

export default InstructorMenu;