import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AllClassesCard = ({ singleClass }) => {

    const { role } = useContext(AuthContext);
    const { image, className, instructorName, availableSeats, price } = singleClass;

    return (
        <div className={`card w-full mb-5 md:mb-0 md:w-96 bg-base-100 shadow-md ${availableSeats === 0 ? 'bg-red-500' : ''}`}>
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p>{instructorName}</p>
                <p>{availableSeats}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button disabled={availableSeats === 0 || role === "instructor" || role === "admin"} className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default AllClassesCard;