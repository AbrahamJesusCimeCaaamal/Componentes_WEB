import {LitElement, html} from 'lit';
import {customElement, state, query} from 'lit/decorators.js';

type ToDoItem = {
    text: string,
    completed: boolean
  }
  
// el código de inicio se transfiere del último paso, pero hemos agregado la 
//capacidad de marcar un elemento como completado al hacer clic en él.
  @customElement('todo-list')
  export class ToDoList extends LitElement {
    //styles Agregue un campo de clase estático
    static styles = css`
      .completed {
        text-decoration-line: line-through;
        color: #777;
      }
    `;
  
    @state()
    private _listItems = [
      { text: 'Make to-do list', completed: true },
      { text: 'Add some styles', completed: true }
    ];
  
    render() {
      return html`
        <h2>To Do</h2>
        <ul>
          ${this._listItems.map((item) =>
            html`
              <li
                  class=${item.completed ? 'completed' : ''}
                  @click=${() => this.toggleCompleted(item)}>
                ${item.text}
              </li>`
          )}
        </ul>
        <input id="newitem" aria-label="New item">
        <button @click=${this.addToDo}>Add</button>
      `;
    }
  
    toggleCompleted(item: ToDoItem) {
      item.completed = !item.completed;
      this.requestUpdate();
    }
  //El @querydecorador (usado en la versión TypeScript del código) es 
 //una forma práctica de obtener una referencia a un nodo en el DOM interno de su componente.

  @query('#newitem')
  input!: HTMLInputElement;

  addToDo() {
    this._listItems = [...this._listItems,
        {text: this.input.value, completed: false}];
    this.input.value = '';
  }
}

