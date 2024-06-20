import React from 'react'
// import Head from "next/head";
import Image from "next/image"
import { FrontendLang,BackendLang,FullstackLang,Tools } from '@/utils/Skillcontent';
function page() {
    return (
        <>
            {/* <Head>
                <title>this is skill page</title>
            </Head> */}
            <div
                className=" flex flex-col items-center justify-center py-20"
                id="projects"
            >

                <div className=" lg:w-[1160px] md:w-[760px] mx-auto">
                    <p className="mx-auto my-4 p-2 block w-fit font-bold text-5xl text-transparent bg-clip-text bg-myGradientBg">
                        My Skills
                    </p>

                    <div className="text-slate-400 lg:text-xl text-lg text-center py-2 px-4 ">
                        I have extensive experience working with a variety of technologies as
                        a developer.
                        <br />
                        I&apos;ve developed and maintained multiple projects using these
                        technologies, <br />I and I&apos;m always eager to learn more.
                    </div>

                    {/***********FRONTEND SKILL */}
                    <div className=" mx-2 lg:mx-0 mt-16 grid grid-cols-3 gap-3 ">
                        <div className=" flex gap-2 items-center justify-center">
                            <p className=" font-bold text-3xl text-transparent bg-clip-text bg-myGradientBg">
                                Frontend skills
                            </p>
                        </div>

                        {FrontendLang.map((item, index) => (
                            <div
                                className=" flex flex-col lg:flex-row gap-2 items-center shadow-myshx shadow-[#713AE4]"
                                key={item.Image}
                            >
                                <div className=" flex h-12 w-12 lg:h-16 lg:w-16  justify-center min-h-16 min-w-16 lg:min-w-20 lg:min-h-20 ">
                                    <Image
                                        src={item.Image}
                                        width={100}
                                        height={100}
                                        alt={item.skill_name}

                                        quality={100}
                                        style={{ objectFit: "contain", width: "100%", height: "100%" }}
                                    />
                                </div>
                                <div className=" flex  items-center lg:items-start w-full flex-col gap-2 p-1 text-ellipsis text-wrap ">
                                    <h1 className="  text-center   text-xl font-bold ">{item.skill_name}</h1>
                                    <p className=" text-slate-400 text-sm break-words">{item.discription}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/**********************  */}
                    {/***********BACKEND SKILL */}
                    <div className=" mx-2 lg:mx-0  my-20 grid grid-cols-3 gap-3 ">
                        <div className=" flex gap-2 items-center justify-center">
                            <p className=" font-bold text-3xl text-transparent bg-clip-text bg-myGradientBg">
                                Backend skill
                            </p>
                        </div>

                        {BackendLang.map((item, index) => (
                            <div
                                className=" flex flex-col lg:flex-row gap-2 items-center shadow-myshx shadow-[#713AE4]"
                                key={item.Image}
                            >
                                <div className=" flex h-12 w-12 lg:h-16 lg:w-16  justify-center min-h-16 min-w-16 lg:min-w-20 lg:min-h-20 ">
                                    <Image
                                        src={item.Image}
                                        width={100}
                                        height={100}
                                        alt={item.skill_name}

                                        quality={100}
                                        style={{ objectFit: "contain", width: "100%", height: "100%" }}
                                    />
                                </div>
                                <div className=" flex  items-center lg:items-start w-full flex-col gap-2 p-1 text-ellipsis text-wrap ">
                                    <h1 className="  text-center   text-xl font-bold ">{item.skill_name}</h1>
                                    <p className=" text-slate-400 text-sm break-words">{item.discription}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/**********************  */}

                    {/*********** SKILL AND TOOLS */}
                    <div className=" mx-2 lg:mx-0  my-20 grid grid-cols-3 gap-3 ">
                        <div className=" flex gap-2 items-center justify-center">
                            <p className=" font-bold text-3xl text-transparent bg-clip-text bg-myGradientBg">
                                skill & Tools
                            </p>
                        </div>

                        {FrontendLang.map((item, index) => (
                            <div
                                className=" flex flex-col lg:flex-row gap-2 items-center shadow-myshx shadow-[#713AE4]"
                                key={item.Image}
                            >
                                <div className=" flex h-12 w-12 lg:h-16 lg:w-16  justify-center min-h-16 min-w-16 lg:min-w-20 lg:min-h-20 ">
                                    <Image
                                        src={item.Image}
                                        width={100}
                                        height={100}
                                        alt={item.skill_name}

                                        quality={100}
                                        style={{ objectFit: "contain", width: "100%", height: "100%" }}
                                    />
                                </div>
                                <div className=" flex  items-center lg:items-start w-full flex-col gap-2 p-1 text-ellipsis text-wrap ">
                                    <h1 className="  text-center   text-xl font-bold ">{item.skill_name}</h1>
                                    <p className=" text-slate-400 text-sm break-words">{item.discription}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/**********************  */}

                </div>
            </div>
        </>
    )
}

export default page