import axiosServices from '@libs/@core/axios'
import { GET_SELF_PROFILE_URL } from '@libs/@core/constants/endpointApi'
import { QUERY_KEYS } from '@libs/@core/constants/key'
import { useQuery } from '@tanstack/react-query'
import { ISelfProfileResponse } from '@type/apis/auth.type'
import { Response } from '@type/apis/common.type'

const getUserProfile = async (): Promise<Response<ISelfProfileResponse>> => {
  const repsonse = await axiosServices.get(GET_SELF_PROFILE_URL)

  return repsonse.data
}

const useGetProfileData = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER_INFO],
    queryFn: getUserProfile
  })
}

export default useGetProfileData
