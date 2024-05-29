export interface ILoginPayload {
  account: string
  password: string
}

export interface ILoginResponse {
  email: string
  fullName: string
  id: string
  nameColor: string
  refreshToken: string
  token: string
  userName: string
}

export interface ISelfProfileResponse {
  id: string
  fullName: string
  nickName: string
  email: string
  nameColor: string
  phone: string
  userName: string
  numFriends: number
  avatarColor: string
  avatarUrl: string
  avatarFile: string
  isActivate: boolean
  isDelete: boolean
  role: string
  coverUrl: string
  coverFile: string
  userAgent: string
  relation: string
  createTs: string
}
