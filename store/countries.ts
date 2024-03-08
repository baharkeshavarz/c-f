import { create } from "zustand"
import common from "../services/common"

interface CountriesStore {
  getCountriesCode: () => Promise<any>
  getCountriesList: () => Promise<any>
}

const useCountriesStore = create<CountriesStore>(set => ({
  getCountriesCode: () => {
    return common.getCountriesCode()
  },

  getCountriesList: () => {
    return common.getCountriesList()
  }
}))

export default useCountriesStore
