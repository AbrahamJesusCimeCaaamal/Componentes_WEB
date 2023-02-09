import {LitElement, html, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './styles.js';

@customElement('motion-carousel')
export class MotionCarousel extends LitElement {
  static styles = styles;

  private selectedInternal = 0;
  @property({type: Number})
  selected = 0;
//El carrusel ahora muestra su primer elemento secundario, pero no hay forma
// de cambiar lo que se muestra. Necesita una selectedpropiedad para controlar qué elemento se muestra.
  get maxSelected() {
    return this.childElementCount - 1;
  }

  hasValidSelected() {
    return this.selected >= 0 && this.selected <= this.maxSelected;
  }
//selected cualquier valor, pero solo es una selección 
//válida si es un número en el rango del número total de elementos en el carrusel
  render() {
    if (this.hasValidSelected()) {
      this.selectedInternal = this.selected;
    }
    return html`
      <div class="fit">
        <slot></slot>
      </div>
    `;
  }

}