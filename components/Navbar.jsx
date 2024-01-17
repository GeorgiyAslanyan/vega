"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed hidden md:flex z-50 items-center justify-between gap-5 text-white top-0 w-full bg-[#161825] bg-opacity-30 backdrop-blur-xl px-2 md:px-4 lg:px-10 py-5">
      <a
          className="px-10 text-lg lg:text-xl py-1 ease-linear duration-100 transition-all"
          href="https://www.dextools.io/app/en/ether/pairs"
          target="_blank"
          rel="noopener noreferrer">
          Vega
        </a>
        <div className="flex gap-10 text-base uppercase lg:text-base">
          <a
            className="ease-linear duration-100 transition-all hover:-translate-y-1"
            href="#about">
            About
          </a>
          <a
            className="ease-linear duration-100 transition-all hover:-translate-y-1"
            href="#unique">
            Unique
          </a>
          <a
            className="ease-linear duration-100 transition-all hover:-translate-y-1"
            href="#who">
            Who we are?
          </a>
          <a
            className="ease-linear duration-100 transition-all hover:-translate-y-1"
            href="#tokenomics">
            Tokenomics
          </a>
          <a
            className="ease-linear duration-100 transition-all hover:-translate-y-1"
            href="#roadmap">
            Roadmap
          </a>
        </div>
        
      </div>
      <div className={`fixed flex flex-col md:hidden z-50 items-center ${open ? "gap-5" : "gap-0"} text-[#D9D9D9] top-0 w-full bg-[#161825] px-2 md:px-10 py-5`}>
        <div className="w-full flex gap-5 justify-between">
          <a
            className="px-10 text-lg lg:text-xl py-1 border-2 border-[#D9D9D9] bg-[#161825] hover:bg-[#D9D9D9] hover:text-[#161825] ease-linear duration-100 transition-all"
            href="https://www.dextools.io/app/en/ether/pairs"
            target="_blank"
            rel="noopener noreferrer">
            Vega
          </a>
          <button className="p-2" onClick={() => setOpen((prev) => !prev)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 duration-100 ease-linear transition-all ${
                open ? "rotate-90" : "rotate-0"
              }`}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className={`${open ? "h-auto" : "h-0"} w-full overflow-hidden flex flex-col gap-5 text-lg`}>
          <a
            onClick={() => setOpen(false)}
            className="ease-linear duration-100 transition-all hover:-translate-y-1"
            href="#about">
            About
          </a>
          <a
            onClick={() => setOpen(false)}
            className="ease-linear duration-100 transition-all hover:-translate-y-1"
            href="#unique">
            Unique
          </a>
          <a
            onClick={() => setOpen(false)}
            className="ease-linear duration-100 transition-all hover:-translate-y-1"
            href="#who">
            Who we are?
          </a>
          <a
            onClick={() => setOpen(false)}
            className="ease-linear duration-100 transition-all hover:-translate-y-1"
            href="#tokenomics">
            Tokenomics
          </a>
          <a
            onClick={() => setOpen(false)}
            className="ease-linear duration-100 transition-all hover:-translate-y-1"
            href="#roadmap">
            Roadmap
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;