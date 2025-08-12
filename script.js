document.addEventListener('DOMContentLoaded', () => {
    // --- 底部导航栏切换功能 (保持不变) ---
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

    // --- 新增：侧边栏滑动功能 ---
    const appContainer = document.querySelector('.app-container');
    const openSidebarBtn = document.getElementById('open-sidebar-btn');
    const closeSidebarBtn = document.getElementById('sidebar-close-btn');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');

    // 打开侧边栏
    const openSidebar = () => {
        appContainer.classList.add('sidebar-open');
    };

    // 关闭侧边栏
    const closeSidebar = () => {
        appContainer.classList.remove('sidebar-open');
    };

    // 绑定事件
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
