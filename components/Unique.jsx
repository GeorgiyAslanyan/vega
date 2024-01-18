import Image from "next/image";
import React from "react";
import {motion} from 'framer-motion'

const Unique = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
      id="unique"
      className="w-full z-[20] gap-6 relative px-4 lg:px-20 py-20 md:py-32 flex flex-col justify-center items-center text-center">
      <h1 className="bg-clip-text w-fit text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-white to-slate-500">
        What makes us unique?
      </h1>
      <p className="text-base sm:text-lg max-w-[600px]">
        Token Buy-Back and Burn Strategy: Using 60% of Presale Funds to create
        Investment Fund and Marketing Consulting Agency, 50% of their profits
        will be used to buy and burn Vega, reducing supply and increasing the
        token&apos;s value. Another 50% of profits will be reinvested.
      </p>
      
    </motion.div>
  );
};

export default Unique;
