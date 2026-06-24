// Selecting DOM elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const completedCount = document.getElementById('completedCount');
const emptyState = document.getElementById('emptyState');

function refreshTaskStats() {
    const tasks = taskList.querySelectorAll('li');
    const completedTasks = taskList.querySelectorAll('li.completed');

    taskCount.innerText = tasks.length;
    completedCount.innerText = completedTasks.length;
    emptyState.style.display = tasks.length === 0 ? 'block' : 'none';
}

// Function to add a new task
function addTask() {
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item (li)
    const li = document.createElement('li');

    // Task Name Span
    const taskSpan = document.createElement('span');
    taskSpan.classList.add('task-text');
    taskSpan.innerText = taskValue;

    // Actions Container
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    // Complete Button
    const completeBtn = document.createElement('button');
    completeBtn.innerText = '✓';
    completeBtn.classList.add('complete-btn');
    completeBtn.onclick = function() {
        li.classList.toggle('completed');
        refreshTaskStats();
    };

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
        refreshTaskStats();
    };

    // Append elements
    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(deleteBtn);
    li.appendChild(taskSpan);
    li.appendChild(actionsDiv);
    taskList.appendChild(li);
    refreshTaskStats();

    // Clear input field
    taskInput.value = "";
    taskInput.focus();
}

// Event listener for Add Button click
addButton.addEventListener('click', addTask);

// Event listener for "Enter" key
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

refreshTaskStats();