// 防抖函數
function debounce(func, delay) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, arguments);
        }, delay);
    };
}

// 修改後的toggleSidebar函數
function toggleSidebar() {
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
            open.style.opacity = "0"; // 隱藏 "×"
        setTimeout(function() {
            close.style.opacity = "1"; // 顯示 "☰"
        }, 250);
    } else if (!toggle_button.classList.contains("toggled")) {
            close.style.opacity = "0"; // 隱藏 "☰"
        setTimeout(function() {
            open.style.opacity = "1"; // 顯示 "×"
        }, 250);
    }

    // container隨著sidebar移動
    if (sidebar.classList.contains("collapsed")) {
        container.style.marginLeft = "0";
    } else {
        container.style.marginLeft = "250px";
    }
}

// 將toggleSidebar包裝為防抖函數
const debouncedToggleSidebar = debounce(toggleSidebar, 300);

// 綁定到按鈕點擊事件
document.querySelector("#toggle-button").addEventListener("click", debouncedToggleSidebar);
