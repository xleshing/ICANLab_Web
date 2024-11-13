// 節流函數
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// 原始的 toggle 函數
function toggle() {
    const sidebar = document.getElementById("sidebar");
    const toggle_button = document.querySelector("#toggle-button");
    const open = toggle_button.querySelector("#open");
    const close = toggle_button.querySelector("#close");
    const container = document.querySelector(".container");

    // 切換側邊欄的顯示狀態
    sidebar.classList.toggle("collapsed");

    // 切換按鈕的樣式類別
    toggle_button.classList.toggle("toggled");

    // 檢查是否已經是 "toggled" 狀態
    if (toggle_button.classList.contains("toggled")) {
        open.style.opacity = "0"; // 隱藏 "☰"
        setTimeout(function () {
            close.style.opacity = "1"; // 顯示 "×"
        }, 250);
    } else {
        close.style.opacity = "0"; // 隱藏 "×"
        setTimeout(function () {
            open.style.opacity = "1"; // 顯示 "☰"
        }, 250);
    }

    // container隨著sidebar移動
    if (sidebar.classList.contains("collapsed")) {
        container.style.marginLeft = "0";
    } else {
        container.style.marginLeft = "250px";
    }
}

// 使用節流來包裝 toggle 函數
const toggleSidebar = throttle(toggle, 400);
