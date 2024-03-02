import { Input } from "@mui/material"
import React from 'react'

interface TextInputProps {
    name: string;
    label?: string,
    placeholder?: string,
    size?: string;
    type?: string;
    icon?: any;
}

const TextInput = ({name, label= "", size= "lg", type= "text", icon="", placeholder=""}: TextInputProps) => {
  return (
    <div className="relative flex w-full">
        <Input
          name={name}
          type={type}
          label={label}
          placeholder={placeholder}
          containerProps={{
                className: "min-w-[288px]",
            }}
          className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
          labelProps={{
                className: "before:content-none after:content-none",
            }}
        />
      <div className="!absolute left-3 top-[13px] w-5 h-5">
         {icon}
      </div>
  </div>
  )
}

export default TextInput
