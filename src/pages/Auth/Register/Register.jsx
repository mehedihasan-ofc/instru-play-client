import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { saveUser } from '../../../api/auth';
import Cover from '../../Shared/Cover/Cover';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserData, setReload, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        setError('');

        // validate
        if (data.password !== data.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (data.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        if (!/[A-Z]/.test(data.password)) {
            setError('Password must contain at least one capital letter');
            return;
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
            setError('Password must contain at least one special character');
            return;
        }

        createUser(data.email, data.password)
            .then(result => {
                updateUserData(result.user, data.name, data.photoUrl)
                    .then(() => {
                        setReload(true);
                        // save user mongodb
                        const saveUserInfo = { name: data.name, email: data.email, image: data.photoUrl, role: 'student' }
                        saveUser(saveUserInfo);
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Congrats! Signup successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true })
                    })
                    .catch(err => {
                        console.log(err);
                        setError(err.message);
                    })
            })
            .catch(err => {
                console.log(err);
                setError(err.message);
            });
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // save user mongodb
                const saveUserInfo = { name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photoURL, role: 'student' }
                saveUser(saveUserInfo);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err);
                setError(err.message);
            })
    }

    return (
        <div>
            <Cover title='Create Your Account'></Cover>
            <div className="flex justify-center items-center h-full p-8">
                <div className="bg-white shadow-md border p-6 w-[500px]">
                    <p className='text-red-500 font-semibold text-center mb-2'>{error}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-3xl text-center font-merriweather font-bold mb-2">Sign up</h2>
                        <div className="mb-2">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                {...register('name', { required: 'Name is required' })}
                                className={`border-gray-400 border-solid border py-2 px-3 w-full rounded-md ${errors.name ? 'border-red-500' : ''}`}
                                placeholder="Enter your name"
                            />
                            {errors.name && <p className='text-red-500 font-semibold text-sm'>{errors.name.message}</p>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register('email', { required: 'Email is required' })}
                                className={`border-gray-400 border-solid border py-2 px-3 w-full rounded-md ${errors.email ? 'border-red-500' : ''}`}
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className='text-red-500 font-semibold text-sm'>{errors.email.message}</p>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    {...register('password', { required: 'Password is required' })}
                                    className={`border-gray-400 border-solid border py-2 px-3 w-full rounded-md ${errors.password ? 'border-red-500' : ''}`}
                                    placeholder="Enter your password"
                                />
                                {errors.password && <p className='text-red-500 font-semibold text-sm'>{errors.password.message}</p>}
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2"
                                    onClick={togglePassword}
                                >
                                    {showPassword ? <FaEye className='text-lg' /> : <FaEyeSlash className='text-lg' />}
                                </button>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                {...register('confirmPassword', { required: 'Confirm Password is required' })}
                                className={`border-gray-400 border-solid border py-2 px-3 w-full rounded-md ${errors.confirmPassword ? 'border-red-500' : ''}`}
                                placeholder="Confirm your password"
                            />
                            {errors.confirmPassword && <p className='text-red-500 font-semibold text-sm'>{errors.confirmPassword.message}</p>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="photoUrl" className="block text-gray-700 font-semibold mb-2">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                id="photoUrl"
                                {...register('photoUrl')}
                                className="border-gray-400 border-solid border py-2 px-3 w-full rounded-md"
                                placeholder="Enter the URL of your photo"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="gender" className="block text-gray-700 font-semibold mb-2">
                                Gender
                            </label>
                            <select
                                id="gender"
                                {...register('gender')}
                                className="border-gray-400 border-solid border py-2 px-3 w-full rounded-md"
                            >
                                <option value="">Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                {...register('phoneNumber')}
                                className="border-gray-400 border-solid border py-2 px-3 w-full rounded-md"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                                Address
                            </label>
                            <textarea
                                id="address"
                                {...register('address')}
                                className="border-gray-400 border-solid border py-2 px-3 w-full rounded-md"
                                placeholder="Enter your address"
                            ></textarea>
                        </div>
                        <div className='text-center mt-4'>
                            <button
                                type="submit"
                                className="btn btn-error bg-orange-500 text-white hover:bg-orange-600 font-bold py-2 px-7 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 w-full"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                    <p className='text-center mt-3 font-semibold'>Already have an account? <Link to='/login' className='text-orange-600'>Login</Link></p>

                    <div className='p-2 my-4'>
                        <button onClick={handleGoogleLogin} className='btn rounded-full btn-primary btn-outline flex text-blue-500 items-center justify-center w-full'>
                            <FaGoogle className='text-xl mr-3' />
                            <span className='font-semibold'>Continue with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;