import React from 'react';
import VisualImage from '../assets/Visual.png';
import DataAssessment from '../components/DataAssessment'; 
import WhoCanWeHelp from '../components/WhoCanWeHelp';

const HomePage: React.FC = () => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main
        id="home"
        className="min-h-[90dvh] relative bg-gradient-to-r from-[#122e46] via-[#122e46]/80 to-[#122e46]/30"
      >
        <header
          className="min-h-screen my-auto text-white bg-gradient-to-r from-primary-400 to-primary-600"
        >
          <div
            className="absolute md:left-[6rem] top-[2rem] md:top-[6rem] mx-auto space-y-[3rem] px-4"
          >
            <h1
              className="text-3xl font-bold capitalize md:text-5xl animate__animated animate__fadeInDown"
            >
              Empowering businesses <br />
              to discover and harness<br />
              the full potential of data
            </h1>
            <p className="mt-4 text-xl animate__animated animate__fadeInUp">
              Your Partner in Becoming a Data Driven Business
            </p>

            <button
              onClick={() => handleScroll('data-assessment')}
              className="bg-white z-50 tracking-wider text-[#122e46] hover:bg-blue-400 hover:text-white transition-all duration-300 delay-200 font-bold py-4 px-4 rounded-full mt-6"
            >
              Explore Services
            </button>
          </div>
          <div className="relative right-0 hidden md:absolute md:block xl:bottom-5">
            <img
              src={VisualImage}
              className="w-10/12 hidden md:block h-[80vh] xl:h-[90vh]"
              alt="Visual"
            />
          </div>
        </header>
      </main>
      <section id="data-assessment">
        <DataAssessment />
      </section>
      <section id="who-can-we-help">
        <WhoCanWeHelp />
      </section>
    </>
  );
};

export default HomePage;
