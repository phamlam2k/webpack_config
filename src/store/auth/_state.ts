import { IAuthState } from '@type/zustand/auth.type'

export const initialState: Omit<IAuthState, 'login' | 'logout'> = {
  userInfo: null,
  loading: false,
  error: null
}
