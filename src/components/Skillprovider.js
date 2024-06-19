"use client"
import React from "react";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import Image from "next/image";

const SkillDataProvider = ({ src, width, height, index }) => {
    
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//   });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <motion.div
      className=" h-24 w-24 max-h-24  flex justify-center items-center"
      // ref={ref}
      // initial="hidden"
      variants={imageVariants}
      // animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image src={src} quality={100} width={100} height={100} alt="skill image" style={{objectFit:"contain",width:"100%",height:"100%"}}/>
    </motion.div>
  );
};

export default SkillDataProvider;
