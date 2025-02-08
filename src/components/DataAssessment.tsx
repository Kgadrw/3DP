import React from "react";
import { useNavigate } from "react-router-dom";

const DataAssessment: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <main className="bg-[#122e46] pt-10">
      <h1 className="px-4 text-2xl text-center text-white sm:text-3xl">
        Where Do You Stand In Data For Your Business?
      </h1>
      <section className="grid w-11/12 gap-3 p-6 mx-auto md:grid-cols-4">
        <aside className="h-auto p-1">
          <section className="bg-white flex flex-col min-h-[320px] md:my-64 rounded-lg shadow-md">
            <h1 className="m-4 text-xl font-bold text-blue-800 sm:text-2xl">
              Data Reactive
            </h1>
            <div className="h-2 p-[4px] w-6/12 self-end bg-gradient-to-tr from-[#fdb740] to-[#fdb740]/80"></div>
            <p className="m-4 text-sm sm:text-base text-[#57647c] font-serif">
              Limited use of data, primarily reacting to immediate needs or
              issues.
            </p>
            <div className="p-4 mt-auto">
              <button
                onClick={handleButtonClick}
                className="w-full p-2 sm:p-3 border hover:ring ring-[#fdb740] rounded-md bg-[#fdb740] text-white transition-all duration-300 hover:bg-[#fdb740]/90 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Learn What Can you do?
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>
          </section>
        </aside>

        <aside className="h-auto p-1">
          <section className="bg-white flex flex-col min-h-[320px] md:my-48 rounded-lg shadow-md">
            <h1 className="m-4 text-xl font-bold text-blue-800 sm:text-2xl">
              Data Literate
            </h1>
            <div className="h-2 p-[4px] w-6/12 self-end bg-[#fdb740]"></div>
            <p className="m-4 text-sm sm:text-base text-[#57647c] font-serif">
              Foundational understanding of data's value, with employees
              equipped with basic data skills.
            </p>
            <div className="p-4 mt-auto">
              <button
                onClick={handleButtonClick}
                className="w-full p-2 sm:p-3 border hover:ring ring-[#fdb740] rounded-md bg-[#fdb740] text-white transition-all duration-300 hover:bg-[#fdb740]/90 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Let's Help you understand
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>
          </section>
        </aside>

        <aside className="h-auto p-1">
          <section className="bg-white flex flex-col min-h-[320px] md:my-24 rounded-lg shadow-md">
            <h1 className="m-4 text-xl font-bold text-blue-800 sm:text-2xl">
              Data Ready
            </h1>
            <div className="h-2 p-[4px] w-6/12 self-end bg-gradient-to-tr from-[#fdb740] to-[#fdb740]"></div>
            <p className="m-4 text-sm sm:text-base text-[#57647c] font-serif">
              Established data infrastructure and governance, enabling
              systematic data utilization for decision-making.
            </p>
            <div className="p-4 mt-auto">
              <button
                onClick={handleButtonClick}
                className="w-full p-2 sm:p-3 border hover:ring ring-[#fdb740] rounded-md bg-[#fdb740] text-white transition-all duration-300 hover:bg-[#fdb740]/90 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Let's Analyze your data
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>
          </section>
        </aside>

        <aside className="h-auto p-1">
          <section className="bg-white flex flex-col min-h-[320px] rounded-lg shadow-md">
            <h1 className="m-4 text-xl font-bold text-blue-800 sm:text-2xl">
              Data Experts
            </h1>
            <div className="h-2 p-[4px] w-6/12 self-end bg-gradient-to-tr from-[#fdb740] to-[#fdb740]"></div>
            <p className="m-4 text-sm sm:text-base text-[#57647c] font-serif">
              Advanced expertise in data analytics and utilization, driving
              innovation and competitive advantage.
            </p>
            <div className="p-4 mt-auto">
              <button
                onClick={handleButtonClick}
                className="w-full p-2 sm:p-3 border hover:ring ring-[#fdb740] rounded-md bg-[#fdb740] text-white transition-all duration-300 hover:bg-[#fdb740]/90 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Ready to take action
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
};

export default DataAssessment;
