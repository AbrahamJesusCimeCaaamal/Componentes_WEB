import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

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
  `;

  @state() private playDirection: -1 | 1 = 1;
  @state() private idx = 0;
  @property() words = 'initial value';

  private intervalTimer?: number;

  connectedCallback() {
    super.connectedCallback();
    //tickToNextWord para elegir la siguiente palabra según el playDirection.
    this.intervalTimer = setInterval(this.tickToNextWord, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.intervalTimer);
    this.intervalTimer = undefined;
  }
//worden el render() método para dar cuenta de un negativo this.idx.
  render() {
    const splitWords = this.words.split('.');
    const idx = ((this.idx % splitWords.length) + splitWords.length) % splitWords.length;
    const word = splitWords[idx];
    return html`<pre
      @click=${this.switchPlayDirection}
    >${word}</pre>`;
  }
// agregue un switchPlayDirectionmétodo para invertir el playDirection.
  tickToNextWord = () => { this.idx += this.playDirection; };
//enlace this.switchPlayDirection para invocar cuando se hace clic en el elemento <pre>
  switchPlayDirection() {
    this.playDirection *= -1;
  }
}