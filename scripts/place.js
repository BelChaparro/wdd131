// Set Date object
const today = new Date();

// Get Year and set it on page
document.getElementById("currentYear").textContent = today.getFullYear();

// Set lastModified property
document.getElementById("lastModified").textContent = document.lastModified;