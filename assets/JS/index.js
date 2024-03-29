const openAbt = document.getElementById("_about");
const openHome = document.getElementById("_home");
const openProd = document.getElementById("_products");
openAbt.addEventListener("click", () => {
  window.open("./Pages/about.html", "_self");
});
openHome.addEventListener("click", () => {
  window.open("../index.html", "_self");
});
openProd.addEventListener("click", () => {
  window.open("./Pages/products.html", "_self");
});
