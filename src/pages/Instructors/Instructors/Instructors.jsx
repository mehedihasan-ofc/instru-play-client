import React from 'react';
import useInstructors from '../../../hooks/useInstructors';
import AllInstructorCard from '../../../components/AllInstructorCard/AllInstructorCard';
import LoaderSpinner from '../../Shared/LoaderSpinner/LoaderSpinner';
import Cover from '../../Shared/Cover/Cover';

const Instructors = () => {

    const [instructors, loading] = useInstructors();

    if (loading) {
        return <LoaderSpinner />
    }

    return (
        <div>
            <Cover title='Meet Our Instructors'></Cover>
            <div className='my-container my-10'>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                    {
                        instructors.map(singleInstructor => <AllInstructorCard key={singleInstructor._id} singleInstructor={singleInstructor} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;