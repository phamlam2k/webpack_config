import { ACCESS_TOKEN, REFRESH_TOKEN } from '@libs/@core/constants/key'
import { loginApi } from '@libs/utils/apis/auth'
import { ILoginPayload } from '@type/apis/auth.type'
import { IAuthState } from '@type/zustand/auth.type'

export const actions = (
  set: (partial: Partial<IAuthState>) => void
): Pick<IAuthState, 'login' | 'logout'> => ({
  login: async (data: ILoginPayload) => {
    set({ loading: true, error: null })
    try {
      set({ loading: true, error: null })
      const { metadata } = await loginApi(data)

      const { token, refreshToken, ...props } = metadata

      set({
        userInfo: { ...props },
        loading: false
      })

      localStorage.setItem(ACCESS_TOKEN, token)
      localStorage.setItem(REFRESH_TOKEN, refreshToken)
    } catch (error) {
      set({ error: 'Invalid username or password', loading: false })
    }
  },
  logout: () => {
    set({ userInfo: null, loading: false })
    localStorage.removeItem(ACCESS_TOKEN)
    localStorage.removeItem(REFRESH_TOKEN)
  }
})
