import "regenerator-runtime";
import "./nav";
import "../styles/main.css";
import "../styles/responsive.css";
import data from "../public/DATA.json";

function getRestaurants(data) {
  let restaurantHTML = "";
  data.restaurants.forEach(function (restaurant, index) {
    // console.log(restaurant);
    restaurantHTML += `
      <div tabindex="0" class="card ${
        index === 0 && index.length % 2 !== 0 ? "box-ganjil" : ""
      }">
        <div class="img-container">
          <img class="img-res" alt="${restaurant.name}" src="${
      restaurant.pictureId
    }"/>
          <span class="card-title">${restaurant.name} - ${
      restaurant.city
    }</span>
          <span class="card-rating"><i title="ratings" class="fa fa-star"></i><span>${
            restaurant.rating
          }</span></span>
        </div>
        <div class="card-content">
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

getRestaurants(data);
