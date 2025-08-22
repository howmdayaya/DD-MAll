<script setup>
import { getBannerAPI } from '@/apis/layout'
import { onMounted,ref } from 'vue'

const bannerList = ref([])
const getBanner = async () => {
  const res = await getBannerAPI()
  bannerList.value = res.result
}
onMounted(()=>{
  getBanner()
})
</script>
<template>
  <div class="home-banner">
    <el-carousel height="430px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img v-img-lazy="item.imgUrl" :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
.home-banner {
  width: 1224px;
  height: 500px;
  margin: 0 auto;// 负边距上移实现覆盖效果
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5; // 确保层级低于菜单
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; // 添加图片自适应填充
  }
}
</style>
