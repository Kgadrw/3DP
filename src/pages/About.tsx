import React from "react";
import { MapPin, Users, Lightbulb, Headphones } from "lucide-react";

const AboutPage: React.FC = () => {
  const features = [
    {
      title: "Expert Team",
      description:
        "Our team consists of highly skilled professionals with years of experience in data management and analytics.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Innovative Solutions",
      description:
        "We provide cutting-edge solutions that are tailored to meet the unique needs of your business.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions or issues you may have.",
      icon: <Headphones className="w-6 h-6" />,
    },
  ];

  return (
    <main
      id="about"
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white"
    >
      {/* Top spacing to prevent navbar overlap */}
      <div className="pt-24 lg:pt-28">
        <div className="container px-4 mx-auto">
          {/* About Section */}
          <aside className="max-w-4xl p-8 mx-auto mb-16 transition-all duration-500 bg-white shadow-lg rounded-xl hover:shadow-2xl">
            <div className="relative">
              <h1 className="mb-8 text-4xl font-bold text-center text-blue-800">
                Who We Are
              </h1>
              <div className="absolute w-24 h-1 transform -translate-x-1/2 bg-blue-500 -bottom-2 left-1/2"></div>
            </div>
            <div className="w-11/12 mx-auto mt-12 md:w-9/12">
              <p className="text-xl leading-relaxed text-center text-gray-700">
                We specialize in providing comprehensive services that empower
                businesses to harness the full potential of their data. With a
                focus on driving informed decision-making, we offer a range of
                solutions designed to transform raw information into actionable
                insights.
              </p>
            </div>
          </aside>

          {/* Features Section */}
          <div className="mb-16">
            <div className="relative mb-12">
              <h2 className="text-3xl font-bold text-center text-blue-800">
                Why Choose Us?
              </h2>
              <div className="absolute w-20 h-1 transform -translate-x-1/2 bg-blue-500 -bottom-2 left-1/2"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 mr-4 text-blue-500 bg-blue-100 rounded-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Location Section */}
          <div className="mb-16">
            <div className="relative mb-12">
              <h2 className="text-3xl font-bold text-center text-blue-800">
                Find Us Here
              </h2>
              <div className="absolute w-20 h-1 transform -translate-x-1/2 bg-blue-500 -bottom-2 left-1/2"></div>
            </div>
            <div className="overflow-hidden bg-white shadow-lg rounded-xl">
              <div className="flex items-center p-4 bg-blue-50">
                <MapPin className="w-6 h-6 mr-2 text-blue-500" />
                <span className="text-lg font-medium text-gray-700">
                  kLab, Telecom House, Kigali, Rwanda
                </span>
              </div>
              <div className="relative w-full h-96">
                <iframe
                  title="Google Map Location - kLab Kigali"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.9570692182385!2d30.085852415112755!3d-1.939467747145516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6eb4b136305%3A0xfa7ecaf4c40f3383!2skLab!5e0!3m2!1sen!2srw!4v1695157308670!5m2!1sen!2srw"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
