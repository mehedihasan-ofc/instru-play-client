import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const AllClassesCard = ({ singleClass }) => {

    const { user, role } = useContext(AuthContext);
    const { image, className, instructorName, availableSeats, price } = singleClass;
    // const [, refetch] = useCart();
    // const navigate = useNavigate();
    // const location = useLocation();

    const handleAddToSelect = singleClass => {

        console.log(singleClass);

        // if (user && user.email) {

        //     const cartItem = { menuItem: _id, name, image, price, email: user.email }

        //     fetch('http://localhost:5000/carts', {
        //         method: "POST",
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(cartItem)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             if (data.insertedId) {
        //                 refetch();
        //                 Swal.fire({
        //                     position: 'top-end',
        //                     icon: 'success',
        //                     title: 'Food added on the cart',
        //                     showConfirmButton: false,
        //                     timer: 1500
        //                 })
        //             }
        //         })
        // }
        // else {
        //     Swal.fire({
        //         title: 'Please Login',
        //         icon: 'warning',
        //         showCancelButton: true,
        //         confirmButtonColor: '#3085d6',
        //         cancelButtonColor: '#d33',
        //         confirmButtonText: 'Login Now'
        //     }).then((result) => {
        //         if (result.isConfirmed) {
        //             navigate('/login', { state: { from: location } })
        //         }
        //     })
        // }
    }

    return (
        <div className={`card w-full mb-5 md:mb-0 md:w-96 bg-base-100 shadow-md ${availableSeats === 0 ? 'bg-red-500' : ''}`}>
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p>{instructorName}</p>
                <p>{availableSeats}</p>
                <p>{price}</p>
                <div onClick={() => handleAddToSelect(singleClass)} className="card-actions justify-end">
                    <button disabled={availableSeats === 0 || role === "instructor" || role === "admin"} className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default AllClassesCard;