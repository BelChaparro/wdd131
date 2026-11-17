// Set Date object
const today = new Date();

// Get Year and set it on page
document.getElementById("current-year").textContent = today.getFullYear();

// Set lastModified property
document.getElementById("last-modified").textContent = document.lastModified;

// Weather
const temp = 22;
const humidity = 82;
const windSpeed = 21;

document.getElementById("temperature").textContent = temp;
document.getElementById("conditions").textContent = humidity;
document.getElementById("wind").textContent = windSpeed;

// Function to calculate the wind chill factor in °C
const  calculateWindChill = (temp, windSpeed) => (temp <= 10 && windSpeed > 4.8) ? `${(13.12 + 0.6215 * temp - 11.37 * (windSpeed ** 0.16) + 0.3965 * temp * (windSpeed **0.16)).toFixed(1)} °C` : "N/A";

document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);

