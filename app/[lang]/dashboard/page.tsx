"use client"

import React from "react"
import Sidebar from "./components/sidebar"
import DashboardNavbar from "./components/navbar"
import { Card } from "@material-tailwind/react"

const Page = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const openDrawer = () => setIsDrawerOpen(true)
  const closeDrawer = () => setIsDrawerOpen(false)

  return (
    <section className="min-h-screen bg-light-800">
      <div className="flex flex-col p-2 sm:flex-row">
        <Sidebar closeDrawer={closeDrawer} isDrawerOpen={isDrawerOpen} />
        <div className="w-full flex-1 px-5">
          <DashboardNavbar
            isDrawerOpen={isDrawerOpen}
            openDrawer={openDrawer}
          />
          <Card className="mt-6 h-[40rem] w-full rounded-md">page content</Card>
        </div>
      </div>
    </section>
  )
}

export default Page
