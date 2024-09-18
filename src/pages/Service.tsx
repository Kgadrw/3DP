import React from 'react';
import Analytics from '../assets/analytics.jpg';    
import MachineLearning from '../assets/backend.png';
import Consulting from '../assets/consultant.png';
import CustomSolutions from '../assets/asset1.png';

const servicesData = [
  {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with our advanced analytics tools and services.',
    icon: Analytics, 
  },
  {
    title: 'Machine Learning',
    description: 'Leverage machine learning algorithms to build predictive models and enhance decision-making.',
    icon: MachineLearning,
  },
  {
    title: 'Consulting',
    description: 'Receive expert advice and strategies to optimize your data management and technology infrastructure.',
    icon: Consulting, 
  },
  {
    title: 'Custom Solutions',
    description: 'Get tailor-made software solutions that meet your specific business needs and objectives.',
    icon: CustomSolutions,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto text-center">
        <h2 className="mb-8 text-4xl font-bold">Our Services</h2>
        <p className="mb-12 text-lg">
          We offer a range of services designed to help your business leverage data and technology effectively.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <div key={index} className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <div className="flex justify-center mb-4">
                <img src={`${service.icon}`} alt={service.title} className="w-16 h-16" />
              </div>
              <h3 className="mb-2 text-2xl font-semibold">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
