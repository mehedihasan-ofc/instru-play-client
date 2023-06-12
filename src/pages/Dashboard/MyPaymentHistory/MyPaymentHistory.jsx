import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import MyPaymentHistoryRow from './MyPaymentHistoryRow';

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
                            <th>Class Name</th>
                            <th>price</th>
                            <th>Transaction ID</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myPayment.map((payment, idx) => <MyPaymentHistoryRow key={payment._id} payment={payment} idx={idx} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPaymentHistory;