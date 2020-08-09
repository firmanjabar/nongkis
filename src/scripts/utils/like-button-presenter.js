import FavRestaurantIdb from '../data/restaurant-idb';
import {
  createLikeRestButtonTemp,
  createUnlikeRestButtonTemp,
} from '../views/templates/button-html';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = data.restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestButtonTemp();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestButtonTemp();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
