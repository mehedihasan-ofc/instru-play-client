import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthProvider';
import { saveUser } from '../../../api/auth';
import Cover from '../../Shared/Cover/Cover';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        setError('');

        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
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
            <Cover title='Welcome Back'></Cover>
            <div className="flex justify-center items-center h-full p-8">
                <div className="bg-white shadow-md border p-6 w-[500px]">
                    <p className='text-red-500 font-semibold text-center mb-2'>{error}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-3xl text-center font-merriweather font-bold mb-2">Login</h2>
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

                        <div className='text-end'>
                            <p className='link link-hover'>Forget Password</p>
                        </div>

                        <div className='text-center mt-4'>
                            <button
                                type="submit"
                                className="btn btn-secondary bg-pink-500 text-white hover:bg-pink-600 font-bold py-2 px-7 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 w-full"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <p className='text-center mt-3 font-semibold'>New to InstruPlay? <Link to='/register' className='text-pink-600'>Sign Up</Link></p>

                    <div className='mt-2'>
                        <div className="divider">OR</div>
                        <div className='p-2 mb-2'>
                            <button onClick={handleGoogleLogin} className='btn btn-outline btn-primary flex text-blue-500 items-center rounded-full justify-center w-full'>
                                <FaGoogle className='text-xl mr-3' />
                                <span className='font-semibold'>Continue with Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
