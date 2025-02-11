import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const DataAssessment: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <main className="bg-[#122e46] pt-10">
      <h1 className="px-4 text-2xl text-center text-white sm:text-3xl">
        Where Do You Stand In Data For Your Business?
      </h1>
      <section className="grid w-11/12 gap-3 p-6 mx-auto md:grid-cols-4">
        {["Data Reactive", "Data Literate", "Data Ready", "Data Experts"].map((title, index) => (
          <motion.aside
  key={index}
  className={`h-auto p-1 md:my-${64 - index * 16}`}
  initial="hidden"
  animate="visible"
  whileInView="visible"
  custom={index}
  variants={cardVariants}
>

            <section className="bg-white flex flex-col min-h-[320px] rounded-lg shadow-md">
              <h1 className="m-4 text-xl font-bold text-blue-800 sm:text-2xl">
                {title}
              </h1>
              <div className="h-2 p-[4px] w-6/12 self-end bg-gradient-to-tr from-[#fdb740] to-[#fdb740]/80"></div>
              <p className="m-4 text-sm sm:text-base text-[#57647c] font-serif">
                {index === 0
                  ? "Limited use of data, primarily reacting to immediate needs or issues."
                  : index === 1
                  ? "Foundational understanding of data's value, with employees equipped with basic data skills."
                  : index === 2
                  ? "Established data infrastructure and governance, enabling systematic data utilization for decision-making."
                  : "Advanced expertise in data analytics and utilization, driving innovation and competitive advantage."}
              </p>
              <div className="p-4 mt-auto">
                <button
                  onClick={handleButtonClick}
                  className="w-full p-2 sm:p-3 border hover:ring ring-[#fdb740] rounded-md bg-[#fdb740] text-white transition-all duration-300 hover:bg-[#fdb740]/90 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {index === 0
                    ? "Learn What Can you do?"
                    : index === 1
                    ? "Let's Help you understand"
                    : index === 2
                    ? "Let's Analyze your data"
                    : "Ready to take action"}
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
              </div>
            </section>
          </motion.aside>
        ))}
      </section>
    </main>
  );
};

export default DataAssessment;
