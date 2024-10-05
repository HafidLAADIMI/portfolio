"use client";

import Link from "next/link";
import { useState } from "react";
const NavbarItems = ({ onClick = () => {} }) => {
  return (
    <ul
      className={`flex flex-col items-start px-8 md:flex-row md:items-center justify-center gap-8 font-poppins relative my-2 transition duration-150 ease-out `}
    >
      
      <Link onClick={onClick} href="#about">
        <li>About</li>
      </Link>
      <Link onClick={onClick} href="#projects">
        <li>Projects</li>
      </Link>
      <Link onClick={onClick} href="#services">
        <li>Services</li>
      </Link>
      <Link onClick={onClick} href="#skills">
        <li>Skills</li>
      </Link>
      <Link onClick={onClick} href="#contact">
        <li>Contact</li>
      </Link>
    </ul>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <nav  className="sm:px-16 px-6">
      <div className="flex  flex-row items-center justify-between w-full mx-auto py-2  relative">
         <Link href="#home"  className=" text-3xl text-center text-gray-300 font-poppins font-semibold cursor-pointer  shadow-[#8a00c4] shadow-inner rounded-md">
          {" "}
          Hafid
        </Link>
        <div className="flex md:hidden z-10  ">
          <button
            className="gap-1 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <div
              className={`${
                open ? "rotate-45  mb-0" : "mb-1"
              } text-white transition ease-out duration-150 h-0.5 w-6 bg-white `}
            />
            <div
              className={` ${
                open ? "hidden" : "mb-1"
              } text-white transition ease-out duration-150 h-0.5 w-6 bg-white `}
            />
            <div
              className={`${
                open ? "-rotate-45 mb-0" : "rotate-0"
              } text-white transition ease-out duration-150 h-0.5 w-6 bg-white `}
            />
          </button>
        </div>
        <div className="hidden md:flex">
          <NavbarItems  />
        </div>
      </div>
      {/* sidebar */}
      <nav className={`absolute overflow-hidden backdrop-blur-sm transition-all ease-in-out duration-150 bg-[#8a00c4]/30 text-white font-semibold right-0 left-0 md:hidden ${open ? "max-h-screen" : "max-h-0"} z-40`}>
        <NavbarItems onClick={closeMenu} />
      </nav>
    </nav>
  );
};

export default Navbar;
