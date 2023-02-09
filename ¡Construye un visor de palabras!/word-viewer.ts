import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

//El @customElement decorador de TypeScript es una forma
// abreviada del equivalente JavaScript de llamar customElements.

@customElement('word-viewer')
//propiedades reactivas de Lit son propiedades especiales
// que pueden interactuar con el ciclo de vida de renderizado de Lit.
class WordViewer extends LitElement {
  @property() words = 'initial value';
//el componente programa una actualización. De forma predeterminada, Lit configura la sincronización de
// atributos para la propiedad y actualizará la propiedad cuando cambie el atributo.
  render() {
    return html`<pre>${this.words}</pre>`
  }
}
