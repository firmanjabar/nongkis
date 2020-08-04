/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { restaurantDetailTemplate } from '../templates/template-html';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div class="container">
      <h2 class="title-container">Detail Restaurant</h2>
      <section id="detail-rest"></section>
      <div class="like" id="likeButtonContainer"></div>
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

    const btnSubmit = document.querySelector('#submit-review');
    const reviewContainer = document.querySelector('.detail-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      data,
    });

    function doPosting(name, review) {
      const dataInput = {
        id: url.id,
        name,
        review,
      };
      RestaurantSource.postRestaurant(dataInput);

      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date().toLocaleDateString('id-ID', options);
      const newReview = `
      <div class="detail-review-item">
        <div class="review-header">
          <p class="review-name"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em;"></i>&nbsp;${name}</p>
          <p class="review-date">${date}</p>
        </div>
        <div class="review-body">
          ${review}
        </div>
      </div>
      `;
      reviewContainer.innerHTML += newReview;
    }

    btnSubmit.addEventListener('click', () => {
      if (nameInput.value === '' || reviewInput.value === '') {
        // eslint-disable-next-line no-alert
        alert('Inputan tidak boleh ada yang kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        doPosting(nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;
