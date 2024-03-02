import Footer from "@/components/layout/footer"
import { getDictionary } from "@/lib/locale"
import HomeAbout from "@/components/home/about-us"
import CarouselWithContent from "@/components/layout/carousel"
import NavbarWithMegaMenu from "@/components/layout/navbar"
import { LocalProps } from "@/types"
import LoanCalculator from "@/components/home/loan-calculator"

const Home = async ({ params: { lang } }: LocalProps) => {
  const translation = await getDictionary(lang)
  return (
    <div className="mt-0 max-h-screen w-full overflow-scroll">
      {/* <NavbarWithMegaMenu lang={lang} t={translation} /> */}
      {/* <CarouselWithContent />
      <LoanCalculator t={translation} /> */}
      <HomeAbout />
      <Footer />
    </div>
  )
}

export default Home
