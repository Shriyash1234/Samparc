const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");

function openMenu() {
  sidebar.style.display = "flex";
  sidebar.style.animation = "";
  sidebar.style.animation = "sidebarIn 1s 0s forwards";
}

function closeMenu() {
  sidebar.style.animation = "";
  sidebar.style.animation = "sidebarOut 1s 0s forwards";
  setTimeout(close, 1200);
}

function close() {
  sidebar.style.display = "none";
}

menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
