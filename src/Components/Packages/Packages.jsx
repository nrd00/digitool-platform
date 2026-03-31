import React from 'react';
import Package from './Package'

const pricingCards = [
  {
    name: "Starter",
    description: "Perfect plan for beginners starting out",
    price: 0,
    priceDuration: "month",
    features: [
      "Basic templates",
      "Limited customization",
      "Email support",
      "Community access"
    ],
    buttonText: "Get Started Free",
    isActive: false,
  },
  {
    name: "Pro",
    description: "Advanced tools for growing professionals",
    price: 19,
    priceDuration: "month",
    features: [
      "All starter features",
      "Premium templates",
      "ATS optimization",
      "Priority support",
      "Export to PDF"
    ],
    buttonText: "Start Pro Trial",
    isActive: true,
  },
  {
    name: "Enterprise",
    description: "Complete solution for teams and businesses",
    price: 49,
    priceDuration: "month",
    features: [
      "All pro features",
      "Team collaboration",
      "Advanced analytics",
      "Dedicated manager",
      "Custom integrations",
      "24/7 support"
    ],
    buttonText: "Contact Us",
    isActive: false,
  }
];

const Packages = () => {
    return (
        <section>
            <div className="package-content container py-20">
            <h2 className='text-4xl font-extrabold pb-4 text-center'>Simple, Transparent Pricing</h2>
            <p className='text-sm text-center pb-1 text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            <div className='packages py-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    pricingCards.map(pack => <Package key={pack.name} pack={pack}/>)
                }
            </div>
            </div>
        </section>
    );
};

export default Packages;