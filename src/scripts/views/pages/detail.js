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
