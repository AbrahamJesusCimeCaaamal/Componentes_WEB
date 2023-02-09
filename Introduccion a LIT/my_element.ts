// Primer paso del tutorial 

//Manejo de elementos con typescrip
import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

//cambia el mi elemento mediante el DOM
@customElement('my-element')
export class MyElement extends LitElement {
  render() {
    return html`
      <p>Hello world! From my-element.</p>
    `;
  }
}