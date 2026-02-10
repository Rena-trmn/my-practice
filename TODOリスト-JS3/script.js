//ToDoリストの管理クラス
class TodoList {
    constructor() {
        this.tasks = [];
        this.todoInput = document.getElementById("todoInput");
        this.addButton = document.getElementById("addButton");
        this.todoList = document.getElementById("todoList");

        //イベントリスナーを設定
        this.addButton.addEventListener("click", () => this.addTask());
        this.todoInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") this.addTask();
        });

        //初期表示
        this.renderTasks();

    }
    //タスクを追加
    addTask() {
        const taskText = this.todoInput.value.trim();

        if (taskText) {
            this.tasks.push({
                id: Date.now(),
                text: taskText,
                completed: false
            });

            this.todoInput.value = "";

            this.saveTasks();
            this.renderTasks();

        }
    }

    // タスクを保存
saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
}

    //タスクを削除
    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
        this.renderTasks();

    }

    //タスクの完了状態を更新
    toggleTask(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.renderTasks();
        }
    }

    renderTasks() {
        //タスクリストをリセット
        this.todoList.innerHTML = "";
        //各タスク要素作成
        this.tasks.forEach(task => {
            const li = document.createElement("li");
            li.className = `task-item ${task.completed ? 'completed' : ""}`;

            //チェックボックス作成
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.completed;
            checkbox.addEventListener("change", () => this.toggleTask(task.id));

            //タスクのテキスト
            const taskText = document.createElement("span");
            taskText.className = "task-text";
            taskText.textContent = task.text;

            //削除ボタン
            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-button";
            deleteButton.textContent = "削除";
            deleteButton.addEventListener("click", () => this.deleteTask(task.id));

            //要素構成
            li.appendChild(checkbox);
            li.appendChild(taskText);
            li.appendChild(deleteButton);
            this.todoList.appendChild(li);

        });


    }
}
document.addEventListener('DOMContentLoaded', () => {
    new TodoList();
});
