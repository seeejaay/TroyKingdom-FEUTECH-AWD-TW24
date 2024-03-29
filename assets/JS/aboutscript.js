const openProd = document.getElementById("_products");
const openHome = document.getElementById("_home");
openProd.addEventListener("click", () => {
  window.open("./products.html", "_self");
});

openHome.addEventListener("click", () => {
  window.open("../index.html", "_self");
});
