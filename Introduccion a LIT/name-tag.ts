
//Lit facilita agregar un detector de eventos declarativo
import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('name-tag')
export class NameTag extends LitElement {
  @property()
  checked: boolean = false;

//La sintaxis le dice a Lit que desea establecer o eliminar un atributo booleano en función del valor de la expresión. ?attributeName
//Hay cinco posiciones comunes para las expresiones en las plantillas Lit
//1.-<!-- Child nodes -->
//<h1>${this.pageTitle}</h1>

//2.- <!-- Attribute -->
//<div class=${this.myTheme}></div>

//3.-<!-- Boolean attribute -->
//<p ?hidden=${this.isHidden}>I may be in hiding.</p>

//4.-<!-- Property -->
//<input .value=${this.value}>

//5.-<!-- Event listener -->
//<button @click=${() => {console.log("You clicked a button.")}}>...</button>
  render() {
    return html`
      <div>
        <input type="text" ?disabled=${!this.checked} value="Hello there.">
      </div>
      <label><input type="checkbox" @change=${this.setChecked}> Enable editing</label>
    `;
  }

  setChecked(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
  }

}
