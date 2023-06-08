import React from 'react';
import useCart from '../../../hooks/useCart';
import { FaTrash } from 'react-icons/fa';

const MySelectedClasses = () => {

    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, singleClass) => singleClass.price + sum, 0);

    return (
        <div>
            <div className='uppercase flex justify-between items-center'>
                <h3>Total Items: {cart.length}</h3>
                <h3>Total Price: {totalPrice}</h3>
                <button className='btn btn-sm btn-primary'>PAY</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, idx) => <tr key={item._id}>
                            <td>{idx + 1}</td>
                            <td>
                                <div className="avatar">
                                    <div className="w-12 rounded-xl">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.className}
                            </td>
                            <td className='text-end'>${item.price}</td>
                            <td>
                                <button className="btn btn-outline btn-circle btn-secondary btn-xs"><FaTrash /> </button>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;