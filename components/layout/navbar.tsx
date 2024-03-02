"use client"

import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Logo from "./logo";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import LocaleSwitcher from "./locale-switcher";
import { createElement, useEffect, useState } from "react";

interface NavbarProps {
  lang: Locale;
  t: any;
}
 


const NavbarWithMegaMenu = ({lang, t }: NavbarProps) => {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <LocaleSwitcher t={t}/>
  );
}

export default NavbarWithMegaMenu;