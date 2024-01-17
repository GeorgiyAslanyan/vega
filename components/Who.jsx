import React from "react";

const Who = () => {
  return (
    <div
      id="who"
      className="w-full gap-6 px-20 py-32 flex flex-col justify-center items-center text-center">
      <h1 className="bg-clip-text w-fit text-5xl font-black text-transparent bg-gradient-to-r from-white to-slate-500">
        Who we are?
      </h1>
      <p className="text-lg max-w-[600px]">
        Our team is full of experts in various crypto directions. We have
        Traders, Angel Investors, Retrodrop Hunters, NFT and Memecoins Degens.
        Every member of our team has at least 3 years of successful experience.
      </p>
    </div>
  );
};

export default Who;
