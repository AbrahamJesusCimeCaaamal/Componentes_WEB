import {LitElement, html, PropertyValues} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {styles} from './styles.js';
import {styleMap} from 'lit/directives/style-map.js';
@customElement('motion-carousel')
export class MotionCarousel extends LitElement {
  static styles = styles;

  @query('slot[name="selected"]', true)
  private selectedSlot!: HTMLSlotElement;

  @query('slot[name="previous"]', true)
  private previousSlot!: HTMLSlotElement;

  private selectedInternal = 0;
  @property({type: Number})
  selected = 0;

  get maxSelected() {
    return this.childElementCount - 1;
  }

  hasValidSelected() {
    return this.selected >= 0 && this.selected <= this.maxSelected;
  }

  private left = 0;
  render() {
    const p = this.selectedInternal;
    const s = (this.selectedInternal =
      this.hasValidSelected() ? this.selected : this.selectedInternal);
      //shouldMovese calcula en función del selectedInternalcambio de la propiedad 
      //de seguimiento y el uso de la propiedad de ReactiveElement hasUpdatedpara evitar 
      //animar el primer renderizado.
    const shouldMove = this.hasUpdated && s !== p;
    const atStart = p === 0;
    const toStart = s === 0;
    const atEnd = p === this.maxSelected;
    const toEnd = s === this.maxSelected;
    //shouldAdvancese calcula para que la posición avance si el elemento seleccionado aumenta, 
    //con el posicionamiento invertido cuando se ajusta al principio o al final.
    const shouldAdvance = shouldMove &&
      (atEnd ? toStart : atStart ? !toEnd : s > p);
      //delta se calcula en base a shouldMovey shouldAdvance.
    const delta = (shouldMove ? Number(shouldAdvance) || -1 : 0) * 100;
    this.left -= delta;
    //left se almacena como una propiedad en el elemento,
    const animateLeft = `${this.left}%`;
    // El contenedor animado ( animateLeft) es la posición almacenada en left.
    const selectedLeft = `${-this.left}%`;
    const previousLeft = `${-this.left - delta}%`;
    return html`
      <div class="fit"
        @click=${this.clickHandler}
        style=${styleMap({left: animateLeft})}
      >
        <div class="fit" style=${styleMap({left: previousLeft})}>
          <slot name="previous"></slot>
        </div>
        <div class="fit selected" style=${styleMap({left: selectedLeft})}>
          <slot name="selected"></slot>
        </div>
      </div>
    `;
  }

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
    // unset old slot state
    this.selectedSlot.assignedElements()[0]?.removeAttribute('slot');
    this.previousSlot.assignedElements()[0]?.removeAttribute('slot');
    // set slots
    this.children[this.previous]?.setAttribute('slot', 'previous');
    this.children[this.selected]?.setAttribute('slot', 'selected');
  }

}