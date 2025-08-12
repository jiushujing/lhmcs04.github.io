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

    // 【第一步调试】: 检查脚本是否运行并且找到了按钮
    if (openSidebarBtn) {
        console.log("成功找到ID为 'open-sidebar-btn' 的元素。");
        // 【可视化提示】: 给头像区域加一个绿色的边框。
        // 如果页面加载后看到这个边框，说明JS运行正常且元素已找到。
        openSidebarBtn.style.border = "2px solid green";
    } else {
        // 如果没找到，这是个严重问题，在控制台报错
        console.error("错误：没有找到ID为 'open-sidebar-btn' 的元素！请检查HTML中的ID是否拼写正确。");
    }

    const openSidebar = () => {
        appContainer.classList.add('sidebar-open');
    };

    const closeSidebar = () => {
        appContainer.classList.remove('sidebar-open');
    };

    // 确保按钮存在后再绑定事件
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
