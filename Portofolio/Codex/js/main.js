const navItems = document.querySelector(".nav_items");
const openNavBtn = document.querySelector("#open_nav-btn");
const closeNavBtn = document.querySelector("#close_nav-btn");

// Buka menu dropdown navigasi
const openNav = () => {
  navItems.style.display = "flex"; // Mengubah display menjadi "flex"
  openNavBtn.style.display = "none"; // Sembunyikan tombol buka
  closeNavBtn.style.display = "inline-block"; // Tampilkan tombol tutup
};

// Tutup menu dropdown navigasi
const closeNav = () => {
  navItems.style.display = "none"; // Sembunyikan menu navigasi
  openNavBtn.style.display = "inline-block"; // Tampilkan tombol buka
  closeNavBtn.style.display = "none"; // Sembunyikan tombol tutup
};

openNavBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);
