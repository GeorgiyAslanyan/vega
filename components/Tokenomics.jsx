import React from "react";

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
      className="w-full z-20 relative gap-6 px-20 py-3 flex flex-col justify-center items-center text-center">
      <h1 className="bg-clip-text w-fit text-5xl font-black text-transparent bg-gradient-to-r from-white to-slate-500">
        Tokenomics
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {arr.map((el) => (
          <div
            className="rounded-xl bg-gradient-to-br from-slate-500 overflow-hidden via-slate-800 to-slate-500 p-[2px]"
            key={el.title}>
            <div className="rounded-xl flex flex-col px-4 pt-6 pb-2 gap-4 justify-center items-center text-[20px] h-full w-full bg-slate-800">
              <p className="bg-clip-text w-fit text-5xl font-black text-transparent bg-gradient-to-r from-white to-slate-500">
                {el.number}%
              </p>
              <p className="">{el.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tokenomics;
