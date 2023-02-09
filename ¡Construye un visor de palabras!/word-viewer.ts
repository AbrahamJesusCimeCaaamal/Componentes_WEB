import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

//El @customElement decorador de TypeScript es una forma
// abreviada del equivalente JavaScript de llamar customElements.

@customElement('word-viewer')
//propiedades reactivas de Lit son propiedades especiales
// que pueden interactuar con el ciclo de vida de renderizado de Lit.
class WordViewer extends LitElement {
  @state() private idx = 0;
  @property() words = 'initial value';
//el componente programa una actualización. De forma predeterminada, Lit configura la sincronización de
// atributos para la propiedad y actualizará la propiedad cuando cambie el atributo.
  render() {
    //El estado reactivo interno se refiere a las propiedades
    // reactivas que no forman parte de la API pública del componente.
    const splitWords = this.words.split('.');
    //% operador mantendrá el índice resultante dentro de los límites de la splitWordsmatriz.
    const word = splitWords[this.idx % splitWords.length];
    return html`<pre>${word}</pre>`;
  }
}
