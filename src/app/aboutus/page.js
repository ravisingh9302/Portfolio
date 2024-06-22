import React from 'react'
import Image from 'next/image'
import { IoSchoolSharp } from "react-icons/io5";

function page() {
  return (
    <div
      className=" mb-14 w-full flex flex-col items-center justify-center"

    >
      <div>
        <h1 className=" text-[40px] font-semibold text-transparent bg-clip-text bg-myGradientBg py-20">
          About Me
        </h1>
      </div>

      <div className=" h-full w-full  flex flex-col  justify-center items-center  gap-6 px-6">
        <div className=''>
          <Image
            className="border-2 border-[#191D4D] rounded-full  h-auto w-auto"
            src="/images/ravi.png"
            alt="work icons"
            height={200}
            width={200}
            quality={100}
            priority
            aria-label="profilephoto"
          />
        </div>
        <div className=' text-3xl font-semibold '>
          <p>Ravi Shankar Singh</p>
        </div>
      </div>

      <div className=' mt-8 gap-5 pb-5 flex flex-col px-1 justify-center items-center'>

        <div><h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-myGradientBg ">
          Education
        </h1></div>


        <div className='pl-2 lg:px-2 flex flex-row border myborder w-full'>
          <div className=' flex justify-center text-2xl  h-auto items-center align-middle'>
            <IoSchoolSharp className=' myborder  w-[70px] h-[70px] text-3xl rounded-full p-3 bg-myGradientBg' />
          </div>
          <div className=' flex flex-col  pl-4  py-2'>
            <div className='text-sm'>2021-2025</div>
            <div className=' flex flex-col text-wrap'>
              <div className='font-semibold text-xl'>B.Tech Computer Science</div>
              <div className='text-wrap'>{"Barkatullah University Institute of Technology, Bhopal (mp)"}</div>
            </div>
          </div>
        </div>

        <div className='pl-2 lg:px-2 flex flex-row border myborder w-full'>
          <div className=' flex justify-center text-2xl  h-auto items-center align-middle'>
            <IoSchoolSharp className=' myborder  w-[70px] h-[70px] text-3xl rounded-full p-3 bg-myGradientBg' />
          </div>
          <div className=' flex flex-col  pl-4  py-2'>
            <div className='text-sm'>2019-2020</div>
            <div className=' flex flex-col text-wrap'>
              <div className='font-semibold text-xl'>Higher Secondry School</div>
              <div className='text-wrap'>{"Sindhu Higher Secondary School, Satna (mp)"}</div>
            </div>
          </div>
        </div>
        <div className='pl-2 lg:px-2 flex flex-row border myborder w-full'>
          <div className=' flex justify-center text-2xl  h-auto items-center align-middle'>
            <IoSchoolSharp className=' myborder  w-[70px] h-[70px] text-3xl rounded-full p-3 bg-myGradientBg' />
          </div>
          <div className=' flex flex-col  pl-4  py-2'>
            <div className='text-sm'>2017-2018</div>
            <div className=' flex flex-col text-wrap'>
              <div className='font-semibold text-xl'>High School</div>
              <div className='text-wrap'>{"Sindhu Higher Secondary School, Satna (mp)"}</div>
            </div>
          </div>
        </div>


        

       






      </div>
    </div>
  )
}

export default page