import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useMyEnrollClass = () => {

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: myEnrolled = [] } = useQuery({
        queryKey: ['myEnrolled', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure(`/my-enrolled?email=${user?.email}`)
            return res.data;
        }
    })

    return [myEnrolled];
};

export default useMyEnrollClass;