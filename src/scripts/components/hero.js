class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        <h1 class="hero__title">
          Good Food is A
          <span class="hero-bold">Good Mood.</span>
        </h1>
        <p class="hero__tagline">
          Food is the ingredient that bind us together! And nothing brings people together like a
          Good Food!
        </p>
        <a href="#main-content" class="btn">Let's Nongkrong!</a>
      </div>
    `;
  }
}

customElements.define('hero-custom', Hero);
