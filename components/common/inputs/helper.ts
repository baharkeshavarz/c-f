import React from "react"

interface InputEvent extends React.KeyboardEvent<HTMLInputElement> {
  key: string
  keyCode: number
  ctrlKey: boolean
  metaKey: boolean
}

export const onlyDigitsWithMaxLen = (max: number) => (event: InputEvent) => {
  if (
    event.key === "Backspace" ||
    event.key === "Delete" ||
    event.key === "Enter" ||
    event.key === "Tab"
  )
    return

  if (
    (event.ctrlKey || event.metaKey) &&
    (event.keyCode === 86 || event.keyCode === 88 || event.keyCode === 67)
  )
    return

  const val = remSep(event.currentTarget.value)

  if (val.length >= max) {
    return event.preventDefault()
  }

  const persianKey = p2e(event.key)
  if (!/[0-9]/.test(persianKey)) {
    event.preventDefault()
  }
}

export const onlyDigitsAndSlashWithMaxLen =
  (max: number) => (event: InputEvent) => {
    if (
      event.key === "Backspace" ||
      event.key === "Delete" ||
      event.key === "Enter" ||
      event.key === "Tab"
    )
      return

    if (
      (event.ctrlKey || event.metaKey) &&
      (event.keyCode === 86 || event.keyCode === 88 || event.keyCode === 67)
    )
      return

    const val = remSep(event.currentTarget.value)

    if (val.length >= max) {
      return event.preventDefault()
    }
    const persianKey = p2e(event.key)

    if (!/[0-9/]/.test(persianKey)) {
      event.preventDefault()
    }
  }

export const onlyCharactersWithMaxLen =
  (max: number) => (event: InputEvent) => {
    if (
      event.key === "Backspace" ||
      event.key === "Delete" ||
      event.key === "Enter" ||
      event.key === "Tab"
    )
      return
    if (
      (event.ctrlKey || event.metaKey) &&
      (event.keyCode === 86 || event.keyCode === 88 || event.keyCode === 67)
    )
      return

    const val = remSep(event.currentTarget.value)

    if (val.length >= max) {
      return event.preventDefault()
    }
    const persianKey = p2e(event.key)

    if (!/[a-zA-Z0-9@./]/.test(persianKey)) {
      event.preventDefault()
    }
  }

export const OnlyEnglishCharacter = () => (event: InputEvent) => {
  const val = event.key
  if (!/[a-zA-Z]/.test(val)) {
    event.preventDefault()
  }
}

export const commaSep = (num: number | string) => {
 return (
       typeof num === "number"
       ? p2e(num.toString())
       : +p2e(num).replace(/\D/g, "")
   ).toLocaleString()

}


export const remSep = (value: string) => value?.replace(/\D/g, "")
export const p2e = (s: string) => s.replace(/[۰-۹٠-٩]/g, d => "۰۱۲۳۴۵۶۷۸۹0123456789".charAt("۰۱۲۳۴۵۶۷۸۹٠١٢٣٤٥٦٧٨٩".indexOf(d)));
