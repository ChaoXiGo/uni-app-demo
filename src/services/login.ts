import type { LoginResult } from '@/types/login'
import { http } from '@/utils/http'

type LoginParams = {
  code: string
  encrypted: string
  iv: string
}

export const loginAPI = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data: {
      data,
    },
  })
}

// 模拟登录接口
export const loginSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
