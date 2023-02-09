import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';




@customElement('my-element')
class MyElement extends LitElement {
  @state()
  names = ['Chandler', 'Phoebe', 'Joey', 'Monica', 'Rachel', 'Ross'];
//Utilice el filter()método de matriz para mantener solo los nombres que 
//incluyen la letra "e" seguida de una map()llamada de método de matriz para generar una matriz de 
//resultados de plantilla para colocar en la plantilla del componente.

  render() {
    return html`
      <p>A list of names that include the letter "e"</p>
      <ul>
      ${this.names
        //matriz es útil cuando se encadena de esta manera,
        // pero requiere que la fuente original sea una matriz.
        .filter((name) => name.match(/e/i))
        .map((name) => html`<li>${name}</li>`)}
      </ul>
    `;
  }
}