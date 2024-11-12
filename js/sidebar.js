function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const toggle_button = document.querySelector("#toggle-button");
    const container = document.querySelector(".container");

    // 切換側邊欄的顯示狀態
    sidebar.classList.toggle("collapsed");

    // 切換按鈕的樣式類別
    toggle_button.classList.toggle("toggled");

    // 切換按鈕圖示
    if (toggle_button.classList.contains("toggled")) {
        toggle_button.textContent = "☰"; // 側邊欄展開時顯示關閉圖示
    } else {
        toggle_button.textContent = "×"; // 側邊欄收起時顯示打開圖示
    }

    // 調整 container 的 margin
    if (sidebar.classList.contains("collapsed")) {
        container.style.marginLeft = "0";
    } else {
        container.style.marginLeft = "250px";
    }
}
