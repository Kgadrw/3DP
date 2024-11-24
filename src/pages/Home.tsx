import React, { useEffect, useState, useCallback } from "react";
import { ChevronUp, ChevronRight } from "lucide-react";
import DataAssessment from "../components/DataAssessment";
import WhoCanWeHelp from "../components/WhoCanWeHelp";
import { carouselData } from "../libs/carouselData.d";
import Services from "../components/Services";

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
    if (!isHovered) {
      const slideInterval = setInterval(nextSlide, 3000);
      return () => clearInterval(slideInterval);
    }
  }, [nextSlide, isHovered]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <main
        id="home"
        className="relative bg-gradient-to-r from-[#122e46] via-[#122e46]/90 to-[#122e46]/80 shadow-xl mt-[4.5rem]"
      >
        <header className="relative flex flex-col items-start h-full px-6 py-20 mx-auto text-white md:flex-row sm:px-12">
          {/* Left Side Content */}
          <div className="z-10 flex flex-col space-y-10 md:w-[45%] lg:w-[45%]">
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold leading-tight md:text-3xl lg:text-4xl animate__animated animate__fadeInDown">
                Empowering
                <span className="text-[#fdb740]"> businesses</span>
                <br />
                to discover and harness
                <br />
                the full potential of
                <span className="bg-gradient-to-r from-[#fdb740] to-orange-400 text-transparent bg-clip-text">
                  {" "}
                  data
                </span>
              </h1>

              <p className="text-lg font-light sm:text-lg md:text-xl animate__animated animate__fadeInUp text-slate-200">
                Your Partner in Becoming a Data Driven Business
              </p>
            </div>

            {/* Spacer for pushing the button further down */}
            <div className="flex-grow "></div>

            <button
              onClick={() => handleScroll("data-assessment")}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group self-start px-8 py-4  text-lg font-bold tracking-wide text-[#122e46] bg-[#fdb740] rounded-full hover:bg-[#fdb740]/90 hover:shadow-lg transition-all duration-300 w-fit flex items-center gap-2"
            >
              Explore Services
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Side Carousel */}
          <div
            className="relative z-10 w-full mt-12 overflow-hidden md:mt-0 md:w-[55%]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="overflow-hidden rounded-lg shadow-2xl aspect-video bg-slate-800">
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
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex flex-col items-center mt-6">
              <div className="flex items-center justify-center px-6 py-2 space-x-4 rounded-full bg-white/10 backdrop-blur-sm">
                {carouselData.map((_, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <button
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-[#fdb740] scale-125"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                    {currentSlide === index && (
                      <ChevronUp className="w-4 h-4 mt-1 text-[#fdb740] animate-bounce absolute -bottom-6" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>
      </main>

      <section id="data-assessment" className="mt-0">
        <Services />
        <DataAssessment />
      </section>

      <section id="who-can-we-help" className="mb-20">
        <WhoCanWeHelp />
      </section>
    </div>
  );
};

export default HomePage;
