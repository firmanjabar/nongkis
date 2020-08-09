import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { restaurantDetailTemplate } from '../templates/template-html';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import PostReview from '../../utils/post-review';
import Spinner from '../templates/spinner-html';
import FavRestaurantIdb from '../../data/restaurant-idb';

const Detail = {
  async render() {
    return `
      <div class="container">
      <div id="loading"></div>
      <div class="main">
        <h2 class="title-container">Detail Restaurant</h2>
        <section id="detail-rest"></section>
        <div class="like" id="likeButtonContainer"></div>
        <div class="form-review">
          <form>
            <div class="mb-3">
              <label for="inputName" class="form-label">Name</label>
              <input name="inputName" type="text" class="form-control" id="inputName">
            </div>
            <div class="mb-3">
              <label for="inputReview" class="form-label">Review</label>
              <input name="inputReview" type="text" class="form-control" id="inputReview">
            </div>
            <button id="submit-review" type="submit" class="btn2">Submit</button>
          </form>
        </div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector('#detail-rest');
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.main');
    loading.innerHTML = Spinner();
    main.style.display = 'none';

    try {
      const data = await RestaurantSource.detailRestaurant(url.id);
      detailContainer.innerHTML += restaurantDetailTemplate(data.restaurant);

      await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavRestaurantIdb,
        data,
      });

      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (err) {
      detailContainer.innerHTML = `Error: ${err}, swipe up to refresh!`;
      main.style.display = 'block';
      loading.style.display = 'none';
    }

    const btnSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' || reviewInput.value === '') {
        // eslint-disable-next-line no-alert
        alert('Inputan tidak boleh ada yang kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        PostReview(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;
