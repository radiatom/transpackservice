import { create, StateCreator } from 'zustand'
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware'

interface IInitialState {
  isMobileMenuActive?: boolean
  currency?: string
}

interface IRootStore extends IInitialState {
  handleChangeStore: (value: IInitialState) => void
}

type MyPersist = (
  config: StateCreator<IRootStore>,
  options: PersistOptions<IRootStore>,
) => StateCreator<IRootStore>

export const useRootStore = create<IRootStore, []>(
  (persist as MyPersist)(
    (set) => ({
      handleChangeStore: (value) => set((state) => ({ ...state, ...value })),
      isMobileMenuActive: false,
      currency: 'UAH',
    }),
    {
      name: 'root',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
