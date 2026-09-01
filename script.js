function addTask() {

    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement("li");

    listItem.textContent = task;

    document.getElementById("taskList").appendChild(listItem);

    taskInput.value = "";
}