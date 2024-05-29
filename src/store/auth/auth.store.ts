import { IAuthState } from '@type/zustand/auth.type'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { initialState } from './_state'
import { actions } from './_actions'

const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      ...initialState,
      ...actions(set)
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default useAuthStore
