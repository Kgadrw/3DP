import { MapPin, Users, Lightbulb, Headphones } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const AboutPage = () => {
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
    <main className="min-h-screen pt-24 bg-gradient-to-b from-blue-50 to-background lg:pt-28">
      <div className="container px-4 mx-auto space-y-16">
        {/* About Section */}
        <Card className="max-w-4xl mx-auto transition-shadow hover:shadow-lg">
          <CardHeader>
            <CardTitle className="relative pb-4 text-4xl text-center text-blue-800">
              Who We Are
              <div className="absolute bottom-0 w-24 h-1 transform -translate-x-1/2 bg-blue-500 left-1/2"></div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-center text-muted-foreground">
              We specialize in providing comprehensive services that empower
              businesses to harness the full potential of their data. With a
              focus on driving informed decision-making, we offer a range of
              solutions designed to transform raw information into actionable
              insights.
            </p>
          </CardContent>
        </Card>

        {/* Features Section */}
        <section>
          <div className="relative mb-12">
            <h2 className="text-3xl font-bold text-center text-blue-800">
              Why Choose Us?
              <div className="absolute bottom-0 w-20 h-1 transform -translate-x-1/2 bg-blue-500 left-1/2 -bottom-2"></div>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Location Section */}
        <section>
          <div className="relative mb-12">
            <h2 className="text-3xl font-bold text-center text-blue-800">
              Find Us Here
              <div className="absolute bottom-0 w-20 h-1 transform -translate-x-1/2 bg-blue-500 left-1/2"></div>
            </h2>
          </div>
          <Card>
            <CardHeader className="bg-blue-50">
              <div className="flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-blue-500" />
                <Badge variant="secondary" className="py-2 text-lg font-medium">
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
