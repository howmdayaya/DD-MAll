import http from '@/utils/http'

// 获取分类数据
export const getTopCategoryAPI = (id) => {
  return http.get('category', {params:{id}})
}
