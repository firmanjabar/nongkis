/* eslint-disable linebreak-style */
import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
