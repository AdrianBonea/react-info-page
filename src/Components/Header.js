import React from "react";
import logo from "../Images/react-logo.png"; // I am using this img

export default function Header() {
  // header function
  return (
    <nav
      className="flex flex-row shadow-md bg-[#21222A] 
                    font-inter h-[90px]"
    >
      <img
        className="flex w-[40px] h-[40px] my-6 ml-10 mr-3"
        src={logo}
        alt="React Logo"
      />
      <h1
        className="flex items-center font-bold 
                    text-3xl text-[#61DAFB] hover:underline 
                    decoration-sky-500/30"
      >
        ReactFacts
      </h1>
      {/*React logo*/}
      <h1
        className="flex basis-11/12 text-slate-50 
                   items-center justify-end m-2 text-xl"
      >
        React - Project 1
      </h1>
    </nav>
  );
}
