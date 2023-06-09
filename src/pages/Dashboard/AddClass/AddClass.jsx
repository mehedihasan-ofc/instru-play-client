import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        const { className, image, instructorName, instructorEmail, availableSeats, price } = data;
        const newClass = { className, image, instructorName, instructorEmail, availableSeats: parseFloat(availableSeats), price: parseFloat(price), students: 0, status: 'pending' }

        axiosSecure.post('/classes', newClass)
            .then(data => {
                console.log("add class", data.data);

                if (data.data.insertedId) {
                    reset();
                    toast.success(`Submitting the new ${className} class was successful.`, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })

    };

    return (
        <div className="my-container my-5">
            <div className="bg-white p-10 shadow-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="instructorName" className="block font-medium mb-2">
                            Instructor name
                        </label>
                        <input
                            type="text"
                            id="instructorName"
                            className={`border border-gray-300 p-2 w-full ${errors.instructorName ? 'border-red-500' : ''}`}
                            readOnly
                            value={user.displayName}
                        />
                        <input type="hidden" {...register('instructorName')} value={user.displayName} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="instructorEmail" className="block font-medium mb-2">
                            Instructor email
                        </label>
                        <input
                            type="email"
                            id="instructorEmail"
                            className={`border border-gray-300 p-2 w-full ${errors.instructorEmail ? 'border-red-500' : ''}`}
                            readOnly
                            value={user.email}
                        />
                        <input type="hidden" {...register('instructorEmail')} value={user.email} />
                    </div>
                    <div className="flex mb-4">
                        <div className="mr-4 w-1/2">
                            <label htmlFor="className" className="block font-medium mb-2">
                                Class name
                            </label>
                            <input
                                type="text"
                                id="className"
                                className={`border border-gray-300 p-2 w-full ${errors.className ? 'border-red-500' : ''}`}
                                {...register('className', { required: true })}
                            />
                            {errors.className && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="classImage" className="block font-medium mb-2">
                                Class Image
                            </label>
                            <input
                                type="url"
                                id="image"
                                className={`border border-gray-300 p-2 w-full ${errors.image ? 'border-red-500' : ''}`}
                                {...register('image', { required: true })}
                            />
                            {errors.image && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mr-4 w-1/2">
                            <label htmlFor="availableSeats" className="block font-medium mb-2">
                                Available seats
                            </label>
                            <input
                                type="number"
                                id="availableSeats"
                                className={`border border-gray-300 p-2 w-full ${errors.availableSeats ? 'border-red-500' : ''}`}
                                {...register('availableSeats', { required: true, min: 1 })}
                            />
                            {errors.availableSeats && <span className="text-red-500">This field is required and must be a number greater than 0</span>}
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="price" className="block font-medium mb-2">
                                Price
                            </label>
                            <input
                                type="number"
                                id="price"
                                className={`border border-gray-300 p-2 w-full ${errors.price ? 'border-red-500' : ''}`}
                                {...register('price', { required: true, min: 0 })}
                            />
                            {errors.price && <span className="text-red-500">This field is required and must be a number greater than or equal to 0</span>}
                        </div>
                    </div>
                    <div className="flex justify-center mt-7">
                        <button type='submit' className="btn btn-secondary btn-outline btn-wide">Add Class</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;
