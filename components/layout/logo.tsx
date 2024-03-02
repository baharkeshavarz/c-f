"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { findLocalFromUrl } from "@/lib/url"

interface LogoProps {
  name?: string
  classes?: string
}

const Logo = ({ name = "logo.png", classes="w-24 h-12" }: LogoProps) => {
  const pathname= usePathname();
  const lang = findLocalFromUrl(pathname);
  return (
    <Link className={`relative ${classes}`} href={`/${lang}/`}>
      <Image
        src={`/assets/images/${name}`}
        alt=""
        fill={true}
        className="object-contain"
      />
    </Link>
  )
}

export default Logo
