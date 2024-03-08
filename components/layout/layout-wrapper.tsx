import React from "react"

interface LayoutWrapperProps {
  children: React.ReactNode
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    <div className="flex-center mx-auto min-h-screen max-w-6xl">{children}</div>
  )
}

export default LayoutWrapper
