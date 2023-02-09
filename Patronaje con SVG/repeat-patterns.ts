

//El elemento en esta demostración será una sola pieza de texto. Podemos crear texto en SVG y Lit con plantillas SVG 

import type { SVGTemplateResult } from "lit";

import { LitElement, html, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

//createElementque genere un <text>elemento con texto de visualización configurable usando una 
//plantilla Lit SVG. Agregue atributos de estilo específicos de texto al <text>elemento.
const createElement = (chars: string): SVGTemplateResult => svg`
  <text
    dominant-baseline="hanging"
    font-family="monospace"
    font-size="24px">
    ${chars}
  </text>
`;

@customElement('repeat-pattern')
export class RepeatPattern extends LitElement {    
  @property({type: String}) chars = "lit";
  
  //una plantilla SVG debe ser hija de un <svg>elemento. 
  //El <svg> elemento debe estar contenido dentro de una plantilla HTML
  render() {
    //createElement la render() función de un repeat-pattern componente.
    return html`
      <svg height="100%" width="100%">
        ${createElement(this.chars)}
      </svg>
    `;
  }
}