import React from 'react';
import useClasses from '../../hooks/useClasses';
import AllClassesCard from '../../components/AllClassesCard/AllClassesCard';

const Classes = () => {

    const [classes] = useClasses();

    return (
        <div className='my-container my-20'>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                {
                    classes.map(singleClass => <AllClassesCard key={singleClass._id} singleClass={singleClass} />)
                }
            </div>

        </div>
    );
};

export default Classes;