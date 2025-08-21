import http from '@/utils/http'

export const getCategoryAPI = () => {
  return http.get('home/category/head')
}