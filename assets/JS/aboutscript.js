const openProd = document.getElementById("_products");
const openHome = document.getElementById("_home");
const openDesc = document.getElementById("_description");
openProd.addEventListener("click", () => {
  window.open("./products.html", "_self");
});

openHome.addEventListener("click", () => {
  window.open("../index.html", "_self");
});

openDesc.addEventListener("click", () => {
  window.open("./info.html", "_self");
});