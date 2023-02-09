import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

//El @customElement decorador de TypeScript es una forma
// abreviada del equivalente JavaScript de llamar customElements.

@customElement('word-viewer')
class WordViewer extends LitElement {
    //render()devuelve una plantilla . Las plantillas iluminadas usan el html literal de
    // la plantilla etiquetada para ejecutarse sin un paso de compilación en JavaScript.
  render() {
    return html`<pre>A super expressive and efficient template!</pre>`
  }
}

declare global {
    //permite a TypeScript inferir el tipo de document.createElement('word-viewer')su WordViewerclase.
  interface HTMLElementTagNameMap {
    "word-viewer": WordViewer
  }
}