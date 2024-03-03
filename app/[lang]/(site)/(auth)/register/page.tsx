import { getDictionary } from "@/lib/locale"
import Register from "."
import { LocalProps } from "@/types";

const Page = async({
  params: { lang },
}: LocalProps) => {

  const { pages } = await getDictionary(lang);
  return (
     <Register t={pages}/>
  )
}

export default Page;
