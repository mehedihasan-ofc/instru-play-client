import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [], refetch, isLoading } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes/manage-classes');
        return res.data;
    })

    const handleApproveClass = singleClass => {
        console.log('Approve');
    }

    const handleDenyClass = singleClass => {
        console.log('Deny');
    }
 
    return (
        <div className='my-container my-5'>
            <div>
                <div className="overflow-x-auto bg-white shadow-md">
                    <table className="table table-xs">
                        {/* head */}
                        <thead>
                            <tr className='uppercase'>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Class name</th>
                                {/* <th>Instructor name</th>
                                <th>Instructor email</th> */}
                                <th>Instructor</th>
                                <th>Av. seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Approve</th>
                                <th>Deny</th>
                                <th>feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((singleClass, idx) => <tr key={singleClass._id}>
                                    <td>
                                        {idx + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-10 h-10">
                                                <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className='font-semibold'>{singleClass.className}</span>
                                    </td>
                                    {/* <td>{singleClass.instructorName}</td>
                                    <td>{singleClass.instructorEmail}</td> */}
                                    <td>
                                        <span className='font-medium'>{singleClass.instructorName}</span>
                                        <br />
                                        <span className="badge badge-ghost badge-sm mt-1">{singleClass.instructorEmail}</span>
                                    </td>
                                    <td className='text-center'>
                                        <span className='badge badge-secondary badge-outline'>{singleClass.availableSeats}</span>
                                    </td>
                                    <td className='text-end'>
                                        <span className='badge badge-primary badge-outline'>${singleClass.price}</span>
                                    </td>
                                    <td>
                                        <span className='badge badge-warning badge-outline'>{singleClass.status}</span>
                                    </td>
                                    <td>
                                        <button onClick={() => handleApproveClass(singleClass)} className="btn btn-xs btn-success">Approve</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDenyClass(singleClass)} className="btn btn-xs btn-error">Deny</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-xs btn-outline btn-accent">feedback</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClasses;