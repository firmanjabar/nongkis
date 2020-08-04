/* eslint-disable object-curly-newline */
import DrawerInitiator from '../utils/drawer-initiator';
import DarkMode from '../utils/dark-mode';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content, toggle, currentTheme }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._toggle = toggle;
    this._currentTheme = currentTheme;

    this._initialAppShell();
    this._initialDarkMode();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  _initialDarkMode() {
    DarkMode.init({
      toggle: this._toggle,
      currentTheme: this._currentTheme,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
