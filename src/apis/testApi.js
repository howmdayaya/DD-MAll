import http from '@/utils/http'

export const getTest = () => {
  return http.get('home/category/head')
}