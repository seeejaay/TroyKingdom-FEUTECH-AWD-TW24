//HAMBURGER MENU
const burgerButton = document.getElementById("burgerButton");
const burgerIcon = document.getElementById("_hamburger");

//CHANGE THEME ICONS
const changeSmall = document.getElementById("_changeThemeConS");
const changeLarge = document.getElementById("_changeThemeConL");

//CHANGE THEME CONTAINERS
const changeThemeS = document.getElementById("_changeThemeS");
const changeThemeL = document.getElementById("_changeThemeL");
//NAVBAR ELEMENTS
const navColor = document.getElementById("_navColor");
const btnLogin = document.getElementById("_btnLogin");

//TEXT
const txtTheme = document.querySelectorAll(".txt-theme");

//BURGER ICON CHANGE
burgerButton.addEventListener("click", () => {
  if (burgerIcon.classList.contains("fa-bars")) {
    burgerIcon.classList.remove("fa-bars");
    burgerIcon.classList.add("fa-times");
    burgerIcon.style.transform = "rotate(360deg)";
  } else {
    burgerIcon.classList.remove("fa-times");
    burgerIcon.classList.add("fa-bars");
    burgerIcon.style.transform = "rotate(0deg)";
  }
});

//DISPLAY CHANGE SMALL AND CHANGE LARGE
const updateButtonVisibility = () => {
  const win = window;

  if (win.innerWidth >= 992) {
    changeSmall.style.display = "none";
    changeLarge.style.display = "block";
  } else {
    changeSmall.style.display = "block";
    changeLarge.style.display = "none";
  }
};

window.addEventListener("resize", updateButtonVisibility);
updateButtonVisibility();

//CHANGE THEME FOR SMALL SCREEN
changeSmall.addEventListener("click", () => {
  if (changeThemeS.classList.contains("fa-moon")) {
    //ICON CHANGE
    changeThemeS.classList.remove("fa-moon");
    changeThemeS.classList.add("fa-sun");

    //R0TATE ICON
    changeThemeS.style.transform = changeThemeS.classList.contains("fa-moon")
      ? "rotate(360deg)"
      : "rotate(0deg)";
    changeThemeS.style.transform = changeThemeS.classList.contains("fa-sun")
      ? "rotate(360deg)"
      : "rotate(0deg)";

    //NAVBAR
    navColor.classList.remove("bg-light");
    navColor.classList.add("bg-dark");
    navColor.classList.remove("navbar-light");
    navColor.classList.add("navbar-dark");
    btnLogin.style.color = "#d8d6d6";

    //BODY BACKGROUND
    document.body.style.backgroundColor = "#1F2327";
    document.body.style.color = "white";
    //TEXT COLOR
    txtTheme.forEach((c) => (c.style.color = "#fff"));
  } else {
    //ICON CHANGE
    changeThemeS.classList.remove("fa-sun");
    changeThemeS.classList.add("fa-moon");

    //ROTATE ICON
    changeThemeS.style.transform = changeThemeS.classList.contains("fa-moon")
      ? "rotate(360deg)"
      : "rotate(0deg)";
    changeThemeS.style.transform = changeThemeS.classList.contains("fa-sun")
      ? "rotate(360deg)"
      : "rotate(0deg)";

    //NAVBAR
    navColor.classList.remove("bg-dark");
    navColor.classList.add("bg-light");
    navColor.classList.remove("navbar-dark");
    navColor.classList.add("navbar-light");
    btnLogin.style.color = "#000";

    // BODY BACKGROUND
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    //TEXT COLOR
    txtTheme.forEach((c) => (c.style.color = "#000"));
  }
});

//CHANGE THEME FOR LARGE SCREEN
changeLarge.addEventListener("click", () => {
  if (changeThemeL.classList.contains("fa-moon")) {
    //ICON CHANGE
    changeThemeL.classList.remove("fa-moon");
    changeThemeL.classList.add("fa-sun");
    //R0TATE ICON
    changeThemeL.style.transform = changeThemeS.classList.contains("fa-sun")
      ? "rotate(360deg)"
      : "rotate(0deg)";
    changeThemeL.style.transform = changeThemeS.classList.contains("fa-moon")
      ? "rotate(360deg)"
      : "rotate(0deg)";

    //NAVBAR
    navColor.classList.remove("bg-light");
    navColor.classList.add("bg-dark");
    navColor.classList.remove("navbar-light");
    navColor.classList.add("navbar-dark");
    btnLogin.style.color = "#d8d6d6";

    //BODY BACKGROUND
    document.body.style.backgroundColor = "#1F2327";
    document.body.style.color = "white";

    //TEXT
    txtTheme.forEach((c) => (c.style.color = "#fff"));
  } else {
    //ICON CHANGE
    changeThemeL.classList.remove("fa-sun");
    changeThemeL.classList.add("fa-moon");
    //ROTATE ICON
    changeThemeL.style.transform = changeThemeS.classList.contains("fa-moon")
      ? "rotate(360deg)"
      : "rotate(0deg)";
    changeThemeL.style.transform = changeThemeS.classList.contains("fa-sun")
      ? "rotate(360deg)"
      : "rotate(0deg)";

    //NAVBAR
    navColor.classList.remove("bg-dark");
    navColor.classList.add("bg-light");
    navColor.classList.remove("navbar-dark");
    navColor.classList.add("navbar-light");
    btnLogin.style.color = "#000";

    //BODY BACKGROUND
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    //TEXT
    txtTheme.forEach((c) => (c.style.color = "#000"));
  }
});

//POPUP
document.addEventListener('DOMContentLoaded', function () {
  const signinButton = document.getElementById('_btnLogin');
  const signupButton = document.querySelector('.btn-signup');
  const signinPopup = document.getElementById('signinPopup');
  const signupPopup = document.getElementById('signupPopup');
  const signinCloseBtn = document.getElementById('signinCloseBtn');
  const signupCloseBtn = document.getElementById('signupCloseBtn');

  // SHOW SIGN-IN POPUP
  signinButton.addEventListener('click', function () {
      signinPopup.style.display = 'block';
  });

  // SHOW SIGN-UP POPUP
  signupButton.addEventListener('click', function () {
      signupPopup.style.display = 'block';
  });

  // CLOSE BUTTON FOR SIGN-IN POPUP
  signinCloseBtn.addEventListener('click', function () {
      signinPopup.style.display = 'none';
  });

  // CLOSE BUTTON FOR SIGN-UP POPUP
  signupCloseBtn.addEventListener('click', function () {
      signupPopup.style.display = 'none';
  });
});




