import React from 'react';
import MyPaymentHistoryRow from './MyPaymentHistoryRow';
import useMyPayment from '../../../hooks/useMyPayment';

const MyPaymentHistory = () => {

    const [myPayment] = useMyPayment();

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