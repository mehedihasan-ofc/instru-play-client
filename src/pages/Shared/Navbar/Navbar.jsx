import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useInstructor from '../../../hooks/useInstructor';
import useAdmin from '../../../hooks/useAdmin';
import useCart from '../../../hooks/useCart';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
  const [cart] = useCart();
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    logOut()
      .then(result => { })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center">
            <Link to="/">
              <h2 className='font-primary text-white text-3xl md:text-4xl'>InstruPlay</h2>
            </Link>
          </div>

          <ul className='items-center hidden space-x-8 lg:flex'>
            <li className='text-white text-base font-semibold'><NavLink className={({ isActive }) => isActive ? "text-black" : "text-white"} to="/">Home</NavLink></li>
            <li className='text-white text-base font-semibold'><NavLink className={({ isActive }) => isActive ? "text-black" : "text-white"} to="/instructors">Instructors</NavLink></li>
            <li className='text-white text-base font-semibold'><NavLink className={({ isActive }) => isActive ? "text-black" : "text-white"} to="/classes">Classes</NavLink></li>
            {
              user && <li className='text-white text-base font-semibold'><NavLink className={({ isActive }) => isActive ? "text-black" : "text-white"} to={isAdmin ? '/dashboard/admin-home' : isInstructor ? '/dashboard/instructor-home' : '/dashboard/student-home'}>Dashboard</NavLink></li>
            }
            {!isAdmin && !isInstructor && <li>
              <Link to='/dashboard/my-selected-classes'>
                <button className="btn">
                  Cart
                  <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
              </Link>
            </li>}
          </ul>

          <div className='flex items-center gap-6'>
            {
              user && <div className='w-10 h-10'>
                <img className={user?.photoURL ? "rounded-full" : ""} title={user?.displayName ? user?.displayName : ""} src={user?.photoURL ? user?.photoURL : ""} alt="" />
              </div>
            }

            {
              user ? <button onClick={handleSignOut} className='font-medium transition duration-200 shadow-md md:mb-0 px-8 py-1 text-lg rounded-full border-transparent border-2 text-black bg-white hidden lg:block'>Log Out</button> :
                <button onClick={() => navigate('/login')} className='font-medium transition duration-200 shadow-md md:mb-0 px-8 py-1 text-lg rounded-full border-transparent border-2 text-black bg-white hidden lg:block'>Login</button>
            }



          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-indigo-200 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-10`}
        >
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li><Link to="/" className="text-gray-800 hover:text-indigo-200 block px-3 py-2 rounded-md text-base font-medium">Home</Link></li>
            <li><Link to="/instructors" className="text-gray-800 hover:text-indigo-200 block px-3 py-2 rounded-md text-base font-medium">Instructors</Link></li>
            <li><Link to="/services" className="text-gray-800 hover:text-indigo-200 block px-3 py-2 rounded-md text-base font-medium">Classes</Link></li>
            {
              user && <li className='text-gray-800 hover:text-indigo-200 block px-3 py-2 rounded-md text-base font-medium'><Link to={isAdmin ? '/dashboard/admin-home' : isInstructor ? '/dashboard/instructor-home' : '/dashboard/student-home'}>Dashboard</Link></li>
            }
            
            {
              !isAdmin && !isInstructor && <li><Link to='/dashboard/my-selected-classes'><button className="btn btn-sm">Cart<div className="badge badge-secondary">+{cart?.length || 0}</div></button></Link></li>
            }

            {
              user ? <li onClick={handleSignOut} className="text-gray-800 hover:text-indigo-200 block px-3 py-2 rounded-md text-base font-medium">Log Out</li> : 
              <li><Link to="/login" className="text-gray-800 hover:text-indigo-200 block px-3 py-2 rounded-md text-base font-medium">Login</Link></li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
