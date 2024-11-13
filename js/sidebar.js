function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const toggle_button = document.querySelector("#toggle-button");
    const open = toggle_button.querySelector("#open");
    const close = toggle_button.querySelector("#close");
    const container = document.querySelector(".container");

    // 切換側邊欄的顯示狀態
    sidebar.classList.toggle("collapsed");

    // 切換按鈕的樣式類別
    setTimeout(function() {
        toggle_button.classList.toggle("toggled");
    }, 500);
    
    // 檢查是否已經是 "toggled" 狀態
    if (toggle_button.classList.contains("toggled")) {
        
        open.style.opacity = "0"; // 隱藏 "×"
        
        
        close.style.opacity = "1"; // 顯示 "☰"
        
    } else if (!toggle_button.classList.contains("toggled")) {
        
        close.style.opacity = "0"; // 隱藏 "☰"
        
        
        open.style.opacity = "1"; // 顯示 "×"
        
    }

    // container隨著sidebar移動
    if (sidebar.classList.contains("collapsed")) {
        container.style.marginLeft = "0";
    } else {
        container.style.marginLeft = "250px";
    }

}
