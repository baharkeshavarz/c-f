export interface ChildrenProps {
  children: React.ReactNode
}

export interface NaviagationProps {
  navigation: any
}

export interface TranslateProps {
  t: any
}

export interface LocalProps {
  params: { lang: Locale }
}

export interface ChildrenLocalProps {
  children: React.ReactNode
  params: { lang: Locale }
}

export interface ApiResponse {
  status: number
  data: any
}

export interface SettingsT {
  autoPlay: boolean
  animation: "fade" | "slide"
  indicators: boolean
  duration: number
  navButtonsAlwaysVisible: boolean
  navButtonsAlwaysInvisible: boolean
  fullHeightHover: boolean
  cycleNavigation: boolean
  swipe: boolean
  [key: string]: any
}

export interface SettingsProps {
  settings: SettingsT
  setSettings: Function
}
