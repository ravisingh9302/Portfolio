"use client"
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/Motion";
import { HiOutlineSparkles } from "react-icons/hi2";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center gap-5">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <HiOutlineSparkles className="text-[#b49bff] mr-[10px] h-5 w-5"/>
        <h1 className="Welcome-text text-[13px]">
          Think better with Next js 14
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-2xl lg:text-4xl text-white font-medium mt-6 text-center mb-[15px]"
      >

        <TypeAnimation
              sequence={[
                "Making web app with modern technologies",
                1000,
                "Making App More Secure with technologies",
                1000,
                "Give a Real Touch to you App",
                1000,
                "Making app More feactured",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className=" "
            />
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
