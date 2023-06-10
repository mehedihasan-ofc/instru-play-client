import React from 'react';
import useCart from '../../../hooks/useCart';
import { FaMoneyBillAlt, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MySelectedClasses = () => {

    const [cart, refetch] = useCart();

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/carts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch();
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='my-container my-5'>

            <div className="overflow-x-auto bg-white my-2 shadow-md">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='uppercase'>
                            <th>#</th>
                            <th>Class</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Delete</th>
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
                            <td>${item.price}</td>
                            <td>
                                <Link to='/dashboard/payment'>
                                    <button className="btn btn-outline btn-circle btn-secondary btn-md text-xl"><FaMoneyBillAlt /> </button>
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-outline btn-circle btn-warning btn-md text-xl"><FaTrash /> </button>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;