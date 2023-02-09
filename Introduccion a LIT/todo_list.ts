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
      { text: 'Complete Lit tutorial', completed: false }
    ];
    @property()
    hideCompleted = false;
  
  
    render() {
        const items = this.hideCompleted
          ? this._listItems.filter((item) => !item.completed)
          : this._listItems;
        const todos = html`
          <ul>
            ${items.map((item) =>
                html`
                  <li
                      class=${item.completed ? 'completed' : ''}
                      @click=${() => this.toggleCompleted(item)}>
                    ${item.text}
                  </li>`
            )}
          </ul>
        `;
        const caughtUpMessage = html`
          <p>
          You're all caught up!
          </p>
        `;
        const todosOrMessage = items.length > 0
          ? todos
          : caughtUpMessage;
    
        return html`
          <h2>To Do</h2>
          ${todosOrMessage}
          <input id="newitem" aria-label="New item">
          <button @click=${this.addToDo}>Add</button>
          <br>
          <label>
            <input type="checkbox"
              @change=${this.setHideCompleted}
              ?checked=${this.hideCompleted}>
            Hide completed
          </label>
        `;
      }
  
    toggleCompleted(item: ToDoItem) {
      item.completed = !item.completed;
      this.requestUpdate();
    }

    setHideCompleted(e: Event) {
        this.hideCompleted = (e.target as HTMLInputElement).checked;
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

