import React from "react";
import {motion} from 'framer-motion'
const Who = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
      id="who"
      className="w-full relative z-20 gap-6 px-4 lg:px-20 py-20 md:py-32 flex flex-col justify-center items-center text-center">
      <h1 className="bg-clip-text w-fit text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-white to-slate-500">
        Who we are?
      </h1>
      <p className="text-base sm:text-lg max-w-[600px]">
        Our team is full of experts in various crypto directions. We have
        Traders, Angel Investors, Retrodrop Hunters, NFT and Memecoins Degens.
        Every member of our team has at least 3 years of successful experience.
      </p>
    </motion.div>
  );
};

export default Who;
