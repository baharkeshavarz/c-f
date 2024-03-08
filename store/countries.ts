import { create } from "zustand"
import { persist } from "zustand/middleware"

type CountriesStore = {
  countriesInfo: any
  onSetCountriesList: (items: any) => void
  onSetCountriesCodeList: (items: any) => void
  onSetNationalitiesList: (items: any) => void
}

const initialValue = {
  countriesList: [],
  countriesCodeList: [],
  nationalitiesList: []
}

export const useCountriesStore = create(
  persist(
    (set: any) => ({
      countriesInfo: initialValue,
      onSetCountriesList: (items: any) => set({ countriesInfo: items }),
      onSetCountriesCodeList: (items: any) => set({ countriesInfo: items }),
      onSetNationalitiesList: (items: any) => set({ countriesInfo: items })
    }),
    {
      name: "countries"
    }
  )
)
