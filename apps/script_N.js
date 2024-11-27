document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const task = taskInput.value;
    if (task === '') return;

    const taskList = getTasks();
    taskList.push({ task: task, completed: false });
    saveTasks(taskList);
    taskInput.value = '';
    renderTasks();
}

function toggleTask(index) {
    const taskList = getTasks();
    taskList[index].completed = !taskList[index].completed;
    saveTasks(taskList);
    renderTasks();
}

function deleteTask(index) {
    const taskList = getTasks();
    taskList.splice(index, 1);
    saveTasks(taskList);
    renderTasks();
}

function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasks(taskList) {
    localStorage.setItem('tasks', JSON.stringify(taskList));
}

function loadTasks() {
    renderTasks();
}

function renderTasks() {
    const taskList = getTasks();
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    taskList.forEach((taskItem, index) => {
        const li = document.createElement('li');
        li.className = taskItem.completed ? 'completed' : '';

        const span = document.createElement('span');
        span.textContent = taskItem.task;
        span.onclick = () => toggleTask(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Löschen';
        deleteButton.onclick = () => deleteTask(index);

        li.appendChild(span);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    });
}

function back() {
    window.location = "../index_2.html"
}

function enter(event) {
	if (event.key === 'Enter') {
		addTask();
	}
}