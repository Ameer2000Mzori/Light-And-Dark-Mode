import "./style.css";
import menubar from "./asset/menubar.png";
import closebar from "./asset/closebar.png";
import lightLogo from "./asset/lightModelogo.svg";
import darkLogo from "./asset/darkModelogo.svg";
import darkBoard from "./asset/darkModeboard.svg";
import lightBoard from "./asset/lightModeboard.svg";
import darkStatus from "./asset/darkModestatus.svg";
import lightStatus from "./asset/lightModestatus.svg";
import darkWeb from "./asset/darkModeweb.svg";
import lightWeb from "./asset/lightModeweb.svg";

const btnWrap = document.getElementsByClassName("btn-wrap")[0];
const navbrandimg = document.getElementsByClassName("nav-brand-img")[0];

// light and dark mode
const toggleSwitch = document.getElementById("box-check");
const switcherWrapper = document.getElementsByClassName("switcher-wrapper")[0];
const btnImg = document.getElementsByClassName("btn-img")[0];

btnImg.src = menubar;

const img1 = document.getElementsByClassName("img-1")[0];
const img2 = document.getElementsByClassName("img-2")[0];
const img3 = document.getElementsByClassName("img-3")[0];
img1.src = lightBoard;
img2.src = lightStatus;
img3.src = lightWeb;
function imgesChange(color) {
  if (color === "light") {
    img1.src = lightBoard;
    img2.src = lightStatus;
    img3.src = lightWeb;
    navbrandimg.src = lightLogo;
  } else {
    img1.src = darkStatus;
    img2.src = darkBoard;
    img3.src = darkWeb;
    navbrandimg.src = darkLogo;
  }
}

function lightMode() {
  document.documentElement.setAttribute("data-theme", "light");
  switcherWrapper.children[0].textContent = "Light Mode";
  switcherWrapper.children[1].style.color = "black";
  switcherWrapper.children[0].style.color = "black";
  switcherWrapper.children[1].classList.replace("fa-moon", "fa-sun");
  imgesChange("light");
}

function darkMode() {
  document.documentElement.setAttribute("data-theme", "dark");
  switcherWrapper.children[0].textContent = "Dark Mode";
  switcherWrapper.children[1].classList.replace("fa-sun", "fa-moon");
  switcherWrapper.children[1].style.color = "#ffffff";
  switcherWrapper.children[0].style.color = "#ffffff";
  imgesChange("dark");
}

toggleSwitch.addEventListener("change", (event) => {
  console.log(event.target.checked);
  if (event.target.checked) {
    darkMode();
  } else {
    lightMode();
  }
});

// this is navbar
navbrandimg.src = lightLogo;
btnImg.src = menubar;
const navLinks = document.getElementsByClassName("nav-links")[0];
btnWrap.addEventListener("click", () => {
  if (!navLinks.classList.contains("active")) {
    navLinks.classList.add("active");
    switcherWrapper.classList.add("active");
    btnImg.src = closebar;
  } else {
    navLinks.classList.remove("active");
    btnImg.src = menubar;
    switcherWrapper.classList.remove("active");
  }
});
