"use client";
import Image from "next/image";
import Scene from "@/components/3d/Scene";
import Hero from "@/components/Hero";
import Unique from "@/components/Unique";
import Who from "@/components/Who";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex bg-[#010213] min-h-screen overflow-x-hidden flex-col items-center justify-between">
      <div className="min-h-screen w-full relative">
        <div className="absolute w-full bottom-0 h-52 bg-gradient-to-t from-[#010213] to-transparent z-10 pointer-events-none"></div>
        <Scene />
        <Hero />
        <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full z-[11]">
          <div className=" ">
            <Image
              alt="ellipse"
              width="600"
              height="300"
              className="w-full rotate-[45deg]  -translate-x-[54%] -translate-y-[50%] opacity-70"
              src="/ellipse.svg"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <Unique />
        <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full z-[11]">
          <div className=" ">
            <Image
              alt="ellipse"
              width="600"
              height="300"
              className="w-full opacity-70"
              src="/ellipse.svg"
            />
          </div>
        </div>
        <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full z-[12]">
          <div className="w-full h-full">
            <Image
              alt="grid"
              width="600"
              height="300"
              className="w-full opacity-100"
              src="/whatGrid.svg"
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mix-blend-plus-lighter flex justify-center items-center w-full h-0 z-[11]">
        <motion.div
          initial={{ opacity: 0.9, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            repeat: Infinity,
            repeatDelay: 0.3,
            repeatType: "reverse",
            duration: 1.5,
          }}
          className="w-full h-full flex items-center">
          <Image
            alt="grid"
            width="1920"
            height="758"
            className="w-full opacity-100"
            src="/star.svg"
          />
        </motion.div>
      </motion.div>
      <Who />
      <div className="relative w-full ">
        <Tokenomics />
        <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full z-[11]">
          <div className=" ">
            <Image
              alt="ellipse"
              width="600"
              height="300"
              className="w-full -rotate-[16deg] translate-x-[38%] opacity-70"
              src="/ellipse.svg"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full ">
        <Roadmap />
        <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full z-[11]">
          <div className=" ">
            <Image
              alt="ellipse"
              width="600"
              height="300"
              className="w-full rotate-[45deg] -translate-x-1/4 opacity-70"
              src="/ellipse.svg"
            />
          </div>
        </div>
        <div className="absolute flex justify-start items-center top-0 left-0 w-full h-full z-[12]">
          <div className=" ">
            <Image
              alt="ellipse"
              width="600"
              height="300"
              className="w-full -translate-x-1/4 opacity-100"
              src="/roadmapGrid.svg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
