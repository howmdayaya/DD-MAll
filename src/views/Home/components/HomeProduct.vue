<script setup>
  import { getGoodsAPI } from '@/apis/layout'
  import { ref, onMounted } from 'vue'
  import HomePanel from '@/views/Home/components/HomePanel.vue'

  const goodsProduct = ref([])
  const getGoodsList = async () => {
    const res = await getGoodsAPI()
    goodsProduct.value = res.result
  }
  onMounted(() => {
    getGoodsList()
  })

</script>

<template>
  <div class="home-product">
    <HomePanel :title="cate.name" v-for="cate in goodsProduct" :key="cate.id" subTitle="更多商品" v-if="goodsProduct.length">
      <div class="box">
        <router-link class="cover" to="/">
          <img v-img-lazy="cate.picture" :src="cate.picture" alt="">
          <strong class="label">
            <span>{{ cate.name }}馆</span>
            <span>{{ cate.saleInfo }}</span>
          </strong>
        </router-link>
        <ul class="goods-list">
          <li v-for="good in cate.goods" :key="good.id">
            <router-link class="goods-item" to="/">
              <img :src="good.picture" alt="">
              <p class="name ellipsis">{{ good.name }}</p>
              <p class="desc ellipsis">{{ good.desc }}</p>
              <p class="price">&yen;{{ good.price }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </HomePanel>
  </div>
</template>

<style lang="scss" scoped>
.home-product {
  width: 100%;
  margin: 0 auto;
  .box {
    display: flex;
    margin-top: 20px;
    gap: 40px;
    .cover {
      height: 540px;
      border-radius: 8px;
      position: relative;
      overflow: hidden;
      flex-shrink: 0; 
      // background-color: aliceblue;
      img {
        width: 250px;
        height: 100%;
        object-fit: cover;
      }
      .label {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 70%;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-size: 14px;
        font-weight: 800;
        padding: 10px;
        border-radius: 0 8px 8px 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .goods-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 200px;
        text-align: center;
        .goods-item {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 15px;
          box-sizing: border-box;
          transition: all 0.3s ease;
          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }
          .name {
            color: #333;
            font-size: 14px;
            font-weight: 800;
          }
          .desc {
            color: #7a7a7a;
            font-size: 12px;
            height: 28px;
          }
          .price {
            color: #ff4444;
            font-size: 18px;
          }
        }
        .ellipsis {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%; // 确保文本容器宽度100%
        }
      }
    }
  }
}
</style>