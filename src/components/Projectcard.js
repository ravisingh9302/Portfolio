import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiCodeBold } from "react-icons/pi";
import { MdRemoveRedEye } from "react-icons/md";


const Projectcard = ({ src, title, description,sourcecode,preview}) => {
  return (
    <div className="border border-[#5C4FE8] min-h-96 max-w-md rounded-lg shadow-lg overflow-hidden " key={title}>
      
      <div className=" relative group " key={src}>
        <Image
          src={src}
          alt={title}
          width={1000}
          height={700}
          quality={100} 
          className="w-full object-contain "
          aria-label={title}
        />
        <div className="overlay   items-center justify-center absolute top-0 left-0 w-full h-full  hidden bg-[#181818] bg-opacity-0  group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={sourcecode}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ffffff] hover:border-green-400 group/link"
            aria-label="sourcecode"
            
          >
            <PiCodeBold className="h-10 w-10 text-[#ffffff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-green-400"/>
          </Link>
          <Link
            href={preview}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-green-400 group/link"
            aria-label="viewsite"
          >
            <MdRemoveRedEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-green-400"  />
          </Link>
        </div>
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-400  text-justify min-h-40 max-h-40 min text-pretty" >{description}</p>
      </div>
    </div>
  );
};

export default Projectcard;
