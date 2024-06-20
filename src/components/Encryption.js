"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/Motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="  flex flex-row relative items-center justify-center  lg:min-h-screen w-full h-[720px] lg:h-full">
      <div className=" absolute w-auto h-auto top-0">
        <motion.div
          variants={slideInFromTop}
          className=" flex flex-col lg:flex-row lg:gap-2 text-3xl lg:text-4xl font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>
      {/* z-[20] */}
      <div className=" flex flex-col items-center justify-center  absolute  w-48 h-auto my-0">
        <div className=" flex flex-col items-center group cursor-pointer w-3/4 h-auto">
          <Image
            src="/images/LockTop.png"
            alt="Lock top"
            width={70}
            height={70}
            className=" h-auto translate-y-5 transition-all duration-200 group-hover:translate-y-11 -z-[2]"
            style={{ width: "50%", height: "50%" }}
          />
          <Image
            src="/images/LockMain.png"
            alt="Lock Main"
            width={80}
            height={80}
            // className=" z-10"
            style={{ width: "60%", height: "60%" }}
          />
        </div>
        {/* z-[20]  */}
        <div className="Welcome-box px-[15px] py-[4px]    my-[20px] border-[#7042f88b] opacity-[1]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>

      {/* z-[20] */}
      <div className=" absolute  bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className=" w-full flex items-start justify-center -z-10 absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto opacity-40"
          src="/images/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
