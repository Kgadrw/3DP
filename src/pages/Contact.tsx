import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <main
      data-aos="fade-up"
      id="contact"
      className="grid gap-4 py-10 border md:px-20 md:grid-cols-2 bg-slate-200"
    >
      <aside className="w-10/12 p-12 mx-auto bg-white rounded-md">
        <h1 className="my-2 text-2xl font-bold">Get In Touch</h1>

        <p className="text-sm text-gray-500">
          We are always happy to hear from you. Please feel free to reach out to
          us with any questions or comments you may have.
        </p>

        <section className="my-4 space-y-8">
          <div className="flex items-center gap-x-4">
            <i className="fa-solid text-[27px] fa-location-dot"></i>
            <div>
              <h2 className="text-xl font-bold">Address</h2>
              <p className="text-sm text-gray-500">
                123 Main Street, Kigali, Rwanda
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <i className="fa-solid text-[27px] fa-envelope"></i>
            <div>
              <h2 className="text-xl font-bold">Email</h2>
              <p className="text-sm text-gray-500">Exec@execrwanda.com</p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <i className="fa-solid text-[27px] fa-phone"></i>
            <div>
              <h2 className="text-xl font-bold">Phone Number</h2>
              <p className="text-sm text-gray-500">+250 785 842 428</p>
            </div>
          </div>
        </section>
      </aside>

      <div className="w-10/12 mx-auto bg-white border rounded-lg shadow-sm text-card-foreground">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-bold tracking-tight">Contact Us</h3>
          <p className="text-sm text-muted-foreground">
            Please fill out the form below and we will get back to you as soon
            as possible.
          </p>
        </div>

        <div className="p-6">
          <form
            action="https://getform.io/f/8161111f-3519-4e72-b2aa-fee445259bc8"
            method="POST"
            className="space-y-4"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none"
                  htmlFor="first-name"
                >
                  First name
                </label>
                <input
                  className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
                  id="first-name"
                  name="firstName"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none"
                  htmlFor="last-name"
                >
                  Last name
                </label>
                <input
                  className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
                  id="last-name"
                  name="lastName"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[100px]"
                id="message"
                name="message"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-4 bg-[#fdb740] hover:bg-[#fdb740] text-white"
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
