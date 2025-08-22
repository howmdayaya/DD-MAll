<script setup>
  import HomeCategory from '@/views/Home/components/HomeCategory.vue'
  import HomeBanner from '@/views/Home/components/HomeBanner.vue'
  import HomeNew from '@/views/Home/components/HomeNew.vue'
  import HomeHot from '@/views/Home/components/HomeHot.vue'
  import HomeProduct from '@/views/Home/components/HomeProduct.vue'
</script>
<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <div class="bg"></div>
</template>

<style scoped lang="scss">
.bg {
  width: 100%;
  height: 100px;
  background-color: #f8f8f8;
  position: relative;
  overflow: hidden;
  &::before, &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: repeat-x;
  }
  
  &::before {
    height: 40px;
    background-size: 120px 40px;
    background-image: radial-gradient(ellipse 120% 100% at 40px -35px, transparent 6px, rgba(224, 0, 0, 0.7) 60px);
    animation: wave 60s linear infinite, waveUp 4s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    animation-delay: 0s;
  }
  
  &::after {
    height: 50px;
    background-size: 160px 50px;
    background-image: radial-gradient(ellipse 150% 100% at 60px -45px, transparent 13px, rgba(218, 194, 194, 0.767) 67px);
    animation: wave 90s linear infinite, waveDown 4s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    animation-delay: 20s;
  }
  
  @keyframes wave {
    to {
      background-position-x: -200%;
    }
  }

  @keyframes waveUp {
    0%, 100% { transform: translateY(0) skewX(0deg) translateX(0); }
    25% { transform: translateY(-5px) skewX(3deg) translateX(-3px); }
    50% { transform: translateY(-8px) skewX(0deg) translateX(0); }
    75% { transform: translateY(-5px) skewX(-3deg) translateX(3px); }
  }

  @keyframes waveDown {
    0%, 100% { transform: translateY(0) skewX(0deg) translateX(0); }
    25% { transform: translateY(5px) skewX(-3deg) translateX(3px); }
    50% { transform: translateY(8px) skewX(0deg) translateX(0); }
    75% { transform: translateY(5px) skewX(3deg) translateX(-3px); }
  }
}

</style>