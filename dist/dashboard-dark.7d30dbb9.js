// Get the input element
var input = document.querySelector(".forms8");
// Get the element containing the text to be replaced
var taskElement = document.querySelector(".this-is-a");
// Listen for changes in the input value
input.addEventListener("input", function(event) {
    // Store the entered value in a variable
    var newTask = event.target.value;
    // Update the text content of the task element with the new value
    taskElement.textContent = newTask;
});

//# sourceMappingURL=dashboard-dark.7d30dbb9.js.map
