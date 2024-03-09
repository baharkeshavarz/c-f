import Footer from "@/components/layout/footer"
import { getDictionary } from "@/lib/locale"
import HomeAbout from "@/components/home/about-us"
import { LocalProps } from "@/types"
import LoanCalculator from "@/components/home/loan-calculator"
import LocaleSwitcher from "@/components/layout/locale-switcher"
import ResponsiveAppBar from "@/components/layout/navbar"
import Example from "@/components/layout/ca"

const Home = async ({ params: { lang } }: LocalProps) => {
  const translation = await getDictionary(lang)
  return (
    <div className="mt-0 max-h-screen w-full overflow-scroll bg-white">
      <ResponsiveAppBar lang={lang} t={translation} />
      <Example />
      <LoanCalculator t={translation} />
      <HomeAbout />
      <Footer />
    </div>
  )
}

export default Home
