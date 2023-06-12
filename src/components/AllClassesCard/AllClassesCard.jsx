import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import { FaArrowRight, FaChair, FaMoneyCheckAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AllClassesCard = ({ singleClass }) => {

    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const { image, className, instructorName, availableSeats, price } = singleClass;

    const handleAddToSelect = singleClass => {

        const { _id, className, image, price, instructorName } = singleClass;

        if (user && user.email) {

            const selectedClass = { selectItem: _id, className, image, price, email: user.email, instructorName }

            fetch('https://instru-play-server-mehedihasan-ofc.vercel.app/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        toast.success(`${className} added on the cart`)
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className={`card w-full mb-5 md:mb-0 md:w-96 bg-base-100 shadow-md ${availableSeats === 0 ? 'bg-red-500' : ''}`}>
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p>Instructor Name: {instructorName}</p>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <FaChair className='text-[#F24080]' />
                        <p>{availableSeats}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaMoneyCheckAlt className='text-[#F24080]' />
                        <p>${price}</p>
                    </div>
                </div>

                <div className='divider my-0'></div>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToSelect(singleClass)} disabled={availableSeats === 0 || isAdmin || isInstructor} className="btn btn-secondary btn-outline btn-sm"><FaArrowRight /> Select</button>
                </div>
            </div>
        </div>
    );
};

export default AllClassesCard;