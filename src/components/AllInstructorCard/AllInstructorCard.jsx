import React from 'react';

const AllInstructorCard = ({ singleInstructor }) => {

    const {image, name, email} = singleInstructor;

    return (
        <div className="card w-full mb-5 md:mb-0 md:w-96 bg-base-100 shadow-md">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default AllInstructorCard;