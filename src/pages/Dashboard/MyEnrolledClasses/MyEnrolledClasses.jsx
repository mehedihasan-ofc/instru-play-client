import React from 'react';
import useMyEnrollClass from '../../../hooks/useMyEnrollClass';

const MyEnrolledClasses = () => {

    const [myEnrolled] = useMyEnrollClass();

    return (
        <div className='my-container my-5'>
            <div className="overflow-x-auto bg-white shadow-md">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='uppercase'>
                            <th>
                                #
                            </th>
                            <th>Class</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myEnrolled.map((enroll, idx) => <tr key={enroll._id}>
                                <td>
                                    {idx + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={enroll.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{enroll.className}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">${enroll.price}</span>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{enroll.status}</span>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;