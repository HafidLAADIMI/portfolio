"use client";
import { motion } from "framer-motion";
import { IoIosCopy } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { VscDebugAlt } from "react-icons/vsc";
import { VscExtensions } from "react-icons/vsc";
import { SiSpring } from "react-icons/si";
import { GoCopilot } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

const CodeEditor = () => {
  return (
    <motion.div
      initial={{ opacity: 0 ,x:10 }}
      whileInView={{ opacity: 1,x:0 }}
      transition={{ duration: 0.2, delay: 0.2 }}
     className="flex bg-[#2E0041] backdrop-blur-sm shadow-2xl shadow-[#251932] border-[0.5px] border-[#30363d]  rounded-xl z-20  mx-2 relative sm:h-[80vh] ">
      <div className="flex flex-row gap-2  border-b-[0.5px]  border-[#30363d] w-full p-4 absolute top-0 right-0 left-0">
        <div className="h-2 w-2 rounded-full bg-[#6b7076]" />
        <div className="h-2 w-2 rounded-full bg-[#6b7076]" />
        <div className="h-2 w-2 rounded-full bg-[#6b7076]" />
      </div>
      <div className="flex flex-col gap-4  p-4  left-0 mt-10 border-r-[0.5px] border-[#30363d]  ">
        <IoIosCopy className="text-[#e8de1b] underline text-2xl" />
        <IoSearch className="text-[#6b7076] text-2xl" />
        <FaGitAlt className="text-[#6b7076] text-2xl" />
        <VscDebugAlt className="text-[#6b7076] text-2xl" />
        <VscExtensions className="text-[#6b7076] text-2xl" />
        <SiSpring className="text-[#6b7076] text-2xl" />
        <GoCopilot className="text-[#6b7076] text-2xl" />
      </div>
      <div className="flex flex-row gap-3 w-full mt-11  h-6 px-2 items-center">
        <div
          className="flex flex-row gap-1  justify-center 
          px-1"
        >
          <FaReact className="text-[#0e499c] text-xs" />
          <p className="text-[#6b7076] text-xs font-semibold ">About.tsx</p>
        </div>
        <div className="flex flex-row gap-1 items-center justify-center   px-1">
          <FaJava className="text-[#d81414] text-xs" />
          <p className="text-[#766b6b] text-xs font-semibold ">Models.java</p>
        </div>
      </div>
      
    </motion.div>
  );
};

export default CodeEditor;
