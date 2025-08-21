import http from '@/utils/http'

// 获取首页分类数据
export const getCategoryAPI = () => {
  return http.get('home/category/head')
}

// 获取首页banner数据
export const getBannerAPI = () => {
  return http.get('home/banner')
}

// 获取首页新鲜好物数据
export const getNewAPI = () => {
  return http.get('home/new')
}

// 获取首页人气推荐数据
export const getHotAPI = () => {
  return http.get('home/hot')
}
