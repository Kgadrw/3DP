import React, { useEffect, useState, useCallback } from "react";
import { ChevronUp } from "lucide-react";
import DataAssessment from "../components/DataAssessment";
import WhoCanWeHelp from "../components/WhoCanWeHelp";
import Services from "./Service";
import { carouselData } from "../libs/carouselData.d";

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="min-h-screen">
      <main
        id="home"
        className="relative bg-gradient-to-r from-[#122e46] via-[#122e46]/80 to-[#122e46]/30 min-h-screen"
      >
        <header className="flex flex-col items-center min-h-screen px-6 pt-24 text-white md:flex-row sm:px-12">
          {/* Left Side Content */}
          <div className="flex flex-col space-y-8 md:w-1/2 lg:w-3/5">
            <h1 className="text-3xl font-bold leading-tight sm:text-5xl animate__animated animate__fadeInDown">
              Empowering businesses
              <br />
              to discover and harness
              <br />
              the full potential of data
            </h1>

            <p className="text-xl sm:text-2xl animate__animated animate__fadeInUp">
              Your Partner in Becoming a Data Driven Business
            </p>

            <button
              onClick={() => handleScroll("data-assessment")}
              className="self-start px-8 py-4 mt-6 font-bold tracking-wider text-[#122e46] bg-[#fdb740] rounded-full hover:text-white transition-all duration-300 w-fit"
            >
              Explore Services
            </button>
          </div>

          {/* Right Side Carousel */}
          <div className="relative w-full mt-8 overflow-hidden md:mt-0 md:w-1/2 lg:w-2/5">
            <div className="aspect-video">
              <div
                className="flex h-full transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {carouselData.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-full h-full">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="object-cover w-full h-full rounded-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Below */}
            <div className="flex flex-col items-center mt-4">
              <div className="flex items-center justify-center space-x-3">
                {carouselData.map((_, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <button
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentSlide === index ? "bg-[#fdb740]" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                    {currentSlide === index && (
                      <ChevronUp className="w-4 h-4 mt-1 text-[#fdb740] animate-bounce" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>
      </main>

      <section id="data-assessment">
        <Services />
        <DataAssessment />
      </section>

      <section id="who-can-we-help">
        <WhoCanWeHelp />
      </section>
    </div>
  );
};

export default HomePage;
