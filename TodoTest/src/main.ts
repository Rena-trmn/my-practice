import './style.css'

//型の定義
interface Todo {
  id:number;
  text:string;
}

//DOM取得
const input = document.getElementById("todo-input") as HTMLInputElement;
const addBtn = document.getElementById("add-btn") as HTMLButtonElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

//TODOを保存する配列
let todos : Todo[] = [];

//画面描画
function renderTodos():void {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";
    deleteBtn.onclick = () =>deleteTodo(todo.id);

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

}

//TODOの追加
function addTodo():void{
  if (input.value === "")return;

  const newTodo:Todo = {
    id: Date.now(),
    text:input.value,
  }
  
  todos.push(newTodo);
  input.value = "";
  renderTodos();
}

//TODOの削除
function deleteTodo(id:number):void {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

addBtn.addEventListener("click",addTodo);