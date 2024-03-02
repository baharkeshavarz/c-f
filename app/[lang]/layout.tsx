import "./globals.css"
import type { Metadata } from "next"
import { supportedLanguages } from "@/i18n.config"
import { Roboto } from "next/font/google"
import { Noto_Sans_Arabic } from "next/font/google"
import ThemeComponent from "../../themes"
import { ChildrenLocalProps } from "@/types"
import ToastProvider from "@/providers/toast-provider"

// Handle the font family
const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "500"],
  variable: "--font-roboto"
})
const noto_arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-notoSansArabic"
})

export const metadata: Metadata = {
  title: "Crowd Funding App",
  description: "Crowd Funding App",
  icons: {
    icon: "/assets/images/logo.png"
  }
}

export async function generateStaticParams() {
  return supportedLanguages.map(locale => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params
}: ChildrenLocalProps) {

  return (
    <html
      lang={params.lang.toString()}
      dir={params.lang.toString() === "ar" ? "rtl" : "ltr"}
    >
      <body
        dir={params.lang.toString() === "ar" ? "rtl" : "ltr"}
        className={
            params.lang.toString() === "ar"
            ? noto_arabic.className
            : roboto.className
        }
      >
        <main>
           <ThemeComponent>
              <ToastProvider />
              {children}
            </ThemeComponent>
         </main>
      </body>
    </html>
  )
}
