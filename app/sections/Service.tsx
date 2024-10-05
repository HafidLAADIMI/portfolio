"use client";
import { motion } from "framer-motion";
import CodeEditor from "../components/CodeEditor";
import web from "../../public/assets/web.json";
import phone from "../../public/assets/phone.json";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
const Lottie = dynamic(() => import("Lottie-react"), { ssr: false });
const Service = () => {
  const small=useMediaQuery({maxWidth:600})
  const mobile=useMediaQuery({maxWidth:768,minWidth:601})
  const tablet=useMediaQuery({minWidth:769,maxWidth:1024})
  return (
    <section className="min-h-screen mt-14 md:mt-4 px-6 sm:px-16" id="services">
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
              height: `${small?"120vh":mobile?"120vh":tablet?"200vh":"200vh"}`,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-1 h-screen violet-gradient"
          />
        </div>
      </div>
      <div className="flex flex-col mt-2 mx-auto gap-3">
        <p className="text-4xl text-start text-[#1AF2FF] font-poppins font-medium ml-10 my-1.5 shadow-inner shadow-[#a9f8fc] w-fit">
          Services
        </p>
        <div className="flex flex-row justify-center items-center relative w-[80%] sm:w-[40vw] ml-3 gap-1">
          <motion.div
            initial={{
              width: "0%",
            }}
            whileInView={{
              width: "100%",
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className=" h-1 violet-gradient "
          />
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="font-anton font-medium text-nowrap text-[#1AF2FF] w-full"
          >
            Full Stack Web Development
          </motion.p>
        </div>
        <div className="relative w-full mt-3">
          <CodeEditor />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="absolute inset-0 z-30  m-10 flex justify-center lg:justify-end items-center"
          >
            <div className=" inset-0 h-[250px] w-[250px] sm:h-[320px] sm:w-[320px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]   ">
              <Lottie animationData={web} />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-row justify-center items-center relative w-[80%] sm:w-[40vw] ml-3 gap-1 mt-5">
          <motion.div
            initial={{
              width: "0%",
            }}
            whileInView={{
              width: "100%",
            }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className=" h-1 violet-gradient "
          />
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="font-anton font-medium text-nowrap text-[#1AF2FF] w-full"
          >
            Full Stack Mobile Development
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className=" flex  justify-center  "
        >
          <div className="h-[40vh] w-[80vw] sm:h-[40vh] sm:w-[55vw] lg:h-[40vh] lg:w-[40vw] ">
            <Lottie animationData={phone} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
