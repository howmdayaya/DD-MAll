<script setup>
  import { useCategoryStore } from '@/stores'
  const categoryStore = useCategoryStore()



</script>
<template>
  <header class="app-header">
    <div class="container">
      <!-- 左侧区域：logo + 导航 -->
      <div class="left-section">
        <h1 class="logo">
          <router-link to="/">
            DD-MALL
          </router-link>
        </h1>
        <ul class="app-header-nav">
          <li class="home">
            <router-link to="/">
              首页
            </router-link>
          </li>
          <li v-for="item in categoryStore.categoryList" :key="item.id">
            <router-link active-class="active" :to="`/category/${item.id}`">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 右侧区域：搜索框 -->
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜索">
      </div>
      <!-- 头部购物车 -->
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .app-header {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* 两端对齐 */
      height: 80px;
      padding: 0 5px;
    }

    /* 左侧区域：logo + 导航 */
    .left-section {
      display: flex;
      align-items: center;
    }

    .logo {
      width: 200px;

      a {
        display: block;
        height: 80px;
        width: 100%;
        text-indent: -9999px;
        background: url('@/assets/images/logo.jpg') no-repeat center center / contain;

      }
    }

    .app-header-nav {
      display: flex;
      padding: 0;
      margin: 0;

      li {
        margin: 0 15px;
        position: relative;

        a {
          font-size: 16px;
          color: #333;
          padding: 8px 0;
          position: relative;
          transition: color 0.3s ease;

          &:hover,
          &.active {
            color: #ff6600;
          }

          &.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #ff6600;
          }
        }
      }
    }

    .search {
      width: 280px;
      height: 40px;
      position: relative;
      border-bottom: 1px solid #e7e7e7;
      transition: all 0.3s ease;

      &:focus-within {
        border-color: #ff6600;
      }

      .icon-search {
        font-size: 18px;
        color: #999;
        position: absolute;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
      }

      input {
        width: 100%;
        height: 100%;
        padding-left: 30px;
        color: #333;
        font-size: 14px;
        background: transparent;
        border: none;
        outline: none;
      }
    }

    .cart {
      width: 50px;

      .curr {
        height: 32px;
        line-height: 32px;
        text-align: center;
        position: relative;
        display: block;

        .icon-cart {
          font-size: 22px;
        }

        em {
          font-style: normal;
          position: absolute;
          right: 0;
          top: 0;
          padding: 0 5px;
          background-color: #ff6600;
          color: #fff;
          border-radius: 1px 6px;
          line-height: 1;
          background: #ff6600;
          color: #fff;
          font-size: 12px;
          border-radius: 10px;
          font-family: Arial;
        }
      }
    }
  }

</style>
