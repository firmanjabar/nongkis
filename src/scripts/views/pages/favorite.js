import FavRestaurantIdb from '../../data/restaurant-idb';
import { restaurantItemTemplate } from '../templates/template-html';

const Favorite = {
  async render() {
    return `
    <div class="container">
      <h2 class="title-container">Your Favorite Cafe / Restaurant</h2>
      <section id="list-rest"></section>
      </div>
    </div>
      `;
  },

  async afterRender() {
    const data = await FavRestaurantIdb.getAllRestaurants();
    const listContainer = document.querySelector('#list-rest');
    if (data.length === 0) {
      listContainer.innerHTML = `
        You don't have any Favorite Cafe or Restaurant
      `;
    }
    const totalRest = data.length;
    data.forEach((restaurant, index) => {
      listContainer.innerHTML += restaurantItemTemplate(restaurant, index, totalRest);
    });
  },
};

export default Favorite;
