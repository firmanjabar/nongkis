import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";

fetch("DATA.json")
  .then((response) => response.json())
  .then((data) => {
    getRestaurants(data);
  });

function getRestaurants(data) {
  let restaurantHTML = "";
  data.restaurants.forEach(function (restaurant, index) {
    // console.log(restaurant);
    restaurantHTML += `
      <div tabindex="0" class="card ${
        index === 0 && index.length % 2 !== 0 ? "box-ganjil" : ""
      }">
        <div class="img-container">
          <img tabindex="0" class="img-res" alt="${restaurant.name}" src="${
      restaurant.pictureId
    }"/>
          <span tabindex="0" class="card-title">${restaurant.name} - ${
      restaurant.city
    }</span>
          <span tabindex="0" class="card-rating"><i title="ratings" class="fa fa-star"></i><span>${
            restaurant.rating
          }</span></span>
        </div>
        <div tabindex="0" class="card-content">
          <p class="card-content-title">Description :</p>
          <p class="truncate${index === 0 ? "2" : ""}">${
      restaurant.description
    }</p>
        </div>
      </div>
      `;
  });

  document.getElementById("most-fav").innerHTML = restaurantHTML;
}

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
