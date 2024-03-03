"use client"

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { ChildrenProps } from '@/types';

const EmotionCache = ({ children }: ChildrenProps) => {
  document.dir = 'rtl';
  const cacheRtl = createCache({
    key: 'rtl',
    prepend: true,
    stylisPlugins: [prefixer, rtlPlugin]
  });

  return <CacheProvider value={cacheRtl}> {children} </CacheProvider>;
};

export default EmotionCache;
