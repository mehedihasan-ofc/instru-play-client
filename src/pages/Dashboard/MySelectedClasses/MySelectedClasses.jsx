import React from 'react';
import useCart from '../../../hooks/useCart';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MySelectedClasses = () => {

    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((sum, singleClass) => singleClass.price + sum, 0);

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
            <div className='uppercase flex justify-between items-center bg-white p-3 rounded-md shadow-sm'>
                <h3>Total Items: {cart.length}</h3>
                <h3>Total Price: {totalPrice}</h3>
                <button className='btn btn-sm btn-primary'>PAY</button>
            </div>

            <div className="overflow-x-auto bg-white my-2 shadow-md">
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
                            <td>${item.price}</td>
                            <td>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-outline btn-circle btn-secondary btn-md text-xl"><FaTrash /> </button>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;