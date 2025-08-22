<script setup>
import HomePanel from './HomePanel.vue'
import { getHotAPI } from '@/apis/layout'
import { ref, onMounted } from 'vue'


const hotList = ref([])
const getHotList = async () => {
  const res = await getHotAPI()
  hotList.value = res.result
}
onMounted(()=>{
  getHotList()
})
</script>
<template>
  <HomePanel title="人气推荐" subTitle="人气爆款 不容错过" >
    <ul class="goods-list">
      <li v-for="item in hotList" :key="item.id">
        <router-link to="/">
          <img v-img-lazy="item.picture" :src="item.picture" alt="">
          <p class="name">{{item.title}}</p>
          <p class="desc">{{item.alt}}</p>
        </router-link>
      </li>
    </ul>
  </HomePanel>
</template>
<style lang="scss" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  margin-top: 20px;
  gap: 10px;
  li {
    height: 406px;
    transition: all .5s ease;
    &:hover {
      transform: translate3d(0, -3px, 0);
      box-sizing: 0 3px 8px rgb(0 0 0 / 20%);
    }
  
    img {
      width: 298px;
      height: 306px;
    }
  
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
  
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
