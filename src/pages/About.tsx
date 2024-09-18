import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <main id="about" className="py-12 bg-blue-50">
      <div className="container px-4 mx-auto">
        {/* About Section */}
        <aside className="max-w-4xl p-8 mx-auto mb-12 transition-transform duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
          <h1 className="mb-8 text-3xl font-bold text-center text-blue-800">
            Who We Are
          </h1>
          <div className="w-11/12 mx-auto md:w-8/12">
            <p className="mb-8 text-lg text-center text-gray-700">
              We specialize in providing comprehensive services that empower
              businesses to harness the full potential of their data. With a
              focus on driving informed decision-making, we offer a range of
              solutions designed to transform raw information into actionable
              insights.
            </p>
          </div>
        </aside>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-bold text-center text-blue-800">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Expert Team', description: 'Our team consists of highly skilled professionals with years of experience in data management and analytics.' },
              { title: 'Innovative Solutions', description: 'We provide cutting-edge solutions that are tailored to meet the unique needs of your business.' },
              { title: 'Customer Support', description: 'Our support team is available 24/7 to assist you with any questions or issues you may have.' },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-6 transition-colors duration-300 bg-white rounded-lg shadow-lg hover:bg-gray-100"
              >
                <div className="mr-4 text-3xl text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-width Google Map Card */}
        <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="relative w-full h-80">
            <iframe
                title="Google Map Location - kLab Kigali"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.9570692182385!2d30.085852415112755!3d-1.939467747145516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6eb4b136305%3A0xfa7ecaf4c40f3383!2skLab!5e0!3m2!1sen!2srw!4v1695157308670!5m2!1sen!2srw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
