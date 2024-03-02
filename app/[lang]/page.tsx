import Footer from "@/components/layout/footer"
import { getDictionary } from "@/lib/locale"
import HomeAbout from "@/components/home/about-us"
import CarouselWithContent from "@/components/layout/carousel"
import NavbarWithMegaMenu from "@/components/layout/navbar"
import { LocalProps } from "@/types"
import LoanCalculator from "@/components/home/loan-calculator"
import LocaleSwitcher from "@/components/layout/locale-switcher"
import ResponsiveAppBar from "@/components/layout/navbar"

const Home = async ({ params: { lang } }: LocalProps) => {
  const translation = await getDictionary(lang)
  return (
    <div className="mt-0 max-h-screen w-full overflow-scroll bg-white">
      {/* <NavbarWithMegaMenu lang={lang} t={translation} /> */}
      {/* <CarouselWithContent />*/}
      <ResponsiveAppBar lang={lang} t={translation} />
      <LoanCalculator t={translation} />
      <HomeAbout />
      <Footer />
    </div>
  )
}

export default Home
