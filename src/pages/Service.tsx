import React from "react";
import servicesData from "../libs/ServicesData.d";

const Services: React.FC = () => {
  return (
    <div className="mt-20">
      <section
        id="services"
        className="min-h-screen pb-16 pt-28 bg-gradient-to-b from-blue-50 to-blue-100 scroll-mt-20"
      >
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="mb-4 text-4xl font-bold text-blue-800 animate-fade-in">
              Our Services
            </h2>
            <p className="text-lg text-gray-700">
              We offer a range of services designed to help your business
              leverage data and technology effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="relative p-8 transition-all duration-300 ease-in-out bg-white shadow-md group rounded-xl hover:shadow-xl"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 transition-colors duration-300 rounded-full bg-blue-50 group-hover:bg-blue-100">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-blue-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
