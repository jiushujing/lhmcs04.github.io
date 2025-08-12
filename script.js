document.addEventListener('DOMContentLoaded', () => {
    // ==================== 底部导航切换逻辑 ====================
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

    // ==================== 侧边栏交互逻辑 ====================
    const appContainer = document.querySelector('.app-container');
    const openSidebarBtn = document.getElementById('open-sidebar-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');

    // 打开侧边栏
    if (openSidebarBtn) {
        openSidebarBtn.addEventListener('click', () => {
            appContainer.classList.add('sidebar-open');
        });
    }

    // 关闭侧边栏的两种方式：点击关闭按钮 或 点击遮罩层
    const closeSidebar = () => {
        appContainer.classList.remove('sidebar-open');
    };

    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', closeSidebar);
    }
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
});
