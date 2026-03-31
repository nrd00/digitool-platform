import React from 'react';
import Start from './Start';

const getStartedSteps = [
  {
    id: 1,
    icon: "https://iili.io/BdEz5Rj.png",
    title: "Sign Up",
    description: "Create your free account in just a few minutes to get started."
  },
  {
    id: 2,
    icon: "https://iili.io/BdEzIf9.png",
    title: "Customize Profile",
    description: "Set up your profile and preferences to match your needs."
  },
  {
    id: 3,
    icon: "https://iili.io/BdEzTle.png",
    title: "Start Using",
    description: "Explore features and start using the app to achieve your goals."
  }
];

const Started = () => {
    return (
        <section className='py-32 bg-[#F9FAFC]'>
            <div className="sterted-content container ">
            <h2 className='text-5xl font-extrabold text-[#101727] text-center pb-4'>Get Started in 3 Steps</h2>
            <p className='text-2xl text-[#627382] text-center'>Start using premium digital tools in minutes, not hours.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-10'>
            {
                getStartedSteps.map(step => <Start key={step.id} step={step}/>)
            }
            </div>
            </div>
        </section>
    );
};

export default Started;