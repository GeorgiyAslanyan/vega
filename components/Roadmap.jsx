import Image from "next/image";
import React from "react";
import {motion} from 'framer-motion'

const Roadmap = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
      id="roadmap"
      className="w-full z-[20] relative gap-6 px-0 lg:px-20 pb-0 md:pb-10 pt-20 md:pt-32 flex flex-col justify-center items-center text-center">
      <h1 className="bg-clip-text w-fit text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-white to-slate-500">
        Roadmap
      </h1>
      <object
        className="w-full h-full z-[7] relative pointer-events-none"
        type="image/svg+xml"
        data="/roadmap.svg"></object>
    </motion.div>
  );
};

export default Roadmap;
