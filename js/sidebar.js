function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const button = document.querySelector(".toggle-button");

    // 切換側邊欄的顯示狀態
    sidebar.classList.toggle("collapsed");

    // 切換按鈕的樣式類別
    button.classList.toggle("toggled");
}
