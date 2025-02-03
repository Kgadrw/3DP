import { MapPin, Users, Lightbulb, Headphones } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const AboutPage = () => {
  const features = [
    {
      title: "Expert Team",
      description:
        "Our team consists of highly skilled professionals with years of experience in data management and analytics.",
      icon: <Users className="w-6 h-6 text-[#fdb740]" />,
    },
    {
      title: "Innovative Solutions",
      description:
        "We provide cutting-edge solutions that are tailored to meet the unique needs of your business.",
      icon: <Lightbulb className="w-6 h-6 text-[#fdb740]" />,
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions or issues you may have.",
      icon: <Headphones className="w-6 h-6 text-[#fdb740]" />,
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-8 bg-gradient-to-b from-blue-50 to-background lg:pt-28">
      <div className="container px-4 mx-auto space-y-16">
        
        <Card className="max-w-4xl mx-auto transition-shadow hover:shadow-lg bg-[#122e46] text-white border-2 border-[#fdb740]">
          <CardHeader>
            <CardTitle className="relative pb-4 text-3xl text-center text-white font-semibold">
              Who We Are
              <div className="absolute bottom-0 w-24 h-1 transform -translate-x-1/2 bg-[#fdb740] left-1/2"></div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-center text-gray-200">
              We specialize in providing comprehensive services that empower businesses to harness the full potential of their data. With a focus on driving informed decision-making, we offer a range of solutions designed to transform raw information into actionable insights.
            </p>
          </CardContent>
        </Card>

      
        <section>
          <div className="relative mb-12">
            <h2 className="text-3xl font-bold text-center text-[#122e46]">
              Why Choose Us?
              <div className="absolute bottom-0 w-20 h-1 transform -translate-x-1/2 bg-[#fdb740] left-1/2 -bottom-2"></div>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="transition-all duration-300 bg-[#122e46] text-white border-2 border-[#fdb740]"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-[#fdb740]/20 rounded-lg">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl text-white font-semibold">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-gray-200">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        
        <section>
          <div className="relative mb-12">
            <h2 className="text-3xl font-bold text-center text-[#122e46]">
              Find Us Here
              <div className="absolute bottom-0 w-20 h-1 transform -translate-x-1/2 bg-[#fdb740] left-1/2"></div>
            </h2>
          </div>
          <Card className="bg-[#122e46] text-white border-2 border-[#fdb740]">
            <CardHeader className="bg-[#fdb740]/10">
              <div className="flex items-center space-x-2 text-[#122e46]">
                <MapPin className="w-6 h-6 text-[#fdb740]" />
                <Badge variant="secondary" className="py-2 text-lg font-medium text-[#122e46]">
                  kLab, Telecom House, Kigali, Rwanda
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative w-full h-96">
                <iframe
                  title="Google Map Location - kLab Kigali"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.9570692182385!2d30.085852415112755!3d-1.939467747145516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6eb4b136305%3A0xfa7ecaf4c40f3383!2skLab!5e0!3m2!1sen!2srw!4v1695157308670!5m2!1sen!2srw"
                  className="w-full h-full border-0 rounded-b-lg"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
