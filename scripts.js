// Navbar toggle
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();

// Popup
function openPopup(title, desc) {
  document.getElementById("popup-title").textContent = title;
  document.getElementById("popup-desc").textContent = desc;
  document.getElementById("popup").style.display = "flex";
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
