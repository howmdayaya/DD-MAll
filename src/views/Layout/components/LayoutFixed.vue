<script setup>
import { useCategoryStore } from '@/stores'
const categoryStore = useCategoryStore()

</script>

<template>
  <div class="app-header-sticky">
    <div class="container">
      <router-link class="logo" to="/"></router-link>
      <!-- 导航区域 -->
      <ul class="app-header-nav">
        <li v-for="item in categoryStore.categoryList" :key="item.id" class="home">
          <router-link active-class="active" :to="`/category/${item.id}`">
              {{ item.name }}
            </router-link>
        </li>
      </ul>

      <div class="right">
        <router-link to="/">品牌</router-link>
        <router-link to="/">专题</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 基础样式变量，与整体页面风格保持一致， 应该很像了
$primary-color: #ff6600;
$text-color: #333;
$text-secondary: #666;
$border-color: #e7e7e7;
$bg-color: #fff;
$hover-transition: all 0.3s ease;

// 添加滚动动画关键帧
@keyframes showSticky {
  from { opacity: 0; transform: translateY(-100%); }
  to { opacity: 1; transform: translateY(0); }

}

.app-header-sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100; // 确保在其他内容之上
  background-color: $bg-color;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid $border-color;

  // 初始隐藏状态
  opacity: 0;
  transform: translateY(-100%);
  // 绑定滚动动画
  animation: showSticky 0.3s ease-out forwards;
  animation-timeline: scroll(root block);
  // 当滚动超过100px时开始显示（可根据实际header高度调整）
  animation-range-start: 100px;
  animation-range-end: 150px;


  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  // Logo样式
  .logo {
    width: 80px;
    height: 60px;
    display: block;
    background: url('@/assets/images/logo.jpg') no-repeat center center / contain; // 使用与Header相同的logo
    text-indent: -9999px; // 隐藏文本
  }

  // 导航区域样式
  .app-header-nav {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 15px;

      &.home {
        margin-left: 0;
      }

      a {
        color: $text-color;
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
        padding: 8px 0;
        position: relative;
        transition: $hover-transition;

        &:hover {
          color: $primary-color;
        }

        &.active {
          color: $primary-color;

          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: $primary-color;
          }
        }
      }
    }
  }

  // 右侧链接区域
  .right {
    display: flex;
    gap: 20px;

    a {
      color: $text-secondary;
      font-size: 14px;
      text-decoration: none;
      transition: $hover-transition;

      &:hover {
        color: $primary-color;
      }
    }
  }
}

</style>