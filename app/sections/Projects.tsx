"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import {useMediaQuery} from "react-responsive"
const Projects = () => {
  const small=useMediaQuery({maxWidth:600})
  const mobile=useMediaQuery({maxWidth:768,minWidth:601})
  const tablet=useMediaQuery({minWidth:769,maxWidth:1024})
  return (
    <section className=" mt-20 w-full sm:px-16 px-6 relative" id="#projects">
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
              height: `${small?"343vh":mobile?"343vh":tablet?"240vh":"150vh"}`,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-1 h-screen violet-gradient"
          />
        </div>
      </div>
      <div className="w-full h-full p-2">
        <p className="text-4xl text-start text-[#1AF2FF] font-poppins font-medium ml-10 my-1.5 shadow-inner shadow-[#a9f8fc] w-fit">
          Porjects
        </p>
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:px-12 px-4">
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
              delay: 0.2,
              ease: "easeInOut",
            }}
            className=" flex flex-col items-center h-full  gap-3 col-span-1  text-slate-100   p-2 rounded-lg my-6 z-50 text-wrap backdrop-blur-xl bg-[#520075] 
            "
          >
            <Image
              src={"/projects/Aora.png"}
              height={500}
              width={500}
              alt="techs"
              className="object-contain rounded-lg cursor-pointer h-[200px] w-[200px]"
            />
            <div className="flex flex-col justify-center items-start gap-4">
              <h3 className="text-3xl  text-white font-anton font-pmedium z-30">
                Aora Mobile App
              </h3>
              <p className=" text-slate-300 ">
                This is a project built with react native for the cross platform
                the major idea is to build a platform that can be used on both
                android and ios{" "}
              </p>
              <div className="flex flex-row gap-5 w-full items-center justify-center ">
                <Image
                  src={"/assets/react-native.png"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg shadow-md shadow-black cursor-pointer w-6 h-6"
                />
                <Image
                  src={"/assets/appwrite.jfif"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg shadow-md shadow-black cursor-pointer w-6 h-6"
                />
                <Image
                  src={"/assets/tailwindcss.png"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg shadow-md shadow-black cursor-pointer w-6 h-6"
                />
              </div>
              <div className="flex flex-row items-center justify-center gap-3">
                <Link
                  href="https://github.com/hafidhafid"
                  className="text-3xl text-start text-white font-anton font-medium"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://linkedin.com/hafidhafid"
                  className="text-3xl text-start text-[#0e84e5] font-anton font-medium"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </motion.div>

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
              delay: 0.3,
              ease: "easeInOut",
            }}
            className=" flex flex-col items-center h-full  gap-3 col-span-1  text-slate-100   p-2 rounded-lg my-6 z-50 text-wrap backdrop-blur-xl bg-[#520075] "
          >
            <Image
              src={"/projects/facebook.jfif"}
              height={500}
              width={500}
              alt="techs"
              className="object-contain rounded-lg cursor-pointer "
            />
            <div className="flex flex-col justify-center items-start gap-4">
              <h3 className="text-3xl  text-white font-anton font-pmedium">
                Facebook clone
              </h3>
              <p className=" text-slate-300">
                This is a project built with react native for the cross platform
                the major idea is to build a platform that can be used on both
                android and ios{" "}
              </p>
              <div className="flex flex-row gap-5 w-full items-center justify-center ">
                <Image
                  src={"/assets/react.png"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg shadow-md shadow-black cursor-pointer w-6 h-6"
                />
                <Image
                  src={"/assets/spring.webp"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg shadow-md shadow-black cursor-pointer w-6 h-6"
                />
                <Image
                  src={"/assets/springSecurity.png"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg shadow-md shadow-black cursor-pointer w-6 h-6"
                />
                <Image
                  src={"/assets/tailwindcss.png"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg shadow-md shadow-black cursor-pointer w-6 h-6"
                />
                <Image
                  src={"/assets/mysql.png"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg shadow-md shadow-black cursor-pointer w-6 h-6"
                />
              </div>
              <div className="flex flex-row items-center justify-center gap-3">
                <Link
                  href="https://github.com/hafidhafid"
                  className="text-3xl text-start text-white font-anton font-medium"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://linkedin.com/hafidhafid"
                  className="text-3xl text-start text-[#0e84e5] font-anton font-medium"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </motion.div>

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
              delay: 0.4,
              ease: "easeInOut",
            }}
            className=" flex flex-col items-center h-full  gap-3 col-span-1  text-slate-100   p-2 rounded-lg my-6 z-50 text-wrap backdrop-blur-xl bg-[#520075] "
          >
            <Image
              src={"/projects/e-commerce.jfif"}
              height={500}
              width={500}
              alt="techs"
              className="object-contain rounded-lg  cursor-pointer "
            />
            <div className="flex flex-col justify-center items-start gap-4">
              <h3 className="text-3xl  text-white font-anton font-pmedium">
                E-commerce website
              </h3>
              <p className=" text-slate-300">
                This is a project built with react native for the cross platform
                the major idea is to build a platform that can be used on both
                android and ios{" "}
              </p>
              <div className="flex flex-row gap-5 w-full items-center justify-center ">
                <Image
                  src={"/assets/nextjs.png"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg shadow-md shadow-black cursor-pointer w-6 h-6"
                />
                <Image
                  src={"/assets/authjs.png"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg shadow-md shadow-black cursor-pointer w-6 h-6"
                />
                <Image
                  src={"/assets/mongodb.png"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg shadow-md shadow-black cursor-pointer w-6 h-6"
                />
                <Image
                  src={"/assets/tailwindcss.png"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg shadow-md shadow-black cursor-pointer w-6 h-6"
                />
              </div>
              <div className="flex flex-row items-center justify-center gap-3">
                <Link
                  href="https://github.com/hafidhafid"
                  className="text-3xl text-start text-white font-anton font-medium"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://linkedin.com/hafidhafid"
                  className="text-3xl text-start text-[#0e84e5] font-anton font-medium"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </motion.div>

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
            className=" flex flex-col items-center h-full  gap-3 col-span-1  text-slate-100   p-2 rounded-lg my-6 z-50 text-wrap backdrop-blur-xl bg-[#520075] "
          >
            <Image
              src={"/projects/platform.jfif"}
              height={500}
              width={500}
              alt="techs"
              className="object-contain rounded-lg cursor-pointer"
            />
            <div className="flex flex-col justify-center items-start gap-4">
              <h3 className="text-3xl text-start text-white font-anton font-medium">
                Entertainment Platform
              </h3>
              <p className=" text-slate-300">
                This is a project built with react native for the cross platform
                the major idea is to build a platform that can be used on both
                android and ios{" "}
              </p>
              <div className="flex flex-row gap-5 w-full items-center justify-center ">
                <Image
                  src={"/assets/nextjs.png"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg shadow-md shadow-black cursor-pointer w-6 h-6"
                />
                <Image
                  src={"/assets/authjs.png"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg shadow-md shadow-black cursor-pointer w-6 h-6"
                />
                <Image
                  src={"/assets/mongodb.png"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg shadow-md shadow-black cursor-pointer w-6 h-6"
                />
                <Image
                  src={"/assets/tailwindcss.png"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg shadow-md shadow-black cursor-pointer w-6 h-6"
                />
              </div>
              <div className="flex flex-row items-center justify-center gap-3">
                <Link
                  href="https://github.com/hafidhafid"
                  className="text-3xl text-start text-white font-anton font-medium"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://linkedin.com/hafidhafid"
                  className="text-3xl text-start text-[#0e84e5] font-anton font-medium"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </motion.div>
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
              delay: 0.35,
              ease: "easeInOut",
            }}
            className=" flex flex-col items-center h-full  gap-3 col-span-1  text-slate-100   p-2 rounded-lg my-6 z-50 text-wrap backdrop-blur-xl bg-[#520075] "
          >
            <Image
              src={"/assets/3d.png"}
              height={500}
              width={500}
              alt="techs"
              className="object-contain rounded-lg cursor-pointer"
            />
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-3xl text-white font-anton font-medium">
                3D Portfolio
              </h3>
              <p className="text-slate-300">
                This is a project built with react native for the cross platform
                the major idea is to build a platform that can be used on both
                android and ios{" "}
              </p>
              <div className="flex flex-row gap-5 w-full items-center justify-center ">
                <Image
                  src={"/assets/nextjs.png"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg shadow-md shadow-black cursor-pointer w-6 h-6"
                />
                <Image
                  src={"/assets/three.png"}
                  height={50}
                  width={50}
                  alt="techs"
                  className="object-contain rounded-lg cursor-pointer w-6 h-6"
                />
              </div>
              <div className="flex flex-row items-center justify-center gap-3">
                <Link
                  href="https://github.com/hafidhafid"
                  className="text-3xl text-start text-white font-anton font-medium"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;