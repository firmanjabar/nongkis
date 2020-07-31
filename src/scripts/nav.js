document.querySelector(".menu").addEventListener("click", function () {
  document.querySelector(".nav-list").classList.toggle("nav-list-block");
});

const toggleSwitch = document.querySelector("#dark-mode");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
}

function switchTheme(e) {
  if (
    e.target.classList.value === "light" ||
    e.path[1].classList.value === "light"
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
    e.target.classList.remove("light");
    e.target.classList.add("dark");
    e.path[1].classList.remove("light");
    e.path[1].classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    e.target.classList.remove("dark");
    e.target.classList.add("light");
    e.path[1].classList.remove("dark");
    e.path[1].classList.add("light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("click", switchTheme);
