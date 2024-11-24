import React from "react";
import servicesData from "../libs/ServicesData.d";

const Services: React.FC = () => {
  return (
    <section id="services" className="pt-3 pb-10 bg-blue-100">
      <div className="container px-4 mx-auto text-center">
        <h2 className="mb-8 text-4xl font-bold text-blue-800">Our Services</h2>
        <p className="mb-12 text-lg text-gray-700">
          We offer a range of services designed to help your business leverage
          data and technology effectively.
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
              <h3 className="mb-2 text-2xl font-semibold text-blue-800">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
