"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
/*************  ✨ Codeium Command ⭐  *************/

const Bio = () => {
  return (
    <div
      className="w-full rounded-lg m-2  
       grid grid-cols-1 h-full px-4 py-4 gap-5  md:grid-cols-2  lg:grid-cols-3  grid-auto-rows-[1fr]
    "
    >
      <Tilt
        options={{
          speed: 200,
          scale: 1,
        }}
      >
        <motion.div
          initial={{
            x: 20,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center h-full  gap-3 col-span-1  text-slate-100   p-2 rounded-lg my-6 z-20 text-wrap  bg-[#520075]   "
        >
          <Image
            src="/assets/TDI.jpg"
            height={500}
            width={500}
            alt="techs"
            className=" object-contain rounded-lg shadow-md shadow-black cursor-pointer h-[200px] w-[200px]"
          />
          <div className="flex flex-col items-start text-xl text-slate-300">
            <span className="text-white font-bold font-anton">
            Engineering student in Industrial Digital Transformation :
            </span>
            I am passionate about innovation and optimizing processes. Rigorous,
            self-driven, and curious, I’m always eager to embrace new
            technological challenges and continuously improve.
          </div>
        </motion.div>
      </Tilt>

      <Tilt
        options={{
          speed: 200,
          scale: 1,
        }}
      >
        <motion.div
          initial={{
            x: 20,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center h-full  gap-3 col-span-1  text-slate-100   p-2 rounded-lg my-6 z-20 text-wrap  bg-[#520075]   "
        >
          <Image
            src="/assets/computer.jpg"
            height={500}
            width={500}
            alt="techs"
            className=" object-contain rounded-lg shadow-md shadow-black cursor-pointer h-[200px] w-[200px]"
          />
          <div className="flex flex-col items-start text-xl text-slate-300">
            <p className="text-white font-bold font-anton">Tech stack: </p>
            <p className=" ">
              I specialize in{" "}
              <span className="text-yellow-400">JavaScript</span> and{" "}
              <span className="text-red-600">Java</span> with a focus on{" "}
              <span className="text-sky-600">React</span> and{" "}
              <span className="text-green-500">Spring</span> ecosystems. I build
              dynamic web applications with a responsive user interface and
              enjoy optimizing the performance of both front-end and back-end
              systems. Additionally, I am familiar with{" "}
              <span className="text-blue-500">TypeScript</span> and
              <span className="text-teal-500">Node.js</span>, ensuring seamless
              integration of modern web technologies.
            </p>
          </div>
        </motion.div>
      </Tilt>
      <Tilt
        options={{
          speed: 200,
          scale: 1,
        }}
      >
        <motion.div
          initial={{
            x: 20,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center h-full  gap-3 col-span-1  text-slate-100   p-2 rounded-lg my-6 z-20 text-wrap  bg-[#520075]   "
        >
          <Image
            src="/assets/billGates.png"
            height={500}
            width={500}
            alt="techs"
            className=" object-contain rounded-lg shadow-md shadow-black cursor-pointer h-[200px] w-[200px]"
          />
          <div className="flex flex-col items-start text-xl text-slate-300">
            <p className="font-anton font-bold text-white">
              {" "}
              My passion for coding :
            </p>
            <p>
              I love tackling complex problems and turning ideas into reality
              through code. For me, coding isn’t just a profession – it’s a deep
              passion that fuels my creativity and curiosity. I’m always excited
              to learn new things, push my limits, and build solutions that have
              a real impact.
            </p>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};

export default Bio;
