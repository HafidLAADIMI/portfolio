"use client";
import { motion } from "framer-motion";
import DevComputer from "../components/DevComputer";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen mt-5 sm:px-16 px-6   ">
      <div className="flex flex-col gap-3 relative ">
        <div className="absolute     max-w-7xl mx-auto  flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="w-5 h-5 rounded-full bg-[#8a00c4]"
            />
            <motion.div
              initial={{
                height: "0vh",
              }}
              whileInView={{
                height: "110vh",
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-1 h-screen violet-gradient"
            />
          </div>
        </div>
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
            duration: 0.15,
            delay: 0.15,
            ease: "easeInOut",
          }}
          className="flex flex-col  mx-6  "
        >
          <h1 className=" text-white text-5xl font-bold font-pmedium">
            Hi, I am <span className="text-[#8a00c4] ">Hafid</span>
          </h1>
          <p className="mt-2 text-slate-300 font-semibold font-poppins text-xl text-wrap ">
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and Full Stack web and mobile applications
          </p>
        </motion.div>
        <DevComputer />
      </div>
    </section>
  );
};

export default HeroSection;
