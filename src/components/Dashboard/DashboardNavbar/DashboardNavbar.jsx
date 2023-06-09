import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useCart from '../../../hooks/useCart';

const DashboardNavbar = () => {

    const { user } = useContext(AuthContext);
    const [cart] = useCart();

    return (
        <div className="navbar bg-white p-3 shadow-sm">
            <div className="flex-1 ml-5">
                <h2 className='text-3xl'>Hi, {user?.displayName}</h2>
            </div>
            <div className="flex-none mr-5">
                <button className="btn btn-ghost btn-circle mr-10">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">{cart.length}</span>
                    </div>
                </button>
                <button className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default DashboardNavbar;