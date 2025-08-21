<template>
  <footer class="app_footer">
    <!-- 联系我们 -->
    <div class="contact">
      <div class="container">
        <dl>
          <dt>客户服务</dt>
          <dd><i class="icon icon-kefu"></i>在线客服</dd>
          <dd><i class="icon icon-question"></i>问题反馈</dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd><i class="icon icon-weixin"></i>公众号</dd>
          <dd><i class="icon icon-weibo"></i>微博</dd>
        </dl>
        <dl>
          <dt>下载APP</dt>
          <div class="app-download-container">
            <dd class="qrcode"><img src="@/assets/images/app_qr.jpg" alt=""></dd>
            <dd class="download">
              <span>扫描二维码</span>
              <span>立即下载APP</span>
              <a href="#">下载页面</a>
            </dd>
          </div>
        </dl>
        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">998-0000-000<small>周一至周日 9:00-21:00</small></dd>
        </dl>
      </div>
    </div>
    <!-- 其他 -->
    <div class="extra">
      <div class="container">
        <div class="slogan">
          <a href="#">
            <i class="icon icon-footer01"></i>
            <span>价格亲民</span>
          </a>
          <a href="#">
            <i class="icon icon-footer02"></i>
            <span>配送及时</span>
          </a>
          <a href="#">
            <i class="icon icon-footer03"></i>
            <span>质量保障</span>
          </a>
        </div>
        <!-- 版权信息 -->
        <div class="copyright">
          <p>
            <a href="#">关于我们</a>
            <a href="#">帮助中心</a>
            <a href="#">售后服务</a>
            <a href="#">配送验收</a>
            <a href="#">商务合作</a>
            <a href="#">搜索推荐</a>
            <a href="#">友情链接</a>
          </p>
          <p>CopyRight @ DD-MALL</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  // 定义变量
  $primary-color: #333;
  $secondary-color: #666;
  $light-color: #999;
  $accent-color: #ff6b35;
  $border-color: #eee;
  $white: #fff;
  $shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  $transition: all 0.3s ease;

  // 基础样式重置
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: $transition;
  }

  .app_footer {
    background-color: $white;
    border-top: 1px solid $border-color;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: $secondary-color;

    // 联系我们区域
    .contact {
      padding: 40px 0;
      background-color: #fafafa;

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 30px;
      }

      dl {
        // 添加竖线分隔符
        position: relative;
        padding: 0 20px;

        &:not(:first-child)::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          height: calc(100% - 20px);
          width: 1px;
          background-color: $border-color;
        }

        dt {
          font-size: 18px;
          color: $primary-color;
          margin-bottom: 20px;
          font-weight: 600;
          position: relative;
          padding-left: 10px;

          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 16px;
            background-color: $accent-color;
            border-radius: 2px;
          }
        }

        dd {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          transition: $transition;
          cursor: pointer;

          &:hover {
            color: $accent-color;
            transform: translateX(5px);
          }

          .icon {
            margin-right: 10px;
            font-size: 18px;
          }
        }

        // 二维码特殊样式
        &:nth-child(3) {
          .app-download-container {
            display: flex;
            align-items: center;
            gap:10px;
          }

          dd.qrcode {
            width: 120px;
            height: 120px;
            border: 1px solid $border-color;
            padding: 8px;
            background-color: $white;
            margin-bottom: 0;
            cursor: default;
            transform: none !important;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            &:hover {
              color: inherit;
            }
          }

          dd.download {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            transform: none !important;
            margin-bottom: 0;

            span {
              display: block;
              margin-bottom: 5px;
            }

            a {
              color: $accent-color;
              background-color: $accent-color;
              padding: 8px 15px;
              border-radius: 6px;
              color: $white;
              font-size: 12px;
              font-weight: bold;
              margin-top: 5px;

              &:hover {
                text-decoration: none;
              }
            }
          }
        }

        // 服务热线特殊样式
        &:last-child {
          dd.hotline {
            font-size: 24px;
            font-weight: 700;
            color: $accent-color;
            margin-top: 5px;
            flex-direction: column;
            align-items: flex-start;

            small {
              font-size: 14px;
              font-weight: normal;
              color: $light-color;
              margin-top: 8px;
            }

            &:hover {
              transform: none;
            }
          }
        }
      }
    }

    // 其他信息区域
    .extra {
      padding: 30px 0 20px;

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      // 服务口号
      .slogan {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 1px dashed $border-color;

        a {
          display: flex;
          align-items: center;
          color: $primary-color;

          .icon {
            font-size: 24px;
            margin-right: 10px;
            color: $accent-color;
          }

          span {
            font-size: 16px;
            font-weight: 500;
          }

          &:hover {
            color: $accent-color;
          }
        }
      }

      // 版权信息
      .copyright {
        text-align: center;

        p:first-child {
          margin-bottom: 15px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px 30px;

          a {
            color: $secondary-color;
            position: relative;

            &:not(:last-child)::after {
              content: '|';
              position: absolute;
              right: -18px;
              color: $light-color;
            }

            &:hover {
              color: $accent-color;
            }
          }
        }

        p:last-child {
          color: $light-color;
          font-size: 14px;
          padding-top: 10px;
          border-top: 1px solid $border-color;
        }
      }
    }
  }

  // 响应式调整
  @media (max-width: 768px) {
    .app_footer {
      .contact {
        padding: 30px 0;

        .container {
          grid-template-columns: 1fr 1fr;
        }

        dl {
          dt {
            font-size: 16px;
          }

          &:nth-child(3),
          &:last-child {
            grid-column: span 2;
            justify-self: center;
          }
        }
      }

      .extra {
        .slogan {
          gap: 20px;
          justify-content: flex-start;
          overflow-x: auto;
          padding-bottom: 15px;
          margin-bottom: 20px;

          a {
            white-space: nowrap;
            padding: 5px 0;
          }
        }

        .copyright {
          p:first-child {
            a {
              &:not(:last-child)::after {
                display: none;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    .app_footer {
      .contact {
        .container {
          grid-template-columns: 1fr;
        }

        dl {

          &:nth-child(3),
          &:last-child {
            grid-column: span 1;
          }
        }
      }
    }
  }
</style>