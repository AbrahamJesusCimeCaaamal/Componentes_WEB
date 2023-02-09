import {LitElement, html} from 'lit';
import {map} from 'lit/directives/map.js';
import {customElement, property} from 'lit/decorators.js';

// Lit utiliza una verificación de desigualdad estricta ( !==) 
//para determinar si una propiedad ha cambiado. Si muta un 
//objeto o matriz existente, Lit no detectará ningún cambio.

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  //groceri es ahora es una nueva matriz, el cambio desencadena una actualización
  groceries = ['tea', 'milk', 'honey', 'chocolate'];

  removeItem(item: string) {
    const indexToRemove = this.groceries.indexOf(item);
    this.groceries =
        this.groceries.filter((_, i) => i !== indexToRemove);
  }

  render() {
    return html`
      ${map(this.groceries, (item) =>
        html`<button @click=${() => this.removeItem(item)}>x</button>  ${item}<br>`
      )}
    `;
  }
}
