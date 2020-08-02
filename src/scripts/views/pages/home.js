/* eslint-disable linebreak-style */
import RestaurantSource from '../../data/restaurant-source';
import { restaurantItemTemplate } from '../templates/template-html';

const Home = {
  async render() {
    return `
    <div class="container">
      <h2 class="title-container">List Restaurant</h2>
      <section id="list-rest"></section>
    </div>
    `;
  },

  async afterRender() {
    const data = await RestaurantSource.listRestaurant();
    const listContainer = document.querySelector('#list-rest');
    const totalRest = data.restaurants.length;
    data.restaurants.forEach((restaurant, index) => {
      listContainer.innerHTML += restaurantItemTemplate(restaurant, index, totalRest);
    });
  },
};

export default Home;
