import React from 'react'
import Image from 'next/image'
import { IoSchoolSharp } from "react-icons/io5";

function page() {
  return (
    <div
      className=" mb-14 flex flex-col items-center justify-center "
      id="projects"
    >
      <div>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-myGradientBg py-20">
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

      <div className=' mt-8 gap-5 pb-5 flex flex-col justify-center items-center'>

        <div><h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-myGradientBg ">
          Education
        </h1></div>


        <div className='flex flex-row border myborder w-[600px] p-3'>
          <div className=' flex justify-center text-2xl w-[80px] h-auto items-center align-middle'>
            <IoSchoolSharp className=' myborder  w-[70px] h-[70px] text-3xl rounded-full p-3 bg-myGradientBg' />
          </div>
          <div className=' flex flex-col w-full pl-4  py-2'>
            <div className='text-sm'>2021-2025</div>
            <div className=' flex flex-col '>
              <div className='font-semibold text-xl'>B.Tech Computer Science</div>
              <div className=''>{"Barkatullah University Institute of Technology, Bhopal (mp)"}</div>
            </div>
          </div>
        </div>


        <div className='myborder flex flex-row border  w-[600px] p-3'>
          <div className=' flex justify-center text-2xl w-[80px] h-auto items-center align-middle'>
            <IoSchoolSharp className='myborder  w-[70px] h-[70px] text-3xl rounded-full p-3 bg-myGradientBg' />
          </div>
          <div className=' flex flex-col w-full pl-4  py-2'>
            <div className='text-sm'>2019-2020</div>
            <div className=' flex flex-col '>
              <div className='font-semibold text-xl'>Higher Secondry School</div>
              <div>{"Sindhu Higher Secondary School, Satna (mp)"}</div>
            </div>
          </div>
        </div>


          <div className='myborder border flex flex-row  w-[600px] p-3 '>
            <div className=' flex justify-center text-2xl w-[80px] h-auto items-center align-middle'>
              <IoSchoolSharp className=' w-[70px] h-[70px] text-3xl rounded-full p-3  bg-gradient-to-r from-[#8111cc] to-[#4737ff]' />
            </div>
            <div className=' flex flex-col w-full pl-4  py-2'>
              <div className='text-sm'>2017-2018</div>
              <div className=' flex flex-col '>
                <div className='font-semibold text-xl'>High School</div>
                <div>{"Sindhu Higher Secondary School, Satna (mp)"}</div>
              </div>
            </div>
          </div>







      </div>
    </div>
  )
}

export default page