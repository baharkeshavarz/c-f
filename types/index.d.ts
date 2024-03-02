export interface ChildrenProps {
    children: React.ReactNode
  }

export interface NaviagationProps {
   navigation: any;
}

export interface TranslateProps {
   t: any;
}

export interface LocalProps {
  params: { lang: Locale }
}

export interface ChildrenLocalProps {
  children: React.ReactNode
  params: { lang: Locale }
}

export interface ApiResponse {
  status: number;
  data: any;
}




