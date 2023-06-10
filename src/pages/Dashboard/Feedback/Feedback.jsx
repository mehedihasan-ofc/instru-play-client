import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const Feedback = () => {
    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();

    const { data: feedbackClass = [], refetch, isLoading } = useQuery(['feedback'], async () => {
        const res = await axiosSecure.get(`/feedback/${id}`);
        return res.data;
    });

    const { handleSubmit, register, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        axiosSecure.patch(`/admin/feedback/${id}`, data)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    reset();
                    toast.success(`Sending feedback was successful.`)
                }
                navigate('/dashboard/manage-classes')
            })

    };

    return (
        <div className='my-container my-5'>
            <div className='bg-white shadow-md p-10'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label htmlFor='feedback' className='block text-gray-700 font-bold mb-4'>
                            Feedback: {feedbackClass.className}
                        </label>
                        <textarea
                            id='feedback'
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.feedback ? 'border-red-500' : ''}`}
                            style={{ height: '250px' }} // Adjust the height value as per your requirement
                            placeholder='Enter your feedback...'
                            {...register('feedback', { required: 'Feedback is required' })}
                        />

                        {errors.feedback && <p className='text-red-500 text-xs italic'>{errors.feedback.message}</p>}
                    </div>
                    <button
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        type='submit'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Feedback;