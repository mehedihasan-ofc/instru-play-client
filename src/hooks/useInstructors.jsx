import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useInstructors = () => {

    const { data: instructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/instructors');
            return res.json();
        }
    });

    return [instructors, loading, refetch];
};

export default useInstructors;