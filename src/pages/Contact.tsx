import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      content: "123 Main Street, Kigali, Rwanda",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "Exec@execrwanda.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      content: "+250 785 842 428",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://getform.io/f/8161111f-3519-4e72-b2aa-fee445259bc8",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setError(null);
        e.currentTarget.reset();
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      setError("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="pt-24 lg:pt-28">
        <div className="container px-4 py-24 mx-auto lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information Card */}
            <aside className="p-8 transition-all duration-500 bg-white shadow-lg rounded-xl hover:shadow-xl">
              <div className="relative mb-8">
                <h1 className="text-3xl font-bold text-blue-800">
                  Get In Touch
                </h1>
                <div className="absolute w-20 h-1 bg-orange-500 -bottom-2"></div>
              </div>

              <p className="mb-12 text-lg text-gray-700">
                We are always happy to hear from you. Please feel free to reach
                out to us with any questions or comments you may have.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 transition-all duration-300 rounded-lg cursor-pointer group hover:bg-blue-50"
                  >
                    <div className="p-3 mr-4 text-orange-500 transition-colors bg-orange-100 rounded-lg group-hover:bg-orange-200">
                      {info.icon}
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-blue-800">
                        {info.title}
                      </h2>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            {/* Contact Form Card */}
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <div className="relative mb-8">
                <h2 className="text-2xl font-bold text-blue-800">
                  Send Us a Message
                </h2>
                <div className="absolute w-20 h-1 bg-orange-500 -bottom-2"></div>
              </div>

              {isSubmitted && !error && (
                <div className="p-4 mb-6 text-green-700 bg-green-100 border-l-4 border-green-500 rounded-r-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {error && (
                <div className="p-4 mb-6 text-red-700 bg-red-100 border-l-4 border-red-500 rounded-r-lg">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {["firstName", "lastName"].map((field) => (
                    <div key={field} className="space-y-2">
                      <label
                        className="text-sm font-medium text-blue-800"
                        htmlFor={field}
                      >
                        {field === "firstName" ? "First Name" : "Last Name"}
                      </label>
                      <input
                        required
                        type="text"
                        id={field}
                        name={field}
                        className="w-full px-4 py-3 text-gray-700 transition-colors border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder={`Enter your ${
                          field === "firstName" ? "first" : "last"
                        } name`}
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-blue-800"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 text-gray-700 transition-colors border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-blue-800"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 text-gray-700 transition-colors border border-gray-300 rounded-lg resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 text-white transition-all duration-300 bg-[#fdb740] rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
