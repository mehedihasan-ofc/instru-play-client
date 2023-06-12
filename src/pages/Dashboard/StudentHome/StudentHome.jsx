import React from 'react';
import useCart from '../../../hooks/useCart';
import useMyEnrollClass from '../../../hooks/useMyEnrollClass';
import useMyPayment from '../../../hooks/useMyPayment';

const StudentHome = () => {

    const [cart] = useCart();
    const [myEnrolled] = useMyEnrollClass();
    const [myPayment] = useMyPayment();

    const totalPayment = myPayment.reduce((sum, payment) => sum + payment.price, 0)

    return (
        <div className='my-container my-5'>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Select Class</div>
                    <div className="stat-value text-primary">{cart.length}</div>
                    <div className="stat-desc">Payment or Delete</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Total Enroll Class</div>
                    <div className="stat-value">{myEnrolled.length}</div>
                    <div className="stat-desc">Keep learning</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">Total Payment</div>
                    <div className="stat-value text-secondary">${totalPayment}</div>
                    <div className="stat-desc text-secondary">Congratulations!</div>
                </div>

            </div>
        </div>
    );
};

export default StudentHome;