import React from "react";
import { BrainCircuit, Sun } from "lucide-react";
import Darkmode from "./Darkmode/Darkmode";

const Navbar = () => {
  return (
    <>
      <div className="nav-Container flex items-center justify-between h-[90px] bg-zinc-900 px-4 md:px-[150px]">
        <div className="logo flex items-center gap-[10px]">
          <BrainCircuit size={30} color="#7c3aed" />
          <span className="text-lg md:text-2xl font-bold text-white ml-2">
            Codeify
          </span>
        </div>
        <div className="icons flex items-center gap-[10px] md:gap-[20px]">
          <i className="cursor-pointer transition-all hover:text-[#9333ea]">
            <Darkmode />
          </i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
