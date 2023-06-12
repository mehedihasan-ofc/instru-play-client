import React from 'react';

const MyPaymentHistoryRow = ({ payment, idx }) => {

    const date = new Date(payment.date);
    const formateDate = date.toLocaleDateString();
    const formateTime = date.toLocaleTimeString();

    return (
        <tr>
            <th>{idx + 1}</th>
            <td>{payment.className}</td>
            <td>
                <span className='badge badge-ghost'>${payment.price}</span>
            </td>
            <td>
                <span className='badge badge-secondary badge-outline'>{payment.transactionId}</span>
            </td>
            <td>
                <span className='badge badge-warning badge-outline'>{formateTime}</span>
            </td>
            <td>
                <span className='badge badge-warning badge-outline'>{formateDate}</span>
            </td>
        </tr>
    );
};

export default MyPaymentHistoryRow;