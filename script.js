document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const pages = document.querySelectorAll('.page');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 获取目标页面的ID
            const targetId = button.dataset.target;
            
            // 移除所有按钮和页面的 'active' 类
            navButtons.forEach(btn => btn.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));

            // 为被点击的按钮和对应的页面添加 'active' 类
            button.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });
});