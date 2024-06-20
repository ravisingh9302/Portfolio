"use client"
import { TypeAnimation } from "react-type-animation";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/Motion";
import { HiOutlineSparkles } from "react-icons/hi2";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"

      className=" overflow-hidden flex   z-[2] flex-col-reverse lg:flex-row items-center  justify-center px-4 lg:px-10 h-full w-full "
    >
      <div className=" lg:my-6 h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] mx-auto inline-block lg:flex lg:mx-0   mt-2 border border-[#7042f88b] opacity-[0.9]"
        >

          <HiOutlineSparkles className="text-[#6b5eff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>


        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[650px] w-auto h-auto"
        >

          <div className=" flex flex-col gap-9 justify-center">
            <div className=" w-auto   justify-center lg:justify-start text-4xl lg:text-6xl inline text-transparent bg-clip-text">
              <div className=" inline bg-myGradientBg  text-transparent bg-clip-text">
                Hello, I&apos;m{" "}
              </div>
            </div>
            {/* <br></br> */}

            <TypeAnimation
              sequence={[
                "Ravi shankar singh",
                1000,
                "Full Stack Developer",
                1000,
                "Backened Developer",
                1000,
                "Frontend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="flex  justify-center text-white lg:justify-start text-4xl lg:text-6xl"
            />
          </div>


        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] text-center px-2 lg:text-start lg:px-0"
        >
          I&apos;m a Full Stack Developer Engineer with experience in Website.
          Check out my projects and skills.
        </motion.p>

        <div className="flex flex-row  gap-10 w-full flex-grow justify-center lg:justify-start ">
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-4 px-6 button-primary text-center text-white cursor-pointer  text-lg rounded-lg max-w-[200px]"
          >
            Hire Me
          </motion.a>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-4 px-6 button-primary text-center text-white cursor-pointer  text-lg rounded-lg max-w-[200px]"
          >
            Download CV
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className=" my-1  w-2/3 lg:w-full h-full lg:min-h-[450px] lg:max-h-[450px] flex justify-center items-center relative"
      >
        {/* <Image
          className="absolute opacity-70"
          src="/images/mainIconsdark.svg"
          alt="work icons"
          height={550}
          width={550}
        /> */}

        {/* z-30 */}
        <Image
          className="border-2 border-[#4c2dba3f] rounded-full  h-auto w-auto"
          src="/images/ravi.png"
          alt="work icons"
          height={300}
          width={300}
          quality={100}
          priority
          aria-label="profilephoto"
        />
      </motion.div>

    </motion.div>
  );
};

export default HeroContent;
