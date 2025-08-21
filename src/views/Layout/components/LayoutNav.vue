<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="true">
          <li><a href="#"><i class="iconfont icon-user"></i>lly</a></li>
          <li>
            <el-popconfirm
              title="确定退出登录吗？"
              confirm-button-text="确定"
              cancel-button-text="取消"
            >
              <template #reference>
                <a href="#">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="#">我的订单</a></li>
          <li><a href="#">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="#">请先登录</a></li>
          <li><a href="#">帮助中心</a></li>
          <li><a href="#">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.app-topnav {
  background-color: #333;
  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 53px;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        height: 53px;
        line-height: 53px;
        transition: all 0.3s ease;
        position: relative;

        i {
          font-size:14px;
          margin-right: 2px;
        }

        &:hover {
          color: #fff;
          background-color: #555;
        }

        ~li {
          a {
            border-left: 1px solid #444;
          }
        }
      }
    }
  }
}
// .app-topnav {
//   background-color: #333;
//   ul {
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
//     height: 53px;
//     li {
//       a {
//         padding: 0 15px;
//         color: #cdcdcd;
//         line-height: 1;
//         display: inline-block;

//         i {
//           font-size:14px;
//           margin-right: 2px;
//         }

//         &:hover {
//           color:aqua
//         }

//         ~li {
//           a {
//             border-left: 2px solid #666;
//           }
//         }
//       }
//     }

//   }
// }

</style>