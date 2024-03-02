import { create } from "zustand"

export const useStoreCredit = create(set => ({
    credit: 0,
    setCredit: (credit: number) => set({ credit })
}))
