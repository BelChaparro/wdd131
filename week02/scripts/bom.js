// Declare 3 variables to hold references to the input, button, and list elements:
const input = document.querySelector("#favchap");
const addChapter = document.querySelector("button");
const chapterList = document.querySelector("#list");

//const books = ["1 Nephi", "2 Nephi", "Jacob", "Enos", "Jarom", "Onmi", "Words of Mormon",
//    "Mosiah", "Alma", "Helaman", "3 Nephi", "4 Nephi", "Mormon", "Moroni"];

let i = 1;

// Create a 'click' evento listener for the Add Chapter button with addEventListener:
addChapter.addEventListener('click', function () {
        // Check input to see if it is not blank:
    if (input.value.trim() !== "" && i < 11) {
        // Create a 'li' element that will hold each entry's chapter title:
        const newChapter = document.createElement("li");
    
        // Populate de 'li' element variable's textContent or innterHTML with the input value:
        newChapter.textContent = input.value;

        // Create a delete button:
        const deleteButton = document.createElement("button");

        // Set the delete button's textContent to X:
        deleteButton.textContent = '❌';

        // Add event listener to delete button:
        deleteButton.addEventListener('click', function () {
            chapterList.removeChild(newChapter);
            input.focus();
            i--;
        });

        // Improve accessibility for screen readers by adding a label to the delete button:
        deleteButton.ariaLabel = `Remove ${input.value}`;
    
        // Append the delete button to the 'li' element:
        newChapter.append(deleteButton);

        // Append the 'li' element variable to the 'ul' in your HTML:
        chapterList.appendChild(newChapter);

        // Clear user input field:
        input.value = "";
        input.focus();
    
        i++;
    }
    else if (i >= 11) {
        window.alert("You've reached the top 10! Delete elements to continue adding to the list.");
    }else {
        input.focus();
        window.alert("The field is empty! Enter a Book and Chapter to add to the list!");
    }   
});

// Ideas to increase the app's usability:
// Validate input to only accept BoM books,
// Prevent input duplicates
// Better UI feedback - Show warnings/confirmations
// Improbe accessibility - Ensure the app is usable with screen readers and keyboard navigation
// Format input - Standardize the format of the input for consistency