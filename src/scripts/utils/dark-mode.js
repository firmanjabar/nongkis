const DarkMode = {
  init({ toggle, currentTheme }) {
    toggle.addEventListener('click', (event) => {
      this._toggleSwitch(event);
    });

    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
    }
  },

  _toggleSwitch(e) {
    e.stopPropagation();
    const cekTheme = (event) =>
      event.target.classList.value === 'light' || event.path[1].classList.value === 'light';

    if (cekTheme(e)) {
      document.documentElement.setAttribute('data-theme', 'dark');
      e.target.classList.remove('light');
      e.target.classList.add('dark');
      e.path[1].classList.remove('light');
      e.path[1].classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      e.target.classList.remove('dark');
      e.target.classList.add('light');
      e.path[1].classList.remove('dark');
      e.path[1].classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  },
};

export default DarkMode;
