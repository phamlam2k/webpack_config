import { ILoginPayload, ILoginResponse } from '@type/apis/auth.type'

export type IAuthState = {
  userInfo: Omit<ILoginResponse, 'token' | 'refreshToken'> | null
  loading: boolean
  error: string | null
  login: (data: ILoginPayload) => Promise<void>
  logout: () => void
}
