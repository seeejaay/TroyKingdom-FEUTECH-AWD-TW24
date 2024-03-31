const openAbout = document.getElementById("_about");
const openHome = document.getElementById("_home");
openAbout.addEventListener("click", () => {
  window.open("./about.html", "_self");
});
openHome.addEventListener("click", () => {
  window.open("../index.html", "_self");
});

window.onload = function() {
  var newArrivalsDiv = document.getElementById('newArrivalsLink');
  newArrivalsDiv.style.cursor = 'pointer'; 
  newArrivalsDiv.addEventListener('click', function() {
    window.location.href = '#newarrivals'; 
  });

  var bestSellersH5 = document.getElementById('bestSellersLink');
  bestSellersH5.style.cursor = 'pointer'; 
  bestSellersH5.addEventListener('click', function() {
    window.location.href = '#bestsellers'; 
  });

  var categoriesH5 = document.getElementById('categoriesLink');
  categoriesH5.style.cursor = 'pointer'; 
  categoriesH5.addEventListener('click', function() {
    window.location.href = '#categories'; 
  });

  var specialsH5 = document.getElementById('specialsLink');
  specialsH5.style.cursor = 'pointer'; 
  specialsH5.addEventListener('click', function() {
    window.location.href = '#specials'; 
  });
};