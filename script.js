// Selecting DOM elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

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
    };

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Append elements
    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(deleteBtn);
    li.appendChild(taskSpan);
    li.appendChild(actionsDiv);
    taskList.appendChild(li);

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