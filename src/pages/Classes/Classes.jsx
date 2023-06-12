import React from 'react';
import useClasses from '../../hooks/useClasses';
import AllClassesCard from '../../components/AllClassesCard/AllClassesCard';
import LoaderSpinner from '../Shared/LoaderSpinner/LoaderSpinner';
import Cover from '../Shared/Cover/Cover';

const Classes = () => {

    const [classes, loading] = useClasses();

    if (loading) {
        return <LoaderSpinner />
    }

    return (
        <div>
            <Cover title='Choose Your Class'></Cover>
            <div className='my-container my-20'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                    {
                        classes.map(singleClass => <AllClassesCard key={singleClass._id} singleClass={singleClass} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Classes;