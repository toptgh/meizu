$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
    loop: true, // 无限轮播
    speed: 300, // 轮播速度
    autoplay: {
      delay: 5000, // 3秒轮播一次
      disableOnInteraction: false, // 在点击之后可以继续实现轮播
    },
    pagination: {
      el: '.swiper-pagination', // 让小圆点显示
      clickable: true, // 实现小圆点点击
    },
  });
});
