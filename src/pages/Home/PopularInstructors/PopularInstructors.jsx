import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useInstructors from '../../../hooks/useInstructors';
import InstructorCard from '../../../components/InstructorCard/InstructorCard';

const PopularInstructors = () => {

    const [instructors] = useInstructors();
    const topInstructors = instructors.slice(0, 6);

    return (
        <div className='my-container'>
            <SectionTitle heading='Most Popular Instructors' subHeading='Our Instructors' />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                {
                    topInstructors.map(singleInstructor => <InstructorCard key={singleInstructor._id} singleInstructor={singleInstructor} />)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;