import React from 'react';
import Analytics from '../assets/analytics.jpg';    
import MachineLearning from '../assets/backend.png';
import Consulting from '../assets/consultant.png';
import CustomSolutions from '../assets/asset1.png';
import DataWarehousing from '../assets/data-warehousing.png';
import BusinessIntelligence from '../assets/business-intelligence.png';
import Digitization from '../assets/digital.png';
import DataStrategy from '../assets/backup.png';
import BigData from '../assets/backend.png';

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
  {
    title: 'Data Warehousing',
    description: 'Harness the power of machine learning with our expertly crafted models. We leverage the latest algorithms and technologies to develop predictive and prescriptive models tailored to your specific business needs, enhancing efficiency and innovation.',
    icon: DataWarehousing,
  },
  {
    title: 'Business Intelligence',
    description: 'Unlock actionable insights from your data with our Business Intelligence solutions. We help businesses harness the power of data to drive informed decision-making, optimize processes, and achieve strategic objectives.',
    icon: BusinessIntelligence,
  },
  {
    title: 'Digitization',
    description: 'Transform your business processes and operations with our Digitization services. We help businesses embrace digital technologies to streamline workflows, enhance productivity, and deliver exceptional customer experiences in today\'s digital-first world.',
    icon: Digitization,
  },
  {
    title: 'Data Strategy',
    description: 'Refine your data strategy with our specialized expertise. We customize solutions to harmonize your data goals with business objectives, guaranteeing streamlined management, analysis, and decision-making capabilities.',
    icon: DataStrategy,
  },
  {
    title: 'Big Data',
    description: 'Providing consulting services to assess and address specific data engineering needs, as well as offering training to empower organizations to manage their data effectively.',
    icon: BigData,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-blue-100">
        <div className="container px-4 mx-auto text-center">
            <h2 className="mb-8 text-4xl font-bold text-blue-800">Our Services</h2>
            <p className="mb-12 text-lg text-gray-700">
            We offer a range of services designed to help your business leverage data and technology effectively.
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {servicesData.map((service, index) => (
                <div
                key={index}
                className="p-6 transition-shadow duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-blue-50"
                >
                <div className="flex justify-center mb-4">
                    <img
                    src={service.icon}
                    alt={service.title}
                    className="object-cover w-16 h-16 transition-transform duration-300 transform hover:scale-110"
                    />
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-blue-800">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
                </div>
            ))}
            </div>
        </div>
    </section>
  );
};

export default Services;
