<script setup>
  import { getGoodsAPI } from '@/apis/home'
  import HomePanel from '@/views/Home/components/HomePanel.vue'
  import GoodsItem from '@/views/Home/components/GoodsItem.vue'


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
            <span>{{ cate.name }}馆 &gt;</span>
            <span>&nbsp;{{ cate.saleInfo }}</span>
          </strong>
        </router-link>
        <ul class="goods-list">
          <li v-for="good in cate.goods" :key="good.id">
            <GoodsItem :good="good" />
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
    gap: 40px;
    padding: 20px 0;
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
        transition: all 0.5s ease;

      }
      .label {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 70%;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 100%);
        color: #fff;
        font-size: 14px;
        font-weight: 800;
        padding: 10px;
        border-radius: 0 8px 8px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease;

      }
      &:hover {
        .label {
          transform: translateY(150%);
          transition: all 0.5s ease-in-out;
        }
        img {
          transform: scale(1.1);
          transition: all 0.5s ease-in-out;
        }
      }
    }
    .goods-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 200px;
        text-align: center;
      }
    }
  }
}
</style>