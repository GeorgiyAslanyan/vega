import Image from "next/image";
import React from "react";

const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="w-full z-[20] relative gap-6 px-20 py-32 flex flex-col justify-center items-center text-center">
      <h1 className="bg-clip-text w-fit text-5xl font-black text-transparent bg-gradient-to-r from-white to-slate-500">
        Roadmap
      </h1>
      <object
        className="w-full h-full z-[7] relative pointer-events-none"
        type="image/svg+xml"
        data="/roadmap.svg"></object>
    </div>
  );
};

export default Roadmap;
