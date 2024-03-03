import BreadcrumbsComponent from "@/components/layout/breadcrumbs"
import { getDictionary } from "@/lib/locale"
import Footer from "@/components/layout/footer"
import { ChildrenLocalProps } from "@/types"
import ResponsiveAppBar from "@/components/layout/navbar"

export default async function MainLayout({
  children,
  params
}: ChildrenLocalProps) {

  const translation = await getDictionary(params.lang);
  return (
        <main>
             <ResponsiveAppBar lang={params.lang} t={translation} />
              {/* <BreadcrumbsComponent/> */}
              {children}
           <Footer/>
        </main>
  )
}
