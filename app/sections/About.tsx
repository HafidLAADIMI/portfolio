"use client";
import { motion } from "framer-motion";
import Bio from "../components/Bio";
import { useMediaQuery } from "react-responsive";
const About = () => {
  const small=useMediaQuery({maxWidth:600})
  const mobile=useMediaQuery({maxWidth:768,minWidth:601})
  const tablet=useMediaQuery({minWidth:769,maxWidth:1024})
  return (
    <section id="about" className="min-h-screen mt-3 px-6 sm:px-16">
      <div className="flex flex-col w-full mx-auto relative">
        <div className="absolute     max-w-7xl mx-auto  flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <motion.div
              initial={{
                opacity:0,
              }}
              whileInView={{
                opacity:1,
              }}
              transition={{ duration: 0.3, delay: 0.2 }} className="w-5 h-5 rounded-full bg-[#8a00c4]" />
            <motion.div
              initial={{
                height: "0vh",
              }}
              whileInView={{
                height: `${small?"243vh":mobile?"243vh":tablet?"200vh":"110vh"}`,
              }}
              className="w-1 h-screen violet-gradient"
            />
          </div>
        </div>
        <p className="text-4xl text-start text-[#1AF2FF] font-poppins font-medium ml-10 my-1.5 shadow-inner shadow-[#a9f8fc] w-fit ">
          About me
        </p>
        <Bio />
      </div>
    </section>
  );
};

export default About;
