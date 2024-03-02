import { getDictionary } from "@/lib/locale"
import SignUp from "."
import { LocalProps } from "@/types";

const Page = async({
  params: { lang },
}: LocalProps) => {

  const { pages } = await getDictionary(lang);
  return (
     <SignUp t={pages}/>
  )
}

export default Page;
