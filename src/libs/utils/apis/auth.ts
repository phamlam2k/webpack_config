import axiosServices from '@libs/@core/axios'
import { domainDefault } from '@libs/@core/constants/env'
import { ILoginPayload } from 'src/types/apis/auth.type'
import { Response } from 'src/types/apis/common.type'

export const loginApi = async (
  data: ILoginPayload
): Promise<Response<ILoginPayload>> => {
  const repsonse = await axiosServices.post(`${domainDefault}/auth/login`, data)

  return repsonse.data
}
