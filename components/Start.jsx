"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Start = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.3, delay: 4 }}
        className=" fixed flex items-center pointer-events-none justify-center bg-[#010213] top-0 left-0 w-screen h-screen z-[200] px-[10px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 0.8 }}
          transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}>
          <Image
            width={336}
            height={138}
            alt="preloader"
            src={"/Vega.svg"}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Start;
