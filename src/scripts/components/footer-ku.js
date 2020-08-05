class FooterKu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <ul>
          <li>Copyright © 2020 - Nongki's</li>
          <li>handcrafted with <i title="love" class="fa fa-heart"></i> by firmanjabar</li>
        </ul>
      </footer>
    `;
  }
}

customElements.define('footer-ku', FooterKu);
