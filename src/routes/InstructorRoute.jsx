import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoaderSpinner from '../pages/Shared/LoaderSpinner/LoaderSpinner';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const InstructorRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <LoaderSpinner />
    }

    if (user && isInstructor) {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;