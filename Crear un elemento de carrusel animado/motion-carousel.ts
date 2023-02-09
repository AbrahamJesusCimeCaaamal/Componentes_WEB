import {LitElement, html, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './styles.js';

@customElement('motion-carousel')
export class MotionCarousel extends LitElement {
  static styles = styles;

  private selectedInternal = 0;
  @property({type: Number})
  selected = 0;

  get maxSelected() {
    return this.childElementCount - 1;
  }

  hasValidSelected() {
    return this.selected >= 0 && this.selected <= this.maxSelected;
  }

  render() {
    //render método para agregar la @click
    if (this.hasValidSelected()) {
      this.selectedInternal = this.selected;
    }
    //La @click expresión en la plantilla llama al clickHandler método cuando el usuario hace clic en el carrusel.
    return html`
      <div class="fit" @click=${this.clickHandler}>
        <slot name="selected"></slot>
      </div>
    `;
  }
//shiftKey para permitir que el usuario retroceda. 
//El valor se ajusta al primer o último elemento cuando es necesario.
  private clickHandler(e: MouseEvent) {
    const i = this.selected + (Number(!e.shiftKey) || -1);
    this.selected = i > this.maxSelected ? 0 : i < 0 ? this.maxSelected : i;
    const change = new CustomEvent('change',
      {detail: this.selected, bubbles: true, composed: true});
    this.dispatchEvent(change);
  }

  private previous = 0;
  protected updated(changedProperties: PropertyValues) {
    if (changedProperties.has('selected') && this.hasValidSelected()) {
      this.updateSlots();
      this.previous = this.selected;
    }
  }

  private updateSlots() {
    this.children[this.previous]?.removeAttribute('slot');
    this.children[this.selected]?.setAttribute('slot', 'selected');
  }

}