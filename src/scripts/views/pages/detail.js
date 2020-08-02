/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { restaurantDetailTemplate } from '../templates/template-html';

const Detail = {
  async render() {
    return `
    <div class="container">
      <h2 class="title-container">Detail Restaurant</h2>
      <section id="detail-rest"></section>
      <div class="form-review">
        <form>
          <div class="mb-3">
            <label for="inputName" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputName">
          </div>
          <div class="mb-3">
            <label for="inputReview" class="form-label">Review</label>
            <input type="text" class="form-control" id="inputReview">
          </div>
          <button id="submit-review" type="submit" class="btn2">Submit</button>
        </form>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('#detail-rest');
    detailContainer.innerHTML += restaurantDetailTemplate(data.restaurant);
  },
};

export default Detail;
