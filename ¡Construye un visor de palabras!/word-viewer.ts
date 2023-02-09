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
private intervalTimer?: number;
  
//setInterval, una función de navegador que llama repetidamente 
//a una función con un retraso fijo entre cada llamada.
connectedCallback() {
    //connectedCallbackse invoca cuando el componente se agrega al DOM 
    super.connectedCallback();
  this.intervalTimer = setInterval(this.tickToNextWord, 1000);
}
//connectedCallback se invoca y setIntervalllama repetidamente this.tickToNextWordcada 1000 ms o cada segundo.
disconnectedCallback() {
    // disconnectedCallback se invoca cuando el componente se elimina del DOM.
  
  super.disconnectedCallback();
  clearInterval(this.intervalTimer);
  this.intervalTimer = undefined;
}
//word-viewerse elimina del DOM, disconnectedCallback se invoca limpiando el intervalo 
//y this.tickToNextWordya no se llama.

render() {
  const splitWords = this.words.split('.');
  const word = splitWords[this.idx % splitWords.length];
  return html`<pre>${word}</pre>`;
}

tickToNextWord = () => { this.idx += 1; };
}

