import React from "react";

const Hero = () => {
  return (
    <div id="about" className="w-full z-20 relative h-screen px-20 py-32">
      <div className="w-1/2 h-full gap-3 flex flex-col justify-end">
        <h1 className="bg-clip-text w-fit text-6xl font-black text-transparent bg-gradient-to-r from-white to-slate-500">
          VEGA
        </h1>
        <p className="text-lg">
          Vega is token and part of unique ecosystem, comprising an Investment
          Fund and a Marketing Consulting Agency. Also it is a part of amazing
          business model with real utility and revenue-generating potential.
        </p>
      </div>
    </div>
  );
};

export default Hero;
