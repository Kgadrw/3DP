import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4 text-[#fdb740] group-hover:text-[#fdb740]" />,
      title: "Address",
      content: "123 Main Street, Kigali, Rwanda",
    },
    {
      icon: <Mail className="w-4 h-4 text-[#fdb740] group-hover:text-[#fdb740]" />,
      title: "Email",
      content: "Exec@execrwanda.com",
    },
    {
      icon: <Phone className="w-4 h-4 text-[#fdb740] group-hover:text-[#fdb740]" />,
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
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="pt-20 lg:pt-24">
        <div className="container px-4 py-12 mx-auto lg:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <aside className="p-6 bg-[#122e46] shadow-lg rounded-lg text-white hover:shadow-2xl transition-all duration-300">
              <div className="relative mb-4">
                <h1 className="text-xl font-semibold">Get In Touch</h1>
                <div className="absolute w-10 h-1 bg-[#fdb740] -bottom-2"></div>
              </div>

              <p className="mb-6 text-sm">
                We're always happy to hear from you. Feel free to reach out!
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 rounded-lg cursor-pointer group hover:bg-[#fdb740]/10"
                  >
                    <div className="p-2 mr-3 text-[#fdb740] bg-[#fdb740]/10 rounded-lg group-hover:bg-[#fdb740]/20">
                      {info.icon}
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold">{info.title}</h2>
                      <p>{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            <div className="p-6 bg-[#122e46] shadow-lg rounded-lg text-white hover:shadow-2xl transition-all duration-300">
              <div className="relative mb-4">
                <h2 className="text-xl font-semibold">Send Us a Message</h2>
                <div className="absolute w-10 h-1 bg-[#fdb740] -bottom-2"></div>
              </div>

              {isSubmitted && !error && (
                <div className="p-3 mb-4 text-green-700 bg-green-100 border-l-4 border-green-500 rounded-r-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {error && (
                <div className="p-3 mb-4 text-red-700 bg-red-100 border-l-4 border-red-500 rounded-r-lg">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {["firstName", "lastName"].map((field) => (
                    <div key={field} className="space-y-1">
                      <label
                        className="text-xs font-medium"
                        htmlFor={field}
                      >
                        {field === "firstName" ? "First Name" : "Last Name"}
                      </label>
                      <input
                        required
                        type="text"
                        id={field}
                        name={field}
                        className="w-full px-3 py-2 text-gray-700 transition-colors border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdb740] focus:border-[#fdb740] bg-[#f0f0f0] hover:bg-[#f0f0f0]/90"
                        placeholder={`Enter your ${
                          field === "firstName" ? "first" : "last"
                        } name`}
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-1">
                  <label
                    className="text-xs font-medium"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 text-gray-700 transition-colors border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdb740] focus:border-[#fdb740] bg-[#f0f0f0] hover:bg-[#f0f0f0]/90"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    className="text-xs font-medium"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-3 py-2 text-gray-700 transition-colors border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#fdb740] focus:border-[#fdb740] bg-[#f0f0f0] hover:bg-[#f0f0f0]/90"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-5 py-2 text-white transition-all duration-300 bg-[#fdb740] rounded-lg hover:bg-[#e5a632] disabled:opacity-50 disabled:cursor-not-allowed"
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
