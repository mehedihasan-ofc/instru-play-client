import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {

    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure();

    const { data: paymentClass = [], refetch, isLoading } = useQuery(['payment'], async () => {
        const res = await axiosSecure.get(`/payment/${id}`);
        return res.data;
    })

    const { price } = paymentClass;

    return (
        <div className='my-container my-5'>
            <div>
                <h2 className='text-xl'>Class Name: {paymentClass.className}</h2>
            </div>

            <Elements stripe={stripePromise}>
                <CheckoutForm paymentClass={paymentClass} price={price} />
            </Elements>
        </div>
    );
};

export default Payment;