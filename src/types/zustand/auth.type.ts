import { ILoginPayload } from 'src/types/apis/auth.type'

export interface IAuthState {
  userInfo: null
  loading: boolean
  error: string | null
  accessToken: string | null
  refreshToken: string | null
  login: (data: ILoginPayload) => Promise<void>
  logout: () => void
}
