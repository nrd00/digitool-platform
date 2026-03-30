import React from 'react';
import Stat from './Stat';

const statsData = [
  { id: 1, stats: "50K+", title: "Active Users" },
  { id: 2, stats: "200+", title: "Premium Tools" },
  { id: 3, stats: "4.9", title: "Ratings" }
];

const Stats = () => {
    return (
        <section className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] py-20'>
            <div className="container flex">
                {statsData.map(stat => <Stat key={stat.id} stat={stat}/>)}
            </div>
        </section>
    );
};

export default Stats;