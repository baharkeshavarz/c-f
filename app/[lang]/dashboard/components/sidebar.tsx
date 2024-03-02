import React from "react"
import { Drawer } from "@material-tailwind/react"
import SidebarItems from "./sidebar-menus"

interface SidebarProps {
  isDrawerOpen: boolean
  closeDrawer: () => void
}

const Sidebar = ({ isDrawerOpen, closeDrawer }: SidebarProps) => {
  const [open, setOpen] = React.useState(0)
  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value)
  }

  return (
    <>
      <div className="flex sm:hidden">
        <Drawer open={isDrawerOpen} onClose={closeDrawer}>
          <SidebarItems open={open} handleOpen={handleOpen} />
        </Drawer>
      </div>
      <div className="hidden sm:flex">
        <SidebarItems open={open} handleOpen={handleOpen} />
      </div>
    </>
  )
}

export default Sidebar
