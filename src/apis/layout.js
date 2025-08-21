import http from '@/utils/http'

// 获取首页分类数据
export const getCategoryAPI = () => {
  return http.get('home/category/head')
}

// 获取首页banner数据
export const getBannerAPI = () => {
  return http.get('home/banner')
}
