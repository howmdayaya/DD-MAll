<script setup>
import { useCategoryStore } from '@/stores';

const categoryStore = useCategoryStore();

</script>

<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in categoryStore.categoryList" :key="item.id" class="menu-item">
        <div class="menu-links">
          <router-link to="/" class="main-link">{{ item.name }}</router-link>
          <router-link v-for="i in item.children.slice(0, 2)" :key="i.id" to="/" class="sub-link">{{ i.name }}</router-link>
        </div>
        
        <!-- 右侧弹层（高度小于左侧） -->
        <div class="layer">
          <h4>分类推荐 
            <small>根据您的购买或浏览记录推荐</small>
          </h4>
          <ul class="product-list">
            <li v-for="i in item.goods" :key="i.id" class="product-item">
              <router-link to="/" class="product-link">
                <img :src="i.picture" :alt="i.name" />
                <div class="info">
                  <p class="name ellipsis-2">{{ i.name }}</p>
                  <p class="desc ellipsis">{{ i.desc }}</p>
                  <p class="price"><i>￥</i>{{ i.price }}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.home-category {
  width: 220px;
  background-color: rgba(51, 51, 51, 0.8);
  padding: 10px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10; // 提高层级确保覆盖轮播图
}

.menu {
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 410px;
  padding: 0;
  margin: 0;
  
  .menu-item {
    position: relative;
    padding: 0;
    margin: 0;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #444;
    }
    
    .menu-links {
      padding: 14px 20px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    
    .main-link {
      color: #fff;
      font-size: 15px;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: #ff4400;
      }
    }
    
    .sub-link {
      color: #ccc;
      font-size: 12px;
      text-decoration: none;
      padding: 2px 5px;
      border-radius: 3px;
      transition: all 0.3s ease;
      
      &:hover {
        color: #fff;
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
    
    // 右侧弹层（高度小于左侧）
    .layer {
      position: absolute;
      left: 100%;
      top: 50%; // 垂直居中对齐
      z-index: 100;
      width: 1000px;
      height: 300px;
      padding: 25px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
      display: none;
      transform-origin: left center;
      transform: translate(0, -50%) scaleX(0.95); // 垂直居中
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: none;
      overflow-y: auto; // 内容超出时显示滚动条
      
      // 滚动条美化
      &::-webkit-scrollbar {
        width: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #ddd;
        border-radius: 3px;
      }
      
      h4 {
        margin: 0 0 20px;
        font-size: 18px;
        color: #333;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 15px;
        border-bottom: 1px solid #f5f5f5;
        
        small {
          font-size: 13px;
          color: #999;
          font-weight: normal;
        }
      }
      
      .product-list {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin: 0 -12px;
      }
      
      .product-item {
        width: 20%;
        padding: 0 12px;
        margin-bottom: 20px;
      }
      
      .product-link {
        display: block;
        text-decoration: none;
        color: inherit;
        transition: transform 0.3s ease;
        
        &:hover {
          transform: translateY(-3px);
        }
        
        img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 6px;
          margin-bottom: 10px;
          background-color: #f5f5f5;
          transition: all 0.3s ease;
        }
        
        &:hover img {
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
      }
      
      .info {
        padding: 0 5px;
      }
      
      .name {
        font-size: 14px;
        color: #333;
        margin: 0 0 6px;
        line-height: 1.5;
        height: 3em;
        overflow: hidden;
      }
      
      .desc {
        font-size: 12px;
        color: #999;
        margin: 0 0 6px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .price {
        font-size: 15px;
        color: #ff4400;
        margin: 0;
        font-weight: 500;
        
        i {
          font-style: normal;
          font-size: 13px;
        }
      }
    }
    
    // 悬停显示弹层
    &:hover .layer {
      display: block;
      transform: translate(0, -50%) scaleX(1); // 保持垂直居中
      opacity: 1;
      pointer-events: auto;
    }
  }
}

// 响应式优化
@media (max-width: 1200px) {
  .menu .menu-item .layer {
    width: 650px;
  }
  
  .product-item {
    width: 25% !important;
  }
}

@media (max-width: 992px) {
  .home-category {
    width: 100%;
  }
  
  .menu {
    flex-direction: row;
    flex-wrap: wrap;
    
    .menu-item {
      flex: 1 0 33.333%;
      text-align: center;
      
      .layer {
        left: 0;
        top: 100%;
        width: 100%;
        max-height: 400px; // 固定最大高度
        transform: translate(0, 0) scaleY(0.95);
      }
    }
  }
}

@media (max-width: 768px) {
  .menu .menu-item {
    flex: 1 0 50%;
  }
  
  .product-item {
    width: 33.333% !important;
  }
}

@media (max-width: 576px) {
  .menu .menu-item {
    flex: 1 0 100%;
  }
  
  .product-item {
    width: 50% !important;
  }
  
  .menu .menu-item .menu-links {
    padding: 12px 15px;
  }
}

// 通用省略号样式
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ellipsis-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>