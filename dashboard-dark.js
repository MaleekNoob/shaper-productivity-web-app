// Get the button element
var button = document.querySelector('.buttons20');
var button1 = document.querySelector('.buttons200');

// Get the input elements
var taskInput = document.querySelector('.forms8');
var tempInput = document.querySelector('.forms10');
var dateInput = document.querySelector('.forms11');
var note = document.querySelector('.forms12');
var text = document.querySelector('.forms14');

// Get the element containing the text and date to be replaced
var taskElement1 = document.querySelector('.taskkk1');
var dateElement1 = document.querySelector('.date1');

var taskElement2 = document.querySelector('.taskkk2');
var dateElement2 = document.querySelector('.date2');

var write_note = document.querySelector('.tag1');
var write_description = document.querySelector('.description1');
var write_note1 = document.querySelector('.tag2');
var write_description1 = document.querySelector('.description2');
var write_note2 = document.querySelector('.tag3');
var write_description2 = document.querySelector('.description3');
var write_note3 = document.querySelector('.tag4');
var write_description3 = document.querySelector('.description4');

taskElement2.textContent = 'Respond to emails';
dateElement1.textContent = '23 May 2021';

// Listen for a click event on the button
button.addEventListener('click', function() {
  // Get the values entered in the input boxes
  var newTask = taskInput.value;
  var newDate = dateInput.value;

  taskElement2.textContent = taskElement1.textContent;
  dateElement2.textContent = dateElement1.textContent;
  
  // Update the text content of the task and date elements with the new values
  taskElement1.textContent = newTask;
  dateElement1.textContent = newDate;

    // Clear the input boxes
    taskInput.value = '';
    dateInput.value = '';
    tempInput.value = '';
});

button1.addEventListener('click', function() {
  var newNote = note.value;
  var newText = text.value;

  write_note3.textContent = write_note2.textContent;
  write_description3.textContent = write_description2.textContent;

  write_note2.textContent = write_note1.textContent;
  write_description2.textContent = write_description1.textContent;

  write_note1.textContent = write_note.textContent;
  write_description1.textContent = write_description.textContent;

  write_description.textContent = newText;
  write_note.textContent = newNote;

  note.value = '';
  text.value = '';
});
