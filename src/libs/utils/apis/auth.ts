import { domainDefault } from '@libs/@core/constants/env'
import axios from 'axios'
import { ILoginPayload, ILoginResponse } from 'src/types/apis/auth.type'
import { Response } from 'src/types/apis/common.type'

export const loginApi = async (
  data: ILoginPayload
): Promise<Response<ILoginResponse>> => {
  const repsonse = await axios.post(`${domainDefault}/auth/login`, data)

  return repsonse.data
}
