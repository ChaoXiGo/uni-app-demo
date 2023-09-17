import http from '@/utils/http'

export const getData = () => {
  const res = await http({
    method: 'GET',
    url: '/home/banner',
  })
}
