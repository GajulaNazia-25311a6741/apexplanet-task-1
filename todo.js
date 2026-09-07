function addTask() {

    // Get input
    let input = document.getElementById("taskInput");

    let task = input.value.trim();


    // Check empty task
    if (task === "") {

        alert("Please enter a task.");

        return;
    }


    // Create list item
    let li = document.createElement("li");


    // Create task text
    let taskText = document.createElement("span");

    taskText.textContent = task;


    // Create delete button
    let deleteButton =
        document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete-btn";


    // Delete task
    deleteButton.onclick = function() {

        li.remove();

    };


    // Add elements
    li.appendChild(taskText);

    li.appendChild(deleteButton);


    // Add task to list
    document
        .getElementById("taskList")
        .appendChild(li);


    // Clear input
    input.value = "";
}
