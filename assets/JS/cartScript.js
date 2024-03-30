const cartL = document.getElementById("_btnCartL");
const cartS = document.getElementById("_btnCartS");

const cartWindow = document.getElementById("_cartWindow");

cartL.addEventListener("click", () => {
  if (cartWindow.classList.contains("active")) {
    cartWindow.classList.remove("active");
  } else {
    cartWindow.classList.add("active");
  }
});
cartS.addEventListener("click", () => {
  if (cartWindow.classList.contains("active")) {
    cartWindow.classList.remove("active");
  } else {
    cartWindow.classList.add("active");
  }
});
