import type { CategoryTopItem, GoodsResult } from '@/types/category'
import { http } from '@/utils/http'

export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}

export const getGoodsDataAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: { id },
  })
}
