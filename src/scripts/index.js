import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/form.css';
import '../styles/like.css';
import App from './views/App';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('.nav-list'),
  content: document.querySelector('#main-content'),
  toggle: document.querySelector('#dark-mode'),
  currentTheme: localStorage.getItem('theme'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
