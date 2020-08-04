/* eslint-disable linebreak-style */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
import CONFIG from '../../global/config';

const restaurantItemTemplate = (restaurant, index, lastIndex) => {
  const firstBox = (numbIndex) => numbIndex === 0 && lastIndex % 3 !== 0;

  return `
  <div class="card ${firstBox(index) ? 'box-ganjil' : ''}">
    <a href="#/detail/${restaurant.id}">
      <div class="img-container">
        <img class="img-res" alt="${restaurant.name}" src="${
    CONFIG.BASE_IMAGE_URL + restaurant.pictureId
  }" crossorigin="anonymous"/>
        <span class="card-title">${restaurant.name} - ${restaurant.city}</span>
        <span class="card-rating">
          <i title="ratings" class="fa fa-star"></i>
          <span>${restaurant.rating}</span>
        </span>
      </div>
      <div class="card-content">
          <p class="card-content-title">Description :</p>
          <p class="truncate${firstBox(index) ? '2' : ''}">${restaurant.description}</p>
      </div>
    </a>
  </div>
  `;
};

const restaurantDetailTemplate = (detail) => `
  <div class="detail">
    <div>
      <div>
        <img class="img-res2" alt="${detail.name}" src="${
  CONFIG.BASE_IMAGE_URL + detail.pictureId
}" crossorigin="anonymous"/>
      </div>
    </div>
    <ul class="detail-info">
      <li><i title="restaurant" class="fa fa-store"></i>&nbsp;&nbsp;${detail.name}</li>
      <li><i title="address" class="fa fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;${
        detail.address
      }, ${detail.city}</li>
      <li><i title="ratings" class="fa fa-star"></i>&nbsp;&nbsp;${detail.rating}</li>
      <li><p class="truncate2">Description: ${detail.description}</p></li>
      <li>${detail.categories
        .map(
          (category) => `
            <span class="category">${category.name}</span>
          `,
        )
        .join('')}
      </li>
    </ul>
    <h3>Menu</h3>
    <div class="detail-menu grid-2">
      <div class="detail-food">
        <h4>Food</h4>
        <ul>
          ${detail.menus.foods
            .map(
              (food) => `
                <li><p>${food.name}</p></li>
              `,
            )
            .join('')}
        <ul>
      </div>
      <div class="detail-drink">
        <h4>Drink</h4>
        <ul>
          ${detail.menus.drinks
            .map(
              (drink) => `
                <li><p>${drink.name}</p></li>
              `,
            )
            .join('')}
        <ul>
      </div>
    </div>
    <h3 class="title-review">Reviews</h3>
    <div class="detail-review grid-3">
    ${detail.consumerReviews
      .map(
        (review) =>
          `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em;"></i>&nbsp;${review.name}</p>
              <p class="review-date">${review.date}</p>
            </div>
            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `,
      )
      .join('')}
    </div>
  </div>
`;

export { restaurantItemTemplate, restaurantDetailTemplate };
