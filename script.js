document.addEventListener('DOMContentLoaded', () => {
    // ==================== 底部导航切换逻辑 (已修复) ====================
    const navButtons = document.querySelectorAll('.nav-button');
    const pages = document.querySelectorAll('.page');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 获取要显示的目标页面的ID
            const targetId = button.dataset.target;
            const targetPage = document.getElementById(targetId);

            // 关键修复：只有在目标页面确实存在的情况下才执行切换
            // 这就避免了因为找不到页面而导致整个脚本崩溃的问题
            if (targetPage) {
                // 1. 先隐藏所有的按钮和页面
                navButtons.forEach(btn => btn.classList.remove('active'));
                pages.forEach(page => page.classList.remove('active'));

                // 2. 再显示被点击的按钮和对应的页面
                button.classList.add('active');
                targetPage.classList.add('active');
            } else {
                console.error("错误：找不到ID为 " + targetId + " 的页面！");
            }
        });
    });

    // ==================== 侧边栏交互逻辑 (这部分是好的，无需改动) ====================
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
