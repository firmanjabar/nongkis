import RestaurantSource from '../data/restaurant-source';

const PostReview = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };
  RestaurantSource.postRestaurant(dataInput);

  const reviewContainer = document.querySelector('.detail-review');
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
};

export default PostReview;
