 
 // script file
const todoInput = document.getElementById('todo-input');
const todoAddBtn = document.getElementById('todo-add-btn');
const todoList = document.getElementById('todo-list');
const completedTasks = document.getElementById('completed-tasks');
const pendingTasks = document.getElementById('pending-tasks');
const totalTasks = document.getElementById('total-tasks');

let tasks = [];

// Add Task
todoAddBtn.addEventListener('click', () => {
    const taskTitle = todoInput.value;
    if (taskTitle !== '') {
        const task = {
            id: Date.now(),
            title: taskTitle,
            completed: false
        };
        tasks.push(task);
        renderTasks();
        todoInput.value = '';
    }
});

// Render Tasks
function renderTasks() {
    todoList.innerHTML = '';
    completedTasks.textContent = tasks.filter(task => task.completed).length;
    pendingTasks.textContent = tasks.filter(task => !task.completed).length;
    totalTasks.textContent = tasks.length;

    tasks.forEach(task => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        if (task.completed) {
            todoItem.classList.add('completed');
        }
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            task.completed = !task.completed;
            renderTasks();
        });
        const span = document.createElement('span');
        span.textContent = task.title;
        const button = document.createElement('button');
        button.textContent = 'X';
        button.addEventListener('click', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            renderTasks();
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(span);
        todoItem.appendChild(button);
        todoList.appendChild(todoItem);
    });
}
