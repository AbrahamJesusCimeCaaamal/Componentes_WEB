import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
//classMapdirectiva es una directiva Lit que puede alternar
// dinámicamente una lista de clases en un elemento. classMaptoma un objeto
// como argumento en el que cada clave se trata como un nombre de clase y,
// si el valor es verdadero, la clase se agrega al elemento.

import { classMap } from 'lit/directives/class-map.js';

//El @customElement decorador de TypeScript es una forma
// abreviada del equivalente JavaScript de llamar customElements.


@customElement('word-viewer')
class WordViewer extends LitElement {
  static styles = css`
    :host {
      background-color: white;
      color: violet;
      cursor: pointer;
      display: block;
    }
    pre {
      padding: 0.2em;
    }
    .backwards {
      color: white;
      background-color: violet;
    }
  `
//cuando this.playDirection === -1, el <pre>elemento ganará la clase backwards
  @state() private playDirection: -1 | 1 = 1;
  @state() private idx = 0;
  @property() words = 'initial value';

  private intervalTimer?: number;

  connectedCallback() {
    super.connectedCallback();
    this.intervalTimer = setInterval(this.tickToNextWord, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.intervalTimer);
    this.intervalTimer = undefined;
  }

  render() {
    const splitWords = this.words.split('.');
    const idx = ((this.idx % splitWords.length) + splitWords.length) % splitWords.length;
    const word = splitWords[idx];
    return html`<pre
      class="${classMap({ backwards: this.playDirection === -1 })}"
      @click=${this.switchPlayDirection}
    >${word}</pre>`;
  }

  tickToNextWord = () => { this.idx += this.playDirection; };

  switchPlayDirection() {
    this.playDirection *= -1;
  }
}