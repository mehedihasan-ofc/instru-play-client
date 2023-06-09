import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users');
        return res.json();
    })

    const handleMakeInstructor = (id) => {
        console.log(id);
    }

    const handleMakeAdmin = (id) => {
        console.log(id);
    }

    return (
        <div className='my-container my-5'>
            <div className="overflow-x-auto bg-white shadow-sm">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className='text-end'>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <td>
                                    {idx + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold ml-5">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{user.email}</span>
                                </td>
                                <td><span className="badge badge-secondary badge-outline capitalize">{user.role}</span></td>
                                <td>
                                    <button onClick={() => handleMakeInstructor(user._id)} disabled={user.role === 'instructor'} className="btn btn-warning btn-xs">Make Instructor</button>
                                </td>
                                <td>
                                    <button onClick={() => handleMakeAdmin(user._id)} disabled={user.role === 'admin'} className="btn btn-success btn-xs">Make Admin</button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;