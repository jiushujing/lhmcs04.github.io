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

    const closeSidebar = () => {
        appContainer.classList.remove('sidebar-open');
    };

    if (openSidebarBtn) {
        openSidebarBtn.addEventListener('click', () => {
            appContainer.classList.add('sidebar-open');
        });
    }
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', closeSidebar);
    }
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // ==================== 新增：联系人页面 Tab 切换逻辑 ====================
    const contactFilterItems = document.querySelectorAll('.filter-item');
    const contactContentPanes = document.querySelectorAll('.contacts-content-pane');

    contactFilterItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetPaneId = item.dataset.target;

            // 1. 移除所有按钮的激活状态
            contactFilterItems.forEach(btn => btn.classList.remove('active'));
            // 2. 移除所有内容板块的激活状态 (隐藏它们)
            contactContentPanes.forEach(pane => pane.classList.remove('active'));

            // 3. 给当前点击的按钮添加激活状态
            item.classList.add('active');
            // 4. 给对应的内筒板块添加激活状态 (显示它)
            document.getElementById(targetPaneId).classList.add('active');
        });
    });
});
