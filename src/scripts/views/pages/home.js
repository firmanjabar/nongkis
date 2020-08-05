import RestaurantSource from '../../data/restaurant-source';
import { restaurantItemTemplate } from '../templates/template-html';
import Spinner from '../templates/spinner-html';

const Home = {
  async render() {
    return `
    <div class="container">
      <div id="loading"></div>
      <div class="main">
        <h2 class="title-container">List Restaurant</h2>
        <section id="list-rest"></section>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.main');
    loading.innerHTML = Spinner();
    main.style.display = 'none';
    const listContainer = document.querySelector('#list-rest');

    try {
      const data = await RestaurantSource.listRestaurant();
      const totalRest = data.restaurants.length;
      data.restaurants.forEach((restaurant, index) => {
        listContainer.innerHTML += restaurantItemTemplate(restaurant, index, totalRest);
      });
      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (err) {
      main.style.display = 'block';
      loading.style.display = 'none';
      listContainer.innerHTML = `Error: ${err}, swipe up to refresh!`;
    }
  },
};

export default Home;
