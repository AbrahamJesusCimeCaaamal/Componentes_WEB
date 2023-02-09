import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './styles.js';
//Eso se hace con overflowde hidden. Los elementos tienen
// un tamaño explícito 100%para que quepan dentro del carrusel.
@customElement('motion-carousel')
export class MotionCarousel extends LitElement {
  static styles = styles;

  render() {
    return html`
      <div class="fit">
        <slot></slot>
      </div>
    `;
  }

}