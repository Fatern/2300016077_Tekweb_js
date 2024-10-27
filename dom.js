document.getElementById("add-btn").addEventListener("click", function () {
const taskInput = document.getElementById("task-input");
const taskText = taskInput.value.trim();

if (taskText !== "") {
    const taskList = document.getElementById("task-list");

    const listItem = document.createElement("li");
    listItem.className = "task-item";
    listItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Delete</button>
        `;

    taskList.appendChild(listItem);
    taskInput.value = "";
}
});

function removeTask(button) {
const taskItem = button.parentElement;
taskItem.remove();
}
