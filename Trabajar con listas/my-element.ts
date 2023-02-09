import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';

//una directiva integrada map()que le permite transformar
// los elementos en iterables. La map()directiva funciona con
// todo tipo de iterables, incluidos arreglos, conjuntos, mapas
// e incluso generadores. Devuelve un iterable que contiene el resultado
// de llamar a la función de devolución de llamada proporcionada en cada elemento.

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  items = new Set(['Apple', 'Banana', 'Grape', 'Orange', 'Lime'])

  render() {
    return html`
      <p>My unique fruits</p>
      <ul>
        ${map(this.items, (item) => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}