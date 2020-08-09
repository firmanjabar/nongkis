import { itActsAsFavoriteRestaurantModel } from './contract/favRestaurantContract';
import FavRestaurantIdb from '../src/scripts/data/restaurant-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavRestaurantIdb);
});
