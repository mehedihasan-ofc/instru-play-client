import React from 'react';

const ClassCard = ({ singleClass }) => {

    const { image, className, students } = singleClass;

    return (
        <div className="card w-full mb-5 md:mb-0 md:w-96 bg-base-100 shadow-md">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p>Students: {students}</p>
            </div>
        </div>
    );
};

export default ClassCard;