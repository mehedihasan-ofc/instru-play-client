import React from 'react';

const ClassCard = ({ singleClass }) => {

    const { image, className, students } = singleClass;

    return (
        // <div className="card w-full mb-5 md:mb-0 md:w-96 bg-base-100 shadow-md">
        //     <figure><img src={image} alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{className}</h2>
        //         <p>Students: {students}</p>
        //     </div>
        // </div>

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{className}</h2>
                <p>Students: {students}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;