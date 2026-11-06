// Declare 3 variables to hold references to the input, button, and list elements:
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const chapterList = document.querySelector("#list");

// Create a 'li' element that will hold each entry's chapter title:
const newChapter = document.createElement('li');

// Create a delete button:
const deleteButton = document.createElement('button');

// Imrpove accessibility for screen readers by adding a label to the delete button:
deleteButton.ariaLabel = `Remove ${input.value}`;

// Populate de 'li' element variable's textContent or innterHTML with the input value:
newChapter.textContent = input.value;

// Set the delete button's textContent to X:
deleteButton.textContent = '❌';

// Append the delete button to the 'li' element:
newChapter.append(deleteButton);

// Append the 'li' element variable to the 'ul' in your HTML:
chapterList.appendChild(newChapter);