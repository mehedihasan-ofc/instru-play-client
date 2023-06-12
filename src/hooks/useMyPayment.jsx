import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useMyPayment = () => {

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: myPayment = [] } = useQuery({
        queryKey: ['myPayment', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure(`/my-payment?email=${user?.email}`)
            return res.data;
        }
    })

    return [myPayment];
};

export default useMyPayment;