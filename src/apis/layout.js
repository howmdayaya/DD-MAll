import http from '@/utils/http'

// 获取首页分类数据
export const getCategoryAPI = () => {
  return http.get('home/category/head')
}

