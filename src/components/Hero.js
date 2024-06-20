import React from "react";
import HeroContent from "./Herocontent";

const Hero = () => {
    return (
        <div className=" relative flex flex-col justify-center mt-20 min-h-[700px]  lg:min-h-[580px] h-full w-full max-w-full " id="about-me">
            <video
                autoPlay
                muted
                loop
                className=" rotate-180 absolute opacity-40  h-full w-full left-0   "
            >
                <source src="https://res.cloudinary.com/dgo0fkgwh/video/upload/v1718641052/earthnew2c_gojvi5.mp4" type="video/mp4" />
            </video>
            <HeroContent />
        </div>
    );
};

export default Hero;


