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
  // elementos slotpara gestionar la visualización del elemento seleccionado.

  render() {
    if (this.hasValidSelected()) {
      this.selectedInternal = this.selected;
    }
    // name atributo de slotpara selectedque solo se muestre el elemento seleccionado.
    return html`
      <div class="fit">
        <slot name="selected"></slot>
      </div>
    `;
  }

  private previous = 0;
  //El updatedmétodo primero verifica si necesita hacer algún trabajo, 
  //usando el changedPropertiesargumento y el resultado de hasValidSelected().
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