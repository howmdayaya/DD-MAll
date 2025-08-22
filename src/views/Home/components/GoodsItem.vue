<script setup>
  defineProps({
    good: {
      type: Object,
      default: () => { }
    }
  })
</script>
<template>
  <router-link class="goods-item" to="/">
    <img :src="good.picture" alt="">
    <p class="name ellipsis">{{ good.name }}</p>
    <p class="desc ellipsis">{{ good.desc }}</p>
    <p class="price">&yen;{{ good.price }}</p>
  </router-link>
</template>

<style lang="scss" scoped>
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
</style>
