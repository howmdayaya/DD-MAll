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
  width: 1224px;
  margin: 0 auto;
  // background-color: aqua;
}


.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>