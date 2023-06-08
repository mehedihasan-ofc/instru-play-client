import React from 'react';
import useClasses from '../../../hooks/useClasses';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ClassCard from '../../../components/ClassCard/ClassCard';
import LoaderSpinner from '../../Shared/LoaderSpinner/LoaderSpinner';

const PopularClasses = () => {

    const [classes, loading] = useClasses();
    const topClasses = classes.slice(0, 6);
    
    if(loading) {
        return <LoaderSpinner />
    }

    return (
        <div className='my-container my-20'>
            <SectionTitle heading='Most Popular Classes' subHeading='Our Classes' />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                {
                    topClasses.map(singleClass => <ClassCard key={singleClass._id} singleClass={singleClass} />)
                }
            </div>
        </div>
    );
};

export default PopularClasses;