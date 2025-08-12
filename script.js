document.addEventListener('DOMContentLoaded', () => {
    // --- 底部导航栏切换功能 ---
    const navButtons = document.querySelectorAll('.nav-button');
    const pages = document.querySelectorAll('.page');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            navButtons.forEach(btn => btn.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // --- 侧边栏滑动功能 ---
    const appContainer = document.querySelector('.app-container');
    const openSidebarBtn = document.getElementById('open-sidebar-btn');
    const closeSidebarBtn = document.getElementById('sidebar-close-btn');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');

    // 打开侧边栏函数
    const openSidebar = () => {
        if (appContainer) {
            appContainer.classList.add('sidebar-open');
        }
    };

    // 关闭侧边栏函数
    const closeSidebar = () => {
        if (appContainer) {
            appContainer.classList.remove('sidebar-open');
        }
    };

    // 关键：为各个元素绑定点击事件
    // 确保按钮存在后再绑定，防止因元素未找到而报错
    if (openSidebarBtn) {
        openSidebarBtn.addEventListener('click', openSidebar);
    }
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', closeSidebar);
    }
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
});
