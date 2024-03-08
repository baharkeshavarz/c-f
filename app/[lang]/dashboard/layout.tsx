import { getDictionary } from "@/lib/locale"
import Footer from "@/components/layout/footer"
import { ChildrenLocalProps } from "@/types"
import ResponsiveAppBar from "@/components/layout/navbar"

export default async function DashboardLayout({
  children,
  params
}: ChildrenLocalProps) {
  const translation = await getDictionary(params.lang)
  return (
    <main className="bg-white">
      <ResponsiveAppBar lang={params.lang} t={translation} />
      {children}
      <Footer />
    </main>
  )
}
