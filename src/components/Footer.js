import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import Image from "next/image";
import { Socials } from "@/utils/Homecontent";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent  mb-7 lg:mb-0 z-[50] text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <Link href="https://www.youtube.com/channel/UCMOZ6l7WoFf390Lwu43dadg" aria-label="Youtube" className="pl-1 hover:text-blue-500 cursor-pointer">
                Youtube
              </Link>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <Link href="https://github.com/ravisingh9302" className="pl-1 hover:text-blue-500 cursor-pointer">
                Github
              </Link>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <Link href="https://github.com/ravisingh9302" className="pl-1 hover:text-blue-500 cursor-pointer">
                Discord
              </Link>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <Link href="https://www.linkedin.com/in/ravisingh9302/" className="pl-1 hover:text-blue-500 cursor-pointer">
                Linkdin
              </Link>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <Link href="https://github.com/ravisingh9302" className="pl-1 hover:text-blue-500 cursor-pointer">
                Twitter
              </Link>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <Link href="https://github.com/ravisingh9302" className="pl-1 hover:text-blue-500 cursor-pointer">
                Instagram
              </Link>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] hover:text-blue-500 cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <Link href="mailto:ravishankar8516@gmail.com" className=" hover:text-blue-500 cursor-pointer">
                ravishankar8516@gmail.com
              </Link>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Ravi shankar singh 2024 Inc. All rights reserved
        </div>
      </div>
      
      {/* SOCIAL LOGOS */}
      <div className="fixed bg-black  align-middle items-center lg:hidden bottom-0 left-0 right-0 justify-around h-10   flex flex-row gap-5  w-full ">
        {Socials.map((social, index) => (
          <div className=" min-h-8 min-w-8 max-h-8 max-w-8" key={`footer${social.name}`}>
            <Link href={social.link} target="_blank" legacyBehavior  aria-label="sociallinkfooter" >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                quality={100}
                style={{ objectFit: "contain", width: "100%", height: "100%",cursor:"pointer" }}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
