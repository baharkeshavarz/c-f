
"use client";

import { findLocalFromUrl } from "@/lib/url";
import { Stack, Typography } from "@mui/material"
import { usePathname } from "next/navigation";

interface AuthFooterProps {
    page: string;
    title: string;
    subTitle: string;
}

const AuthFooter = ({page, title, subTitle }: AuthFooterProps)  => {
  const pathname= usePathname();
  const lang = findLocalFromUrl(pathname);
  return (
    <Stack mt={5} spacing={1.5}>
       <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
        <Typography textAlign="center" variant="caption">
                {subTitle}
                <Typography
                    as="a"
                    href={`/${lang}/signup`}
                    variant="h6"
                    sx={{ px: 0.2 }}
                    color="secondary"
                >
                 {title}
                </Typography>
            </Typography>
      </Stack>
    </Stack>
  )
}

export default AuthFooter
