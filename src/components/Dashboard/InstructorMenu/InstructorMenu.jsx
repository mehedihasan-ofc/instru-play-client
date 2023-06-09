import React from 'react';
import { FaFolderPlus, FaMouse } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const InstructorMenu = () => {
    return (
        <>
            {/* <li><Link to='/dashboard/student-home'><FaMousePointer /> My Selected Classes</Link></li> */}
            <li><Link to='/dashboard/add-class'><FaFolderPlus /> Add a Class</Link></li>
            <li className='my-2'><Link to='/dashboard/my-classes'><FaMouse /> My Classes</Link></li>
        </>
    );
};

export default InstructorMenu;