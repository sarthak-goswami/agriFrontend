import React, { useState } from 'react';

function UpperAnalytics() {
    const [numFarmers,setNumFarmers] = useState(12000);
    const [activeUsers,setActiveUsers] = useState(8765);
    const [avgYield,setAvgYield] = useState(18.5);
    const [waterSaved,setWaterSaved] = useState(23.2);


    return (
        <div className='flex justify-evenly m-5 h-40'>

            <div className='w-1/5  bg-white rounded-2xl flex flex-col justify-evenly shadow-xl transition-transform duration-300 hover:scale-105'>
            <h1 className='m-5 text-2xl font-semibold'>Total Farmers</h1>
            <p className='m-5 font-semibold'>{numFarmers}</p>
            </div>

            <div className='w-1/5 bg-white rounded-2xl  flex flex-col justify-evenly shadow-xl transition-transform duration-300 hover:scale-105'>
            <h1 className='m-5 text-2xl font-semibold'>Active Users</h1>
            <p className='m-5 font-semibold'>{activeUsers}</p>
            </div>

            <div className='w-1/5 bg-white rounded-2xl flex flex-col justify-evenly shadow-xl transition-transform duration-300 hover:scale-105'>
            <h1 className='m-5 text-2xl font-semibold'>Avg. Yield Increase</h1>
            <p className='m-5 text-green-600 font-semibold'>{avgYield}%</p>
            </div>

            <div className='w-1/5 bg-white rounded-2xl  flex flex-col justify-evenly shadow-xl transition-transform duration-300 hover:scale-105'>
            <h1 className='m-5 text-2xl font-semibold'>Water Saved</h1>
            <p className='m-5 text-blue-600 font-semibold'>{waterSaved}%</p>
            </div>

        </div>
    );
}

export default UpperAnalytics;