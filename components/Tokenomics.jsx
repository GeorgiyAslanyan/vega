import React from "react";
import { motion } from "framer-motion";

const arr = [
  { number: 5, title: "Team" },
  { number: 5, title: "Community Rewards" },
  { number: 10, title: "Marketing" },
  { number: 15, title: "Listing on CEX" },
  { number: 15, title: "Liquidity Pool" },
  { number: 50, title: "Presale" },
];

const Tokenomics = () => {
  return (
    <div
      id="tokenomics"
      className="w-full z-20 relative gap-6 px-4 lg:px-20 py-3 flex flex-col justify-center items-center text-center">
      <h1 className="bg-clip-text w-fit text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-white to-slate-500">
        Tokenomics
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-10">
        {arr.map((el, index) => (
          <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 * index }}
          viewport={{ once: true }}
            className="rounded-xl bg-gradient-to-br from-slate-500 overflow-hidden via-slate-800 to-slate-500 p-[2px]"
            key={el.title}>
            <div className="rounded-xl flex flex-col px-4 pt-6 pb-2 gap-4 justify-start md:justify-center items-center text-[20px] h-full w-full bg-slate-800">
              <p className="bg-clip-text w-fit text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-white to-slate-500">
                {el.number}%
              </p>
              <p className="">{el.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tokenomics;
