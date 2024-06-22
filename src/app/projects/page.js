import React from 'react'
import Projectcard from '@/components/Projectcard'
import { AllProjects } from '@/utils/Projectcontent'

function page() {
    return (
        <>
            <div
                className=" flex flex-col items-center justify-center py-20 "
            
            >
                <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-myGradientBg py-20">
                    My Projects
                </h1>
                <div className=" h-full w-full max-w-full flex flex-row flex-wrap justify-center md:flex-row gap-6 px-6">

                    {AllProjects?.map((data, index) => (

                        <Projectcard
                            key={data.sourcecode}
                            preview={data?.preview}
                            sourcecode={data?.sourcecode}
                            src={data?.src}
                            title={data?.title}
                            description={data?.description}
                        />

                    ))}
                </div>
            </div>
        </>

    )
}

export default page