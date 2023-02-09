import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  things = [
    "Raindrops on roses",
    "Whiskers on kittens",
    "Bright copper kettles",
    "Warm woolen mittens",
  ];

  render() {
    return html`
      <p>A few of my favorite things</p>
      <ul>
        ${map(
          this.things,
          (thing, index) => html`
            <li>
              ${thing}
              <button @click=${() => this._deleteThing(index)}>Delete</button>
            </li>
          `
        )}
      </ul>
    `;
  }
//filter()método de matriz devuelve una nueva matriz que se
// asigna a this.things. Dado que la referencia almacenada en 
//this.thingslos cambios, Lit sabrá actualizar el componente cuando _deleteThing()se llame.
  private _deleteThing(index: number) {
    this.things = this.things.filter((_, i) => i !== index);
  }
}
