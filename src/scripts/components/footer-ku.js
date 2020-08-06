class FooterKu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <ul>
          <li><span>Copyright © 2020 - Nongki's</span></li>
          <li><span>handcrafted with <i title="love" class="fa fa-heart"></i> by firmanjabar</span></li>
        </ul>
      </footer>
    `;
  }
}

customElements.define('footer-ku', FooterKu);
