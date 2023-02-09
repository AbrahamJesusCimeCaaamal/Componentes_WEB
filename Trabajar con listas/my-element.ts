import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {repeat} from 'lit/directives/repeat.js';

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  tasks = [
    { id: 'a', label: 'Learn Lit'},
    { id: 'b', label: 'Feed the cat'},
    { id: 'c', label: 'Go for a walk'},
    { id: 'd', label: 'Take a nap'},
  ];
  //repeat()en lugar de la map()directiva, proporcionando iterable, una función clave que devuelve 
  //un identificador único para un elemento en particular y la plantilla para representar cada elemento.

  render() {
    return html`
      <p>Things to do today:</p>
      <button @click=${() => this._sort(1)}>Sort ascending</button>
      <button @click=${() => this._sort(-1)}>Sort descending</button>
      <ul>
      
        ${repeat(
          this.tasks,
          (task) => task.id,
          (task) => html`
            <li>
              <label><input type="checkbox" />${task.id}) ${task.label}</label>
            </li>
          `
        )}
      </ul>
    `;
  }
  // la repeat()directiva para mantener el elemento de la lista y la casilla de 
  //verificación vinculados al elemento específico de la matriz. El uso de esta 
  //directiva con una función clave le permite a Lit mantener la asociación de clave a
  // DOM entre las actualizaciones al mover los nodos DOM cuando sea necesario.
  private _sort(dir: number) {
    this.tasks.sort((a, b) => a.label.localeCompare(b.label) * dir);
    this.requestUpdate();
  }
}