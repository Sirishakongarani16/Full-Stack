// Select HTML elements using DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

// Function to update empty message
function updateEmptyMessage() {
    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}

// Add task button event listener
addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    // Check if task is empty
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create new list item
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    // Create task text
    const task = document.createElement("span");
    task.className = "task-text";
    task.textContent = taskText;

    // Create button group
    const buttonGroup = document.createElement("div");
    buttonGroup.className = "button-group";

    // Create Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";

    // Complete button event
    completeBtn.addEventListener("click", function () {

        task.classList.toggle("completed");

        if (task.classList.contains("completed")) {
            completeBtn.textContent = "Completed";
        } else {
            completeBtn.textContent = "Complete";
        }
    });

    // Create Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Delete button event
    deleteBtn.addEventListener("click", function () {

        taskItem.remove();

        // Show empty message if there are no tasks
        updateEmptyMessage();
    });

    // Add buttons to button group
    buttonGroup.appendChild(completeBtn);
    buttonGroup.appendChild(deleteBtn);

    // Add task and buttons to list item
    taskItem.appendChild(task);
    taskItem.appendChild(buttonGroup);

    // Add list item to task list
    taskList.appendChild(taskItem);

    // Clear input box
    taskInput.value = "";

    // Update empty message
    updateEmptyMessage();
});

// Allow Enter key to add task
taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTaskBtn.click();
    }
});

// Display empty message initially
updateEmptyMessage();
