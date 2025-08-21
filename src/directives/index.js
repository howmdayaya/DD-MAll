export const lazyPlugin = {
  install(app) {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver
    app.directive('img-lazy', {
      mounted(el, binding) {
        // 存储真实图片地址
        el.dataset.src = binding.value;
        // 设置占位符（透明像素）
        el.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

        // 创建IntersectionObserver实例
        const intersectionObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // 元素进入视口，加载图片
              el.src = el.dataset.src;
              // 加载完成后停止观察
              intersectionObserver.unobserve(el);
              // 移除data属性
              delete el.dataset.src;
            }
          });
        }, {
          // 当元素进入视口10%时开始加载
          threshold: 0.1
        });

        // 开始观察目标元素
        intersectionObserver.observe(el);

        // 存储observer实例，用于解绑时清理
        el._intersectionObserver = intersectionObserver;
      },
      // 解绑时停止观察，避免内存泄漏
      unmounted(el) {
        if (el._intersectionObserver) {
          el._intersectionObserver.unobserve(el);
        }
      }
    });
  }
}