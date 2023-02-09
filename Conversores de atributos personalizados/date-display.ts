import {LitElement, html, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('date-display')
export class DateDisplay extends LitElement {
  @property({attribute: false})
  //date la propiedad de su componente todavía se configura con JavaScript
  date = new Date();
//dateStr propiedad que podría configurarse a partir de un atributo
  @property({type: String, attribute: 'date-str'})
  dateStr = '';

  //El willUpdate método es un buen lugar para reconciliar dos propiedades reactivas diferentes.
  render() {
    const locale = 'en-US';
    const options: Intl.DateTimeFormatOptions =
        {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    return html`
      <p>The given date is: ${this.date.toLocaleDateString(locale, options)}</p>
    `;
  }
}