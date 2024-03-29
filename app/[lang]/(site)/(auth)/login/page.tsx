import { getDictionary } from "@/lib/locale"
import Login from "."
import { LocalProps } from "@/types";

const Page = async({
  params: { lang },
}: LocalProps) => {

  const { pages } = await getDictionary(lang);
  return (
     <Login t={pages}/>
  )
}

export default Page;
