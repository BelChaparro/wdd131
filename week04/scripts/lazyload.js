// Set Date object
const today = new Date();

// Get Year and set it on page
document.getElementById("current-year").textContent = today.getFullYear();

// Set lastModified property
document.getElementById("last-modified").textContent = document.lastModified;