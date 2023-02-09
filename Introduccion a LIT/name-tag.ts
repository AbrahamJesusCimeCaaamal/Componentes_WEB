
//Lit facilita agregar un detector de eventos declarativo
import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('name-tag')
export class NameTag extends LitElement {
  @property()
  name: string = 'Your name here';

  render() {
    return html`
      <p>Hello, ${this.name}</p>
      <input @input=${this.changeName} placeholder="Enter your name">
    `;
  }
//Esta @inputexpresión se agrega this.changeNamecomo un detector de eventos para el input evento.
//namees una propiedad reactiva, establecerla en el controlador de eventos activa la actualización del componente.
  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }
}
