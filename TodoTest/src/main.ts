import './style.css'

export type todos = {
  id:number,
  text:string,
}

const input = document.getElementById("text-input") as HTMLInputElement;
const button = document.getElementById("input-button") as HTMLButtonElement;
const todoList = document.getElementById("todo-list") as HTMLUListElement;
const deleteList = document.getElementById("delete") as HTMLButtonElement;

button.addEventListener('click',()=> {
  const Todo = input.value;
  if (Todo.trim()==="") return;
  todoList.appendChild(ul);

});

