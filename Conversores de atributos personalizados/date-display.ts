import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {dateConverter} from './date-converter.js';

//Los componentes web pueden recibir datos de muchas maneras,
// pero una de las formas más comunes es usar un atributo porque los atributos son declarativos,

@customElement('date-display')
//El Dateobjeto se pasa como una propiedad de JavaScript en
// index.html lugar de un atributo de cadena legible.
export class DateDisplay extends LitElement {
  @property({converter: dateConverter})
  date = new Date();

  render() {
    const locale = 'en-US';
    const options: Intl.DateTimeFormatOptions =
        {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    return html`
      <p>The given date is: ${this.date.toLocaleDateString(locale, options)}</p>
    `;
  }
}
