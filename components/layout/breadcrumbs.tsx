"use client"

import React from 'react'
import { Breadcrumbs } from "@mui/material";
import Link from 'next/link';


const BreadcrumbsComponent = () => {
  return (
    <div className="bg-light-850 sm:h-16">
        <div className="max-w-6xl sm:flex-between mx-auto h-full p-2">
            <div className="flex-start flex-1 gap-2">
              <h1 className="text-dark400_light800 paragraph-regular">Log In</h1>
              <div className="relative px-2">
                 <span className="border-r border-black"></span>
              </div>
              <span className="px-4 text-light400_light500 small-regular">
                  Short tagline goes here
              </span>
            </div>
            <div className="sm:flex-end flex-start flex-1">
              <Breadcrumbs
                  separator="." 
                    className="bg-gradient-to-tr from-gray-900 to-gray-800 p-2 mt-2"
                >
                      <Link href="#" className="opacity-60">
                        Home
                      </Link>
                      <Link href="#" className="opacity-60">
                          Pages
                      </Link>
                      <Link href="#">Login</Link>
              </Breadcrumbs>
            </div>
           
        </div>
     </div>
  )
}

export default BreadcrumbsComponent;