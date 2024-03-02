import { create } from "zustand"
import themeConfig from "../../configs/themeConfig"

const useConfigStore = create(set => ({
  ...themeConfig,
  // Change Theme Mode - Light/Dark
  onChangeMode: mode => {
    set({ themeMode: mode })
  },

  // Handle Mini Drawer
  onChangeDrawer: mode => {
    set({ drawerOpen: mode })
  }
}))

export default useConfigStore
