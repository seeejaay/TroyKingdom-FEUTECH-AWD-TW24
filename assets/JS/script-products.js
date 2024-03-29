const openAbout = document.getElementById("_about");
const openHome = document.getElementById("_home");
openAbout.addEventListener("click", () => {
  window.open("./about.html", "_self");
});
openHome.addEventListener("click", () => {
  window.open("../index.html", "_self");
});
