const openAbout = document.getElementById("_about");
const openHome = document.getElementById("_home");
const openProd = document.getElementById("_products");
openAbout.addEventListener("click", () => {
  window.open("./about.html", "_self");
});
openHome.addEventListener("click", () => {
  window.open("../index.html", "_self");
});
openProd.addEventListener("click", () => {
  window.open("./products.html", "_self");
});
