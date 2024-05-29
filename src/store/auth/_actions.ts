import { loginApi } from '@libs/utils/apis/auth'
import { ILoginPayload } from 'src/types/apis/auth.type'
import { IAuthState } from 'src/types/zustand/auth.type'

export const actions = (
  set: (partial: Partial<IAuthState>) => void
): Pick<IAuthState, 'login' | 'logout'> => ({
  login: async (data: ILoginPayload) => {
    set({ loading: true, error: null })
    try {
      // Giả lập gọi API đăng nhập
      const { data: loginInfo } = await loginApi(data)

      console.log({ loginInfo })
    } catch (error) {
      set({ error: 'Invalid username or password', loading: false })
    }
  },
  logout: () => set({ userInfo: null, accessToken: null, refreshToken: null })
})
