import { getDictionary } from "@/lib/locale"
import { LocalProps } from "@/types";
import Request from "./kyc";

const Page = async({
  params: { lang },
}: LocalProps) => {

  const { pages } = await getDictionary(lang);
  return (
     <Request t={pages}/>
  )
}

export default Page;
