import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <main id="about" className="py-12">
      <div className="container px-4 mx-auto">
        <aside>
          <h1 className="mb-8 text-3xl font-bold text-center">Who we are</h1>
          <div className="w-11/12 mx-auto md:w-7/12">
            <p className="mb-8 text-lg text-center text-gray-500">
              We specialize in providing comprehensive services that empower
              businesses to harness the full potential of their data. With a
              focus on driving informed decision-making, we offer a range of
              solutions designed to transform raw information into actionable
              insights.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default AboutPage;
