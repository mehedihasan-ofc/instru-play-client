import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useInstructor from '../../../hooks/useInstructor';
import useAdmin from '../../../hooks/useAdmin';
import useCart from '../../../hooks/useCart';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useEffect } from 'react';

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

  useEffect(() => {
    window.addEventListener('load', handleToggle);
    return () => {
      window.removeEventListener('load', handleToggle);
    };
  }, []);


  const handleToggle = () => {
    const bodyElement = document.getElementsByTagName('body')[0];
    const currentTheme = bodyElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    bodyElement.setAttribute('data-theme', newTheme);
  }

  return (
    <nav className="absolute top-0 left-0 w-full text-white py-4 px-6 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center">
            <Link to="/">
              <h2 className='font-primary text-white text-3xl md:text-4xl'>InstruPlay</h2>
            </Link>
          </div>

          <ul className='items-center hidden uppercase space-x-8 lg:flex'>
            <li className='text-white text-base font-bold'><NavLink className={({ isActive }) => isActive ? "text-[#F24080]" : "text-white"} to="/">Home</NavLink></li>
            <li className='text-white text-base font-bold'><NavLink className={({ isActive }) => isActive ? "text-[#F24080]" : "text-white"} to="/instructors">Instructors</NavLink></li>
            <li className='text-white text-base font-bold'><NavLink className={({ isActive }) => isActive ? "text-[#F24080]" : "text-white"} to="/classes">Classes</NavLink></li>
            {
              user && <li className='text-white text-base font-bold'><NavLink className={({ isActive }) => isActive ? "text-black" : "text-white"} to={isAdmin ? '/dashboard/admin-home' : isInstructor ? '/dashboard/instructor-home' : '/dashboard/student-home'}>Dashboard</NavLink></li>
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
              user ? <button onClick={handleSignOut} className='btn btn-secondary bg-pink-500 text-white hover:bg-pink-600 font-bold px-8 shadow-md transform transition-transform duration-300 hover:scale-105 rounded-full hidden lg:block'>Log Out</button> :
                <button onClick={() => navigate('/login')} className='btn btn-secondary bg-pink-500 text-white hover:bg-pink-600 font-bold px-8 shadow-md transform transition-transform duration-300 hover:scale-105 rounded-full hidden lg:block'>Login</button>
            }

            <div className='flex'>
              <label className="swap swap-rotate">

                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* sun icon */}
                <svg onClick={handleToggle} className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                {/* moon icon */}
                <svg onClick={handleToggle} className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

              </label>
            </div>



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
            <li><Link to="/classes" className="text-gray-800 hover:text-indigo-200 block px-3 py-2 rounded-md text-base font-medium">Classes</Link></li>
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
