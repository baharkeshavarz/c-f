import LayoutWrapper from '@/components/layout/layout-wrapper'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/locale'

export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { pages } = await getDictionary(lang)

  return (
    <LayoutWrapper>
      <section className="py-12">
         <h1 className="background-test h2-bold">{pages.about.title}</h1>
         <p className="text-gray-500">{pages.about.description}</p>
      </section>
    </LayoutWrapper>
  )
}
