import {LitElement, html, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';

//La datepropiedad se establece en index.html, utilizando JavaScript. 
//La datepropiedad no se puede establecer desde un atributo, 
//porque Lit no tiene un convertidor de atributos incorporado para
// convertir una fecha de cadena en un Dateobjeto

@customElement('date-display')
export class DateDisplay extends LitElement {
  @property({attribute: false})
  date = new Date();

  @property({type: String, attribute: 'date-str'})
  dateStr = '';

//Los convertidores de atributos le dicen a Lit cómo convertir un atributo
// en una propiedad y, en el caso de que una propiedad reactiva tenga la reflect: true bandera

  render() {
    const locale = 'en-US';
    const options: Intl.DateTimeFormatOptions =
        {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    return html`
      <p>The given date is: ${this.date.toLocaleDateString(locale, options)}</p>
    `;
  }
}
