import http from '@/utils/http'

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

// 获取产品列表数据
export const getGoodsAPI = () => {
  return http.get('home/goods')
}
