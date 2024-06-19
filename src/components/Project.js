import React from 'react'
import Projectcard from './Projectcard';
import { ImpProjects } from '@/utils/Projectcontent';

const Project = () => {
  return (
    <div
      className=" flex flex-col items-center justify-center "
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className=" h-full w-full max-w-full flex flex-row flex-wrap justify-center md:flex-row gap-6 px-6">

        {ImpProjects?.map((data, index) => (
          <Projectcard
            preview={data?.preview}
            sourcecode={data?.sourcecode}
            src={data?.src}
            title={data?.title}
            description={data?.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Project;