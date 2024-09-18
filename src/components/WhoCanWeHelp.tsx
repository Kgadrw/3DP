import React from 'react';
import startupImage from '../assets/data-analysis-animate.svg';
import smbImage from '../assets/on-the-office-animate.svg';
import enterpriseImage from '../assets/ent.svg'; 

const WhoCanWeHelp: React.FC = () => {
  return (
    <main className="py-12">
      <h1 className="my-4 text-3xl text-center">Who Can We Help?</h1>
      <p className="w-11/12 mx-auto my-4 text-center">
        We can potentially help all kinds of businesses achieve their best with
        data science, regardless of the size of your business. Right from making
        businesses understand the potential of data to implementing the right
        structure to process it to make decisions.
      </p>
      <section className="grid w-11/12 gap-12 mx-auto md:grid-cols-3">
        <article className="border shadow-md py-4 space-y-4 rounded-md cursor-pointer bg-[#122e46] group hover:bg-[#fdb740]">
          <img className="w-8/12 mx-auto" src={startupImage} alt="startups" />
          <h1 className="text-3xl text-[#fdb740] group-hover:text-gray-800 font-bold uppercase text-center tracking-wider">
            Startups
          </h1>
          <p className="w-11/12 mx-auto text-center text-gray-200 group-hover:text-white hover:text-gray-600">
            We help startups grasp a hold on the potential of data, explaining
            to them how to collect data and transform it.
          </p>
        </article>
        <article className="border shadow-md py-4 space-y-4 rounded-md cursor-pointer bg-[#122e46] group hover:bg-[#fdb740]">
          <img className="w-8/12 mx-auto" src={smbImage} alt="SMBs" />
          <h1 className="text-3xl text-[#fdb740] group-hover:text-gray-800 font-bold uppercase text-center tracking-wider">
            SMBs
          </h1>
          <p className="w-11/12 mx-auto text-center text-gray-200 group-hover:text-white">
            Small businesses have a lot of potential. The only restriction they
            might have is the time to expand. This is where we help you.
          </p>
        </article>
        <article className="border transition-all delay-100 duration-300 shadow-md py-4 space-y-4 rounded-md cursor-pointer bg-[#122e46] group hover:bg-[#fdb740]">
          <img className="w-8/12 mx-auto" src={enterpriseImage} alt="Large Enterprises" />
          <h1 className="text-3xl group-hover:text-gray-800 text-[#fdb740] font-bold uppercase text-center tracking-wider">
            Large Enterprises
          </h1>
          <p className="w-11/12 mx-auto text-center text-gray-200 group-hover:text-white">
            We help large enterprises to improve the performance of large
            families of data and to make the best use of it.
          </p>
        </article>
      </section>
    </main>
  );
};

export default WhoCanWeHelp;
