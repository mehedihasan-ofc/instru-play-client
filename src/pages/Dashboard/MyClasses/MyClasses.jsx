import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyClasses = () => {

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure(`/classes/my-classes?email=${user?.email}`)
            return res.data;
        }
    })

    return (
        <div className='my-container my-5'>
            <div className="overflow-x-auto bg-white shadow-md">
                <table className="table">
                    {/* head */}
                    <thead className='uppercase'>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class</th>
                            <th>Price</th>
                            <th>AVAIL. Seats</th>
                            <th>Enrolled</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((myClass, idx) => <tr key={myClass._id}>
                                <td>
                                    {idx + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{myClass.className}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">${myClass.price}</span>
                                </td>
                                <td>
                                    <span className='badge badge-accent badge-outline'>{myClass.availableSeats}</span>
                                </td>
                                <td>
                                    <span className='badge badge-primary badge-outline'>{myClass.students}</span>
                                </td>
                                <td>
                                    <span className='badge badge-secondary badge-outline'>{myClass.status}</span>
                                </td>
                                {myClass.feedback && <td>
                                    <button className="btn btn-ghost btn-xs">{myClass.feedback}</button>
                                </td>}
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClasses;