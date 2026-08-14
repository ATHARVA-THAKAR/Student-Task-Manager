let tasks = [];

function addTask() {

    const taskInput = document.getElementById("taskInput");
    const priority = document.getElementById("priority");

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const task = {
        text: taskText,
        priority: priority.value,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    displayTasks();
    updateSummary();
}


function displayTasks() {

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>
                <strong>${task.text}</strong>
                <br>
                Priority: ${task.priority}
            </span>

            <div>
                <button onclick="completeTask(${index})">
                    ${task.completed ? "Undo" : "Complete"}
                </button>

                <button onclick="deleteTask(${index})">
                    Delete
                </button>
            </div>
        `;

        if (task.completed) {
            li.style.textDecoration = "line-through";
        }

        taskList.appendChild(li);
    });
}


function completeTask(index) {

    tasks[index].completed = !tasks[index].completed;

    displayTasks();
    updateSummary();
}


function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();
    updateSummary();
}


function updateSummary() {

    const total = tasks.length;

    const completed = tasks.filter(
        task => task.completed
    ).length;

    const pending = total - completed;

    document.getElementById("totalTasks").textContent = total;
    document.getElementById("completedTasks").textContent = completed;
    document.getElementById("pendingTasks").textContent = pending;
}