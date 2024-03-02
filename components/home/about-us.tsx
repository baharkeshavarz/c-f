import { CheckBadgeIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import React from "react"

const HomeAbout = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto  grid max-w-6xl grid-cols-1 py-10 sm:grid-cols-2">
        <div className="grid grid-cols-2 gap-x-1">
          <div className="relative flex h-72 items-center justify-center bg-black text-center text-3xl text-white">
            <div className="absolute left-0 top-0 h-10 w-10 bg-white" />
            We’re trusted by more than 3500 clients
          </div>
          <div className="relative h-72">
            <Image
              src={"/assets/images/image-2.jpg"}
              alt=""
              fill={true}
              className="object-cover"
            />
          </div>

          <div className="relative h-72">
            <Image
              src={"/assets/images/image-1.jpg"}
              alt=""
              fill={true}
              className="object-cover"
            />
          </div>

          <div className="relative h-72">
            <Image
              src={"/assets/images/image-3.jpg"}
              alt=""
              fill={true}
              className="object-cover"
            />
          </div>
        </div>

        <div className="px-10 pt-2">
          <div className="text-4xl font-bold leading-[4rem] tracking-tighter">
            Why Choose Krowd Platform
          </div>

          <div className="flex justify-start gap-5 py-10">
            <div className="background-light850_dark100 rounded-full bg-white  transition-opacity hover:opacity-70">
              <CheckBadgeIcon className="h-10 w-10" />
            </div>
            <div>
              <p className="text-dark100_light900 h3-bold">
                Highest Success Rates{" "}
              </p>
              <p className="text-light400_light500 paragraph-regular pt-5">
                Lorem Ipsum velit auctor aliquet. Aenean sollic tudin, lorem is
                simply free text quis bibendum.{" "}
              </p>
            </div>
          </div>

          <div className="flex justify-start gap-5 py-10">
            <div className="rounded-full bg-white transition-opacity hover:opacity-70">
              <CheckBadgeIcon className="h-10 w-10" />
            </div>
            <div>
              <p className="text-dark100_light900 h3-bold">
                Millions in Funding{" "}
              </p>
              <p className="text-light400_light500 paragraph-regular pt-5">
                {" "}
                Lorem Ipsum velit auctor aliquet. Aenean sollic tudin, lorem is
                simply free text quis bibendum.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
