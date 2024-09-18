import React from 'react';

const DataAssessment: React.FC = () => {
  return (
    <main className="bg-gradient-to-r from-[#122e46] via-[#122e46]/70 to-[#122e46]/80 pt-10">
      <h1 className="text-3xl text-center text-white ">
        Where Do You Stand In Data For Your Business?
      </h1>
      <section className="grid w-11/12 gap-3 p-6 mx-auto md:grid-cols-4">
        <aside className="h-64 p-1 md:h-auto">
          <section className="bg-white relative flex flex-col gap-y-4 md:my-64 h-full md:h-[40%] rounded-lg shadow-md">
            <h1 className="m-4 text-2xl font-bold">Data Reactive</h1>
            <div className="h-2 p-[4px] w-6/12 self-end bg-gradient-to-tr from-[#fdb740] to-[#fdb740]/80"></div>
            <p className="m-4 text-[#57647c] font-serif">
              Limited use of data, primarily reacting to immediate needs or issues.
            </p>
            <button
              id="myButton"
              className="p-2 border w-11/12 center bottom-3 hover:ring ring-[#fdb740] rounded-md mx-auto bg-[#fdb740] text-white"
            >
              <span>Learn What Can you do?</span>
              <i className="ml-2 fa fa-chevron-right" aria-hidden="true"></i>
            </button>
          </section>
        </aside>
        <aside className="h-64 p-1 md:h-auto">
          <section className="bg-white relative flex flex-col gap-y-4 md:my-48 rounded-lg shadow-md h-full md:h-[40%]">
            <h1 className="m-4 text-2xl font-bold">Data Literate</h1>
            <div className="h-2 p-[4px] w-6/12 self-end bg-[#fdb740]"></div>
            <p className="m-4 text-[#57647c] font-serif">
              Foundational understanding of data's value, with employees equipped with basic data skills.
            </p>
            <button
              id="myButton"
              className="p-2 border w-11/12 center bottom-3 hover:ring ring-[#fdb740] rounded-md mx-auto bg-[#fdb740] text-white"
            >
              <span>
                Let's Help you understand
                <i className="ml-2 fa fa-chevron-right" aria-hidden="true"></i>
              </span>
            </button>
          </section>
        </aside>
        <aside className="h-64 p-1 md:h-auto">
          <section className="bg-white relative flex flex-col gap-y-4 md:my-24 rounded-lg shadow-md h-full md:h-[40%]">
            <h1 className="m-4 text-2xl font-bold">Data Ready</h1>
            <div className="h-2 p-[4px] w-6/12 self-end bg-gradient-to-tr from-[#fdb740] to-[#fdb740]"></div>
            <p className="m-4 text-[#57647c] font-serif">
              Established data infrastructure and governance, enabling systematic data utilization for decision-making.
            </p>
            <button
              id="myButton"
              className="p-2 border w-11/12 center bottom-3 hover:ring ring-[#fdb740] rounded-md mx-auto bg-[#fdb740] text-white"
            >
              <span>
                Let's Analyze your data
                <i className="ml-2 fa fa-chevron-right" aria-hidden="true"></i>
              </span>
            </button>
          </section>
        </aside>
        <aside className="h-64 p-1 md:h-auto">
          <section className="bg-white relative flex flex-col gap-y-4 rounded-lg shadow-md h-full md:h-[40%]">
            <h1 className="m-4 text-2xl font-bold">Data Experts</h1>
            <div className="h-2 p-[4px] w-6/12 self-end bg-gradient-to-tr from-[#fdb740] to-[#fdb740]"></div>
            <p className="m-4 text-[#57647c] font-serif">
              Advanced expertise in data analytics and utilization, driving innovation and competitive advantage.
            </p>
            <button
              id="myButton"
              className="p-2 border w-11/12 center bottom-3 hover:ring ring-[#fdb740] rounded-md mx-auto bg-[#fdb740] text-white"
            >
              Ready to take action
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
          </section>
        </aside>
      </section>
    </main>
  );
};

export default DataAssessment;
