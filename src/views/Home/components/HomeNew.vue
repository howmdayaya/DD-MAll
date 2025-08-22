<script setup>
import HomePanel from './HomePanel.vue'
import { getNewAPI } from '@/apis/home'
import { ref, onMounted } from 'vue'

const newList = ref([])
const getNewList = async () => {
  const res = await getNewAPI()
  newList.value = res.result
}
onMounted(()=>{
  getNewList()
})
</script>
<template>
  <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
    <!-- 修复class拼写错误 goods0list -> goods-list -->
    <ul class="goods-list">
      <li v-for="item in newList" :key="item.id">
        <router-link to="/" class="goods-link">
          <div class="goods-img">
            <img v-img-lazy="item.picture" :src="item.picture" alt="{{ item.name }}" />
          </div>
          <p class="goods-name">{{ item.name }}</p>
          <p class="goods-price">&yen;{{ item.price }}</p>
        </router-link>
      </li>
    </ul>
  </HomePanel>
</template>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  width: 1224px;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;

  li {
    flex: 1 1 calc(25% - 15px); 
    min-width: 240px;
    background-color: #f0f9f4; 
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.15); 
    }

    .goods-link {
      display: block;
      height: 100%;
    }

    .goods-img {
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      position: relative;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .goods-name {
      font-size: 16px;
      color: #333;
      padding: 12px 10px 8px;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .goods-price {
      font-size: 18px;
      color: #ff4400;
      font-weight: 600;
      text-align: center;
      padding-bottom: 12px;
    }
  }
}

</style>
