import { actions } from 'src/store/auth/_actions'
import { initialState } from 'src/store/auth/_state'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set) => ({
      ...initialState,
      ...actions(set)
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage
    }
  )
)

export default useAuthStore
