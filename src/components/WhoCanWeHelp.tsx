import React from 'react';
import { motion } from 'framer-motion';
import startupImage from '../assets/data-analysis-animate.svg';
import smbImage from '../assets/on-the-office-animate.svg';
import enterpriseImage from '../assets/ent.svg';

const WhoCanWeHelp: React.FC = () => {
  return (
    <main className="pt-12 !pb-0 bg-[#f1f5f9] mb-0">
      <h1 className="my-4 text-3xl text-center">Who Can We Help?</h1>
      <p className="w-11/12 mx-auto my-4 text-center">
        We can potentially help all kinds of businesses achieve their best with
        data science, regardless of the size of your business. Right from making
        businesses understand the potential of data to implementing the right
        structure to process it to make decisions.
      </p>
      <section className="grid w-11/12 gap-8 pt-8 mx-auto md:grid-cols-3">
        {[
          { img: startupImage, title: 'Startups', desc: 'We help startups grasp a hold on the potential of data, explaining to them how to collect data and transform it.' },
          { img: smbImage, title: 'Small Businesses', desc: 'Small businesses have a lot of potential. The only restriction they might have is the time to expand. This is where we help you.' },
          { img: enterpriseImage, title: 'Large Enterprises', desc: 'We help large enterprises to improve the performance of large families of data and to make the best use of it.' }
        ].map((item, index) => (
          <motion.article 
            key={index} 
            className="border shadow-md p-3 space-y-3 rounded-md cursor-pointer bg-[#122e46] group hover:bg-[#fdb740]"
          >
            <motion.img 
              className="w-7/12 mx-auto"
              src={item.img} 
              alt={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            />
            <h1 className="text-2xl text-[#fdb740] group-hover:text-gray-800 font-bold uppercase text-center tracking-wider">
              {item.title}
            </h1>
            <p className="w-11/12 mx-auto text-center text-gray-200 group-hover:text-white">
              {item.desc}
            </p>
          </motion.article>
        ))}
      </section>
    </main>
  );
};

export default WhoCanWeHelp;
