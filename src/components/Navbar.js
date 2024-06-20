"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Socials } from "@/utils/Homecontent";
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [toggle, setToggle] = useState(false)
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <div className=" w-full h-[65px] fixed top-0 shadow-xl shadow-[#4c2dba67]/50  bg-transparent backdrop-blur-md z-50 lg:px-10 ">
      <div className=" w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">

        {/* LOGO AND NAME */}
        <Link href="/" className="h-auto w-auto flex flex-row items-center" aria-label="Home">
          <Image
            src="/images/ravi.png"
            alt="logo"
            width={30}
            height={30}
            quality={100}
            className="cursor-pointer hover:animate-slowspin rounded-full border border-gray-900 h-auto w-auto"
          />

          <span className="font-bold ml-[10px]   text-gray-300">
            Ravi shankar singh
          </span>
        </Link>

        {/* HUBERGER BTN */}
        <button onClick={toggleMenu} type="button" className="lg:hidden inline-flex  items-center p-2 w-10 h-10 justify-center  text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          {/* <span class="sr-only">Open main menu</span> */}
          <VscThreeBars className="text-4xl" />
        </button>

        {/* MENUS */}
        <div id="navbar-default" className={` absolute top-16 lg:static  w-full lg:w-[500px] h-fit lg:h-full  ${toggle ? 'flex' : 'hidden'} lg:flex lg:flex-row items-center lg:justify-between  justify-center`}>
          <div className="flex gap-2 lg:gap-0 flex-col lg:flex-row items-center lg:justify-between w-1/2 bg-slate-900 lg:w-full h-auto border border-[#3943ff97] lg:border-[#7042f861] lg:bg-[#0300145e]  px-[20px] py-[10px] lg:rounded-full text-gray-200">
            <Link
              href="/"
              className={`cursor-pointer px-2 rounded-full  ${pathname === "/"
                ? "font-semibold border-[#4e71fc] text-[#4e71fc] border-2"
                : ""
                }`}
              aria-label="Home"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="skills"
              className={`cursor-pointer  px-2 rounded-full  ${pathname === "/skills"
                ? "font-semibold border-[#4e71fc] text-[#4e71fc] border-2"
                : ""
                }`}
              aria-label="Skill"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              href="projects"
              className={`cursor-pointer  px-2 rounded-full  ${pathname === "/projects"
                ? "font-semibold border-[#4e71fc] text-[#4e71fc] border-2"
                : ""
                }`}
              aria-label="Projects"
              onClick={toggleMenu}
            >
              Projects
            </Link>

            <Link
              href="/#contactus"
              className={` cursor-pointer px-2 rounded-full${pathname === "/contactus"
                ? "font-semibold border-[#4e71fc] text-[#4e71fc] border-2"
                : ""
                }`}
              aria-label="contactus"
              onClick={toggleMenu}
            >
              Contactus
            </Link>


            <Link
              href="aboutus"
              className={`cursor-pointer px-2 rounded-full   ${pathname === "/aboutus"
                ? "font-semibold border-[#4e71fc] text-[#4e71fc] border-2"
                : ""
                }`}
              aria-label="aboutus"
              onClick={toggleMenu}
            >
              Aboutus
            </Link>
          </div>
        </div>

        {/* SOCIAL BUTTONS */}
        <div className="hidden justify-between h-7  lg:flex flex-row gap-5 w-fit">
          {Socials.map((social, index) => (
            <div className=" min-h-6 min-w-6 max-h-6 max-w-6" key={social.name}>

              <Link href={social.link} target="_blank" legacyBehavior aria-label="sociallink" >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  quality={100}
                  style={{ objectFit: "contain", width: "100%", height: "100%", cursor: 'pointer' }}
                />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
