import { getDictionary } from "@/lib/locale"
import SignIn from "."
import { LocalProps } from "@/types";

const Page = async({
  params: { lang },
}: LocalProps) => {

  const { pages } = await getDictionary(lang);
  return (
     <SignIn t={pages}/>
  )
}

export default Page;
