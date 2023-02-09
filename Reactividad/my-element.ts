import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

// La actualización de una propiedad reactiva puede
// desencadenar un ciclo de actualización reactiva, 
//que a su vez produce efectos secundarios, como volver 
//a representar el elemento y actualizar sus atributos.

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  result: string = '';

  flipCoin() {
    if (Math.random() < 0.5) {
      this.result = 'Heads';
    } else {
      this.result = 'Tails';
    }
  }

  render() {
    return html`
      <button @click=${this.flipCoin}>Flip a coin!</button>
      <p>Result: ${this.result}</p>
    `;
  }
}