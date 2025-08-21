<script setup>
import HomePanel from './HomePanel.vue'
import { getNewAPI } from '@/apis/layout'
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
            <img :src="item.picture" alt="{{ item.name }}" />
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
  flex-wrap: wrap; // 支持换行
  gap: 20px; // 使用gap替代margin实现间距
  padding: 20px 0;

  li {
    // 使用弹性布局占比替代固定宽度，实现响应式
    flex: 1 1 calc(25% - 15px); // 4个/行，自动适应宽度
    min-width: 240px; // 最小宽度限制
    background-color: #f0f9f4; // 具体颜色值
    border-radius: 8px; // 具体圆角值
    overflow: hidden; // 配合圆角裁剪
    transition: all 0.3s ease; // 统一过渡效果
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); // 具体阴影值

    &:hover {
      transform: translateY(-5px); // 优化上浮效果
      box-shadow: 0 5px 15px rgba(0,0,0,0.15); // 具体阴影值
    }

    .goods-link {
      display: block; // 使链接充满整个li
      height: 100%;
    }

    .goods-img {
      width: 100%;
      height: 0;
      padding-bottom: 100%; // 使用padding-bottom实现正方形
      position: relative;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover; // 图片自适应填充
      }
    }

    .goods-name {
      font-size: 16px; // 优化字体大小
      color: #333; // 具体颜色值
      padding: 12px 10px 8px;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .goods-price {
      font-size: 18px;
      color: #ff4400; // 具体颜色值
      font-weight: 600; // 具体权重值
      text-align: center;
      padding-bottom: 12px;
    }
  }
}

</style>
