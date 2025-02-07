import React, { useState } from "react";
import { motion } from "framer-motion";
import servicesData from "../libs/ServicesData.d";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Services: React.FC = () => {
  const cardWidth = 280;
  const infiniteSlides = [...servicesData, ...servicesData, ...servicesData]; // Tripled to avoid gaps
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <section id="services" className="pt-12 pb-16 bg-[#f1f5f9]">
      <div className="container px-4 mx-auto text-center">
        <h2 className="mb-8 text-4xl font-bold text-[#122e46]">Our Services</h2>
        <p className="mb-12 text-lg text-gray-700">
          We offer a range of services designed to help your business leverage
          data and technology effectively.
        </p>
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
          <motion.div
            className="flex w-max gap-8 justify-center"
            animate={{ x: -currentIndex * cardWidth }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            {infiniteSlides.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg w-64 flex-shrink-0 transition-transform duration-300 hover:bg-[#fdb740]"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="object-contain w-16 h-16 transition-transform duration-300"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#122e46]">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700">{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <div
            className="cursor-pointer w-12 h-12 flex items-center justify-center border-2 border-[#122e46] bg-[#122e46] rounded-full transition-colors duration-300 hover:bg-[#fdb740] hover:border-[#fdb740] group"
            onClick={goToPrev}
          >
            <FaChevronLeft className="text-white text-2xl transition-colors duration-300 group-hover:text-white" />
          </div>
          <div
            className="cursor-pointer w-12 h-12 flex items-center justify-center border-2 border-[#122e46] bg-[#122e46] rounded-full transition-colors duration-300 hover:bg-[#fdb740] hover:border-[#fdb740] group"
            onClick={goToNext}
          >
            <FaChevronRight className="text-white text-2xl transition-colors duration-300 group-hover:text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
