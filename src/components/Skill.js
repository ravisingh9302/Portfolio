
import React from "react";
import { FrontendSkill,BackendSkill,FullSkill,OtherSkill } from "@/utils/Homecontent";
import SkillDataProvider from "./Skillprovider";
import SkillText from "./Skilltext";

const Skills = () => {
  return (
    <section
      id="skills"
      className=" flex flex-col items-center justify-center gap-6 h-full w-full relative overflow-hidden lg:pb-50 lg:py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className=" flex flex-row justify-evenly flex-wrap mt-4 gap-5 items-center">
        {FrontendSkill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-evenly flex-wrap mt-4 gap-5 items-center">
        {BackendSkill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {FullSkill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div> */}
      <div className="  flex flex-row justify-evenly flex-wrap mt-4 gap-5 items-center">
        {OtherSkill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      

      {/* <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-20 absolute flex items-center justify-center ">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/images/galaxynew.mp4"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Skills;
