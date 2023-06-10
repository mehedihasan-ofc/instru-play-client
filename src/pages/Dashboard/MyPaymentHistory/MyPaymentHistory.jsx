import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyPaymentHistory = () => {

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: myPayment = [], refetch } = useQuery({
        queryKey: ['myPayment', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure(`/my-payment?email=${user?.email}`)
            return res.data;
        }
    })

    return (
        <div className='my-container my-5'>
            <div className="overflow-x-auto bg-white shadow-md">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='uppercase'>
                            <th>#</th>
                            <th>email</th>
                            <th>Class Name</th>
                            <th>price</th>
                            <th>Transaction ID</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myPayment.map((payment, idx) => <tr key={payment._id}>
                                <th>{idx + 1}</th>
                                <td>{payment.email}</td>
                                <td>{payment.className}</td>
                                <td>
                                    <span className='badge badge-ghost'>${payment.price}</span>
                                </td>
                                <td>
                                    <span className='badge badge-secondary badge-outline'>{payment.transactionId}</span>
                                </td>
                                <td>
                                    <span className='badge badge-warning badge-outline'>{payment.date}</span>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPaymentHistory;