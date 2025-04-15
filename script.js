function showSidebar() {
    const sidebar = document.querySelector('.hamburgur_list')
    if (sidebar.style.display === "none") {
        sidebar.style.display = "flex"
    }
    else {
        sidebar.style.display = "none"
    }
}