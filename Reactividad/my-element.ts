import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
//Una propiedad reactiva es una propiedad que activa el 
//componente para que se actualice cada vez que cambia el valor de la propiedad.
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
//resultpero no es reactiva. Presionar el botón cambia el 
//valor de la propiedad, pero el componente nunca cambia su visualización
  render() {
    return html`
      <button @click=${this.flipCoin}>Flip a coin!</button>
      <p>Result: ${this.result}</p>
    `;
  }
}
