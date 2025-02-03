import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import servicesData from "../libs/ServicesData.d";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 280;
  const totalSlides = servicesData.length;

  const allCards = [...servicesData, ...servicesData];

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(autoSlideInterval);
  }, [totalSlides]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="services" className="pt-12 pb-16 bg-blue-100">
      <div className="container px-4 mx-auto text-center">
        <h2 className="mb-8 text-4xl font-bold text-blue-800">Our Services</h2>
        <p className="mb-12 text-lg text-gray-700">
          We offer a range of services designed to help your business leverage
          data and technology effectively.
        </p>
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
          <motion.div
            className="flex w-max gap-8 justify-center"
            animate={{
              x: [-currentIndex * cardWidth, -(currentIndex + 1) * cardWidth],
            }}
            transition={{
              ease: "linear",
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {allCards.map((service, index) => (
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
                <h3 className="mb-2 text-xl font-semibold text-blue-800">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700">{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <div
            className="cursor-pointer"
            onClick={goToPrev}
          >
            <FaChevronLeft className="text-3xl text-blue-800 hover:text-blue-600" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg text-blue-800">Slide {currentIndex + 1} of {totalSlides}</span>
            <select
              value={currentIndex}
              onChange={(e) => goToSlide(Number(e.target.value))}
              className="border border-blue-800 px-2 py-1 rounded-md text-blue-800"
            >
              {servicesData.map((_, index) => (
                <option key={index} value={index}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>

          <div
            className="cursor-pointer"
            onClick={goToNext}
          >
            <FaChevronRight className="text-3xl text-blue-800 hover:text-blue-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
