import React from "react"

interface LayoutWrapperProps {
  children: React.ReactNode
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return <div className="flex-center mx-auto max-w-6xl min-h-screen">{children}</div>
}

export default LayoutWrapper
