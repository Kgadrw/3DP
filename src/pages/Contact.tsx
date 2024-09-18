import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch('https://getform.io/f/8161111f-3519-4e72-b2aa-fee445259bc8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setError(null);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (err) {
      setIsSubmitted(false);
      setError('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <main
    data-aos="fade-up"
    id="contact"
    className="grid gap-4 py-10 bg-blue-100 md:px-20"
  >
    <aside className="w-10/12 p-12 mx-auto transition-transform transform bg-white rounded-lg shadow-md hover:scale-105">
      <h1 className="mb-4 text-3xl font-bold text-blue-800">Get In Touch</h1>
      <p className="mb-8 text-lg text-gray-700">
        We are always happy to hear from you. Please feel free to reach out to us with any questions or comments you may have.
      </p>
      <section className="space-y-6">
        <div className="flex items-center p-4 transition-colors rounded-md gap-x-4 hover:bg-blue-50">
          <FaMapMarkerAlt className="text-3xl text-orange-500" />
          <div>
            <h2 className="text-xl font-semibold text-blue-800">Address</h2>
            <p className="text-gray-600">123 Main Street, Kigali, Rwanda</p>
          </div>
        </div>
        <div className="flex items-center p-4 transition-colors rounded-md gap-x-4 hover:bg-blue-50">
          <FaEnvelope className="text-3xl text-orange-500" />
          <div>
            <h2 className="text-xl font-semibold text-blue-800">Email</h2>
            <p className="text-gray-600">Exec@execrwanda.com</p>
          </div>
        </div>
        <div className="flex items-center p-4 transition-colors rounded-md gap-x-4 hover:bg-blue-50">
          <FaPhone className="text-3xl text-orange-500" />
          <div>
            <h2 className="text-xl font-semibold text-blue-800">Phone Number</h2>
            <p className="text-gray-600">+250 785 842 428</p>
          </div>
        </div>
      </section>
    </aside>

    <div className="w-10/12 mx-auto bg-white rounded-lg shadow-md">
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold text-blue-800">Contact Us</h3>
        <p className="mb-6 text-gray-700">
          Please fill out the form below and we will get back to you as soon as possible.
        </p>
        {isSubmitted && !error && (
          <div className="p-4 mb-4 text-green-700 bg-green-100 border border-green-300 rounded-md">
            Thank you! Your message has been sent.
          </div>
        )}
        {error && (
          <div className="p-4 mb-4 text-red-700 bg-red-100 border border-red-300 rounded-md">
            {error}
          </div>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-blue-800"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                {...register('firstName', { required: 'First name is required' })}
                className={`w-full h-12 px-3 py-2 text-sm border rounded-md bg-white ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                id="first-name"
                placeholder="Enter your first name"
              />
              {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-blue-800"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                {...register('lastName', { required: 'Last name is required' })}
                className={`w-full h-12 px-3 py-2 text-sm border rounded-md bg-white ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                id="last-name"
                placeholder="Enter your last name"
              />
              {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium text-blue-800"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } })}
              className={`w-full h-12 px-3 py-2 text-sm border rounded-md bg-white ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              id="email"
              placeholder="Enter your email"
              type="email"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium text-blue-800"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              className={`w-full rounded-md border bg-white px-3 py-2 text-sm ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              id="message"
              placeholder="Enter your message"
            ></textarea>
            {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
          </div>

          <button
            className="w-full h-12 font-medium text-white transition duration-300 bg-orange-500 rounded-md hover:bg-orange-600"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </main>
  );
};

export default ContactPage;
