import React from 'react';

const Stat = ({stat}) => {
    return (
        <div className="stat text-center ">
                    <h2 className='text-6xl font-extrabold text-white pb-7'>{stat.stats}</h2>
                    <p className='text-2xl text-white'>{stat.title}</p>
                </div>
    );
};

export default Stat;