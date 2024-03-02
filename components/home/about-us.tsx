import Image from 'next/image'
import React from 'react'

const HomeAbout = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 max-w-6xl mx-auto my-5 py-10">      
       <div className="grid grid-cols-2 gap-x-1">
          <div className="bg-primary-500 h-72 text-3xl text-center flex-center relative">
            <div className="w-10 h-10 bg-dark-500 absolute top-0 left-0"/>
              We’re trusted by more than 3500 clients
          </div>
          <div className="relative h-72">
            <Image src={"/assets/images/image-2.jpg"}
              alt=""
              fill={true}
              className="object-cover"/>
          </div>

          <div className="relative h-72">
            <Image src={"/assets/images/image-1.jpg"}
              alt=""
              fill={true}
              className="object-cover"/>
          </div>

          <div className="relative h-72">
            <Image src={"/assets/images/image-3.jpg"}
              alt=""
              fill={true}
              className="object-cover"/>
          </div>
       </div>

       <div className="px-10 pt-2">
          <div className="text-4xl font-bold leading-[4rem] tracking-tighter">
              Why Choose Krowd Platform
          </div>

          <div className="flex-start gap-5 py-10">
            <div className="background-light850_dark100 p-4 transition-opacity hover:opacity-70 rounded-full">
               {/* <HiMiniCheckCircle size={32} /> */}
            </div>
            <div>
                <p className="text-dark100_light900 h3-bold">Highest Success Rates </p>
                <p className="text-light400_light500 pt-5 paragraph-regular">Lorem Ipsum velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum. </p>
            </div>
          </div>

          <div className="flex-start gap-5 py-10">
            <div className="background-light850_dark100 p-4 transition-opacity hover:opacity-70 rounded-full">
               {/* <HiMiniCheckCircle size={32} /> */}
            </div>
            <div>
                <p className="text-dark100_light900 h3-bold">Millions in Funding </p>
                <p className="text-light400_light500 pt-5 paragraph-regular"> Lorem Ipsum velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum.  </p>
            </div>
          </div>


       </div>
    </div>
  )
}

export default HomeAbout
