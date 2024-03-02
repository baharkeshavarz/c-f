"use client"

import TextInput from "@/components/forms/input";
import LayoutWrapper from "@/components/layout/layout-wrapper";
import { findLocalFromUrl } from "@/lib/url";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@mui/material";
import { usePathname } from "next/navigation";

import {
  UserCircleIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import { TranslateProps } from "@/types";

 
const SignUp = ({ t }: TranslateProps) =>{
  const pathname= usePathname();
  const lang = findLocalFromUrl(pathname);

  return (
    <LayoutWrapper>
      <Card className="sm:w-96 w-full my-10 py-5 rounded-none sm:mx-0 mx-5">
        <CardBody className="flex flex-col gap-1">
          <Typography variant="paragraph" className="text-light400_light500">
             {t.signup.username}
          </Typography>
          <TextInput icon={<UserCircleIcon/>} />
          <Typography variant="paragraph" className="text-light400_light500 mt-5">
             {t.signup.password} 
          </Typography>
          <TextInput icon={<LockClosedIcon/>} />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="filled" fullWidth className="bg-primary-500">
             {t.general.register}
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center text-light400_light500">
              {t.signup.haveAccount}
            <Typography
              as="a"
              href={`/${lang}/login`}
              variant="small"
              color="blue-gray"
              className="mx-1 text-dark400_light800"
            >
              {t.general.login}
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </LayoutWrapper>
  );
}

export default SignUp;