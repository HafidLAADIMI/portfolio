"use client";
import { motion } from "framer-motion";
import { IoIosCopy } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaGitAlt, FaReact, FaJava } from "react-icons/fa";
import { VscDebugAlt, VscExtensions } from "react-icons/vsc";
import { SiSpring } from "react-icons/si";
import { GoCopilot } from "react-icons/go";

const CodeEditor = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: 0.2 }}
      className="flex flex-col bg-[#2E0041] backdrop-blur-sm shadow-2xl shadow-[#251932] border-[0.5px] border-[#30363d] rounded-xl z-20 mx-2 relative sm:h-[80vh] sm:w-[90vw] md:w-[70vw]"
    >
      {/* Header section */}
      <div className="flex flex-row gap-2 border-b-[0.5px] border-[#30363d] w-full p-4">
        <div className="h-2 w-2 rounded-full bg-[#ff5f56]" />
        <div className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
        <div className="h-2 w-2 rounded-full bg-[#27c93f]" />
      </div>

      {/* Sidebar icons */}
      <div className="flex flex-row flex-grow overflow-hidden">
        <div className="flex flex-col gap-4 p-4 border-r-[0.5px] border-[#30363d]">
          <IoIosCopy className="text-[#e8de1b] text-2xl" />
          <IoSearch className="text-[#6b7076] text-2xl" />
          <FaGitAlt className="text-[#f05032] text-2xl" />
          <VscDebugAlt className="text-[#6b7076] text-2xl" />
          <VscExtensions className="text-[#6b7076] text-2xl" />
          <SiSpring className="text-[#6b7076] text-2xl" />
          <GoCopilot className="text-[#6b7076] text-2xl" />
        </div>

        {/* Code editor container */}
        <div className="flex flex-col flex-grow">
          {/* File Tabs */}
          <div className="flex flex-row gap-3 w-full p-2 items-center border-b-[0.5px] border-[#30363d]">
            <div className="flex flex-row gap-1 items-center justify-center px-1">
              <FaReact className="text-[#0e499c] text-xs" />
              <p className="text-[#6b7076] text-xs font-semibold">About.tsx</p>
            </div>
            <div className="flex flex-row gap-1 items-center justify-center px-1">
              <FaJava className="text-[#d81414] text-xs" />
              <p className="text-[#766b6b] text-xs font-semibold">Models.java</p>
            </div>
          </div>

          {/* Code block */}
          <div className="p-4 text-xs text-[#9da5b4] font-mono leading-6 overflow-auto h-full">
            <p>
              <span className="text-[#569cd6]">import</span>{" "}
              <span className="text-[#dcdcaa]">{`{ useState }`}</span>{" "}
              <span className="text-[#569cd6]">from</span>{" "}
              <span className="text-[#ce9178]">&apos;react&apos;</span>;
            </p>
            <p>
              <span className="text-[#569cd6]">function</span>{" "}
              <span className="text-[#dcdcaa]">App</span>()
            </p>
            <p>{`{`}</p>
            <p className="ml-4">
              <span className="text-[#569cd6]">const</span>{" "}
              <span className="text-[#9cdcfe]">[count, setCount]</span> ={" "}
              <span className="text-[#569cd6]">useState</span>(
              <span className="text-[#b5cea8]">0</span>);
            </p>
            <p className="ml-4">
              <span className="text-[#569cd6]">return</span>{" "}
              <span className="text-[#dcdcaa]">(</span>
            </p>
            <p className="ml-8">
              <span className="text-[#569cd6]">&lt;div&gt;</span>
            </p>
            <p className="ml-12 text-[#d7ba7d]">
              Clicked <span className="text-[#b5cea8]">{`{count}`}</span> times
            </p>
            <p className="ml-12">
              <span className="text-[#569cd6]">&lt;button</span>{" "}
              <span className="text-[#9cdcfe]">onClick</span>
              ={`{() => setCount(count + 1)}`}&gt;
            </p>
            <p className="ml-16 text-[#d7ba7d]">Click me!</p>
            <p className="ml-12">
              <span className="text-[#569cd6]">&lt;/button&gt;</span>
            </p>
            <p className="ml-8">
              <span className="text-[#569cd6]">&lt;/div&gt;</span>
            </p>
            <p className="ml-4">
              <span className="text-[#dcdcaa]">)</span>;
            </p>
            <p>{`}`}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CodeEditor;
