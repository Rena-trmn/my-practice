const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");


addBtn.addEventListener("click",()=>{
    const todoText = todoInput.value;

    if(todoText ===""){
        return;
    }
    //部品を作る
    const li = document.createElement("li");

    const checkbox  = document.createElement("input");
    checkbox.type ="checkbox";

    const span = document.createElement("span");
    span.textContent = todoText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除"

    //削除動作
    deleteBtn.addEventListener("click",() => {
        todoList.removeChild(li);
    });

    //チェックボックス動作
    checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        span.classList.add("done");
    } else {
        span.classList.remove("done");
        
        }
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = "";


});
