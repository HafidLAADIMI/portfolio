"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Experience } from "../components/Book/Experience";
import CanvasLoader from "../components/CanvasLoader";
import { Center } from "@react-three/drei";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      className="mt-10 relative px-6 sm:px-16 h-screen w-full"
      id="#skills"
    >
      <div className="absolute  max-w-7xl mx-auto  flex flex-row items-start gap-5">
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
              height: "100vh",
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-1 h-screen violet-gradient"
          />
        </div>
      </div>
      <p className="text-4xl text-start text-[#1AF2FF] font-poppins font-medium ml-10 my-1.5 shadow-inner shadow-[#a9f8fc] w-fit">
        Skills
      </p>
      <div className="relative flex items-center justify-center mx-4 p-4 mt-8">
        {/* <div
          style={{
            // background: "#520075",
            // background: "#2E0041",
            filter: "blur(5px)",
          }}
            
          className="absolute inset-0 z-10  bg-[#520075]/50 backdrop-blur-sm"
        /> */}
        <div className="w-full  backdrop-blur-sm bg-[#8a00c4]/30  rounded-xl  z-30">
          <Canvas
            style={{
              height: "85vh",
            }}
            shadows
            camera={{ position: [-0.5, 1, 4], fov: 45 }}
          >
            <group position-y={0}>
              <Suspense fallback={<CanvasLoader />}>
                <Center>
                  <Experience />
                </Center>
              </Suspense>
            </group>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Skills;
