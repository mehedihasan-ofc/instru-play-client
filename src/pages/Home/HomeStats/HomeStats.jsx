import React from 'react';
import statsBg from '../../../assets/statsBg.jpg';
import CountUp from 'react-countup';
import { useQuery } from '@tanstack/react-query';

const HomeStats = () => {

    const { data: homeStats = [] } = useQuery({
        queryKey: ['homeStats'],
        queryFn: async () => {
            const res = await fetch('https://instru-play-server-mehedihasan-ofc.vercel.app/home-stats');
            return res.json();
        }
    });

    const {students, classes, instructors} = homeStats;

    return (
        <div className='my-20'>

            <div style={{ height: "60vh", borderRadius: "0", background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${statsBg}) no-repeat center / cover` }}>

                <div className='my-container'>
                    <div className='grid grid-cols-1 md:grid-cols-4 text-center items-center h-[60vh]'>
                        <div>
                            <span className='text-white font-bold text-5xl'><CountUp className='text-white font-bold text-5xl' end={students} />+</span>
                            <h2 className='text-[#FF7703] font-semibold text-2xl mt-2'>Active Students</h2>
                        </div>
                        <div>
                            <span className='text-white font-bold text-5xl'><CountUp className='text-white font-bold text-5xl' end={classes} />+</span>
                            <h2 className='text-[#FF7703] font-semibold text-2xl mt-2'>Top Classes</h2>
                        </div>
                        <div>
                            <span className='text-white font-bold text-5xl'><CountUp className='text-white font-bold text-5xl' end={instructors} />+</span>
                            <h2 className='text-[#FF7703] font-semibold text-2xl mt-2'>Best Instructors</h2>
                        </div>
                        <div>
                            <span className='text-white font-bold text-5xl'><CountUp className='text-white font-bold text-5xl' end={35} />+</span>
                            <h2 className='text-[#FF7703] font-semibold text-2xl mt-2'>Award Achieved</h2>
                        </div>
                    </div>
                </div>

                {/* <div className='my-container absolute -top-40'>
                    <div className='bg-white w-full md:w-3/4 mx-auto text-center shadow-xl border rounded-xl p-14'>
                        <h2 className='text-lg md:text-4xl font-extrabold'>Committed To The Best Results !</h2>
                        <p className='text-xs md:text-base my-5'>Per sed, mattis. Integer viverra euismod maecenas incidunt, phasellus consequatur aliquam nihil temporibus in assumens deserunt convallis, eius.</p>

                        <button className='bg-[#F24080] px-10 py-4 text-white font-bold rounded-full'>JOIN US NOW</button>
                    </div>

                </div> */}

            </div>
        </div>
    );
};

export default HomeStats;