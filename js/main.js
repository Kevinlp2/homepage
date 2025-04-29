// 添加简单的交互功能
// document.querySelector('.theme-switch').addEventListener('click', () => {
//   document.body.classList.toggle('light-theme');
//   // 可以在此添加更多主题切换逻辑
// });

// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// 获取所有导航链接
const navLinks = document.querySelectorAll('nav a');

// 添加点击事件监听器
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // 移除所有链接的 active 类
    navLinks.forEach(link => link.classList.remove('active'));

    // 为当前点击的链接添加 active 类
    this.classList.add('active');
  });
});

// 默认选中首页
document.querySelector('nav a').classList.add('active');