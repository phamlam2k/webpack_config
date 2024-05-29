import { IAuthState } from 'src/types/zustand/auth.type'

export const initialState: Omit<IAuthState, 'login' | 'logout'> = {
  userInfo: null,
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: null
}
