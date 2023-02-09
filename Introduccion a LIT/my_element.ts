// Primer paso del tutorial 

//Manejo de elementos con typescrip
import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

//cambia mi elemento mediante el DOM

@customElement('my-element')
export class MyElement extends LitElement {
  //crear llamados de propiedades
  @property()
  message: string = 'Hello again.';

  render() {
    return html`
      <p>${this.message}</p>
    `;
  }
}