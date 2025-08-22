<script setup>
import { getTopCategoryAPI } from '@/apis/category'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const categoryData = ref({})
const getTopCategory = async () => {
  const res = await getTopCategoryAPI(route.params.id)
  console.log(res)
  categoryData.value = res.result
}
onMounted(()=>{
  getTopCategory()
})
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 顶部面包屑 -->
       <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{categoryData.name}}</el-breadcrumb-item>
        </el-breadcrumb>
       </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>