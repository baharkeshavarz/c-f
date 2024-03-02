"use client"

import { usePathname } from "next/navigation"
import { humanReadableLanguage, supportedLanguages } from "@/i18n.config"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useEffect, useState } from "react"

interface LocaleSwitcherProps {
  classes?: string
  t?: any
}

const LocaleSwitcher = ({ classes, t }: LocaleSwitcherProps) => {
  const pathName = usePathname()
  const router = useRouter()
  const [selectedLang, setSelectedLang] = useState("")

  const redirectToLanguage = (locale: string) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    router.push(segments.join("/"))
  }

  const LangInfo = (locale: any) => {
    return (
      <>
        <Image
          src={`/assets/icons/flags/${locale}.svg`}
          width={21}
          height={21}
          alt={locale}
          className="mx-1 rounded-md"
        />
        {humanReadableLanguage(locale)}
      </>
    )
  }

  useEffect(() => {
    const segments = pathName.split("/")
    setSelectedLang(segments[1])
  }, [pathName])

  return (
    <div className={`mx-1 flex h-full items-center ${classes}`}>
      <FormControl variant="standard" sx={{ minWidth: 150 }}>
        <InputLabel
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            m: 0
          }}
        >
          {selectedLang ? LangInfo(selectedLang) : t.pages.general.language}
        </InputLabel>
        <Select
          label={
            selectedLang ? LangInfo(selectedLang) : t.pages.general.language
          }
        >
          {supportedLanguages.map(locale => (
            <MenuItem
              key={locale}
              value={selectedLang}
              onClick={() => redirectToLanguage(locale)}
              className="flex-start gap-x-2"
            >
              {LangInfo(locale)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default LocaleSwitcher
