import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import servicesData from "../libs/ServicesData.d";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Services: React.FC = () => {
  const cardWidth = 220 + 12; // Reduced Card width + gap
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = servicesData.length;
  const infiniteSlides = [...servicesData, ...servicesData, ...servicesData]; // Duplicate array to create seamless loop

  // Ref for tracking visibility
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50%" });

  // Function to scroll next
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Function to scroll previous
  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides
    );
  };

  return (
    <section id="services" className="pt-12 pb-16 bg-[#f1f5f9]" ref={ref}>
      <div className="container relative px-4 mx-auto text-center">
        <motion.h2
          className="mb-6 text-3xl font-bold text-[#122e46]"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="mb-10 text-base text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          We offer a range of services designed to help your business leverage
          data and technology effectively.
        </motion.p>
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
          <motion.div
            className="flex justify-center gap-6 w-max"
            animate={{ x: -currentIndex * cardWidth }}
            transition={{ ease: "linear", duration: 0.2 }}
          >
            {infiniteSlides.map((service, index) => (
              <motion.div
                key={index}
                className="p-4 bg-[#122e46] rounded-lg shadow-lg w-52 flex-shrink-0 "
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-3">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="object-contain w-20 h-16"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="absolute top-2/3 transform -translate-y-1/2 left-4 cursor-pointer w-10 h-10 flex items-center justify-center border-2 border-[#122e46] bg-[#122e46] rounded-full transition-colors duration-300 hover:bg-[#fdb740] hover:border-[#fdb740] group" onClick={goToPrev}>
          <FaChevronLeft className="text-lg text-white" />
        </div>
        <div className="absolute top-2/3 transform -translate-y-1/2 right-4 cursor-pointer w-10 h-10 flex items-center justify-center border-2 border-[#122e46] bg-[#122e46] rounded-full transition-colors duration-300 hover:bg-[#fdb740] hover:border-[#fdb740] group" onClick={goToNext}>
          <FaChevronRight className="text-lg text-white" />
        </div>
      </div>
    </section>
  );
};

export default Services;
