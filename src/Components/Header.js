import React from "react";
import logo from "../Images/react-logo.png"; // I am using this img

export default function Header(props) {
  // header function
  return (
    <nav
      className={`flex flex-row font-inter h-[90px] shadow-xs shadow-black
        ${props.toggle ? "bg-[#21222A]" : "bg-gray-100"}`}
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
      <div
        className="flex basis-11/12 text-slate-50 
                   items-center justify-end m-2 text-m"
      >
        <label
          htmlFor="toggle-example"
          className="flex relative items-center  cursor-pointer"
        >
          <input
            type="checkbox"
            id="toggle-example"
            className="sr-only"
            onClick={props.setToggle}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
          <span
            className={`ml-2 text-sm font-bold 
            ${props.toggle ? "text-white" : "text-[#61DAFB]"}`}
          >
            {props.toggle ? "Dark" : "Light"}
          </span>
        </label>
      </div>
    </nav>
  );
}
